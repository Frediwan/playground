import { useState, useEffect } from 'react';
import { Game, GameState, GameMode } from '../types/game';
import { loadGameState, saveGameState, createNewGame } from '../utils/storage';

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentGame: null,
    savedGames: [],
  });

  useEffect(() => {
    const initGameState = async () => {
      const state = await loadGameState();
      setGameState(state);
    };
    initGameState();
  }, []);

  const startNewGame = async (mode: GameMode, playerName?: string) => {
    const newGame = createNewGame(mode, playerName);
    const newState = {
      currentGame: newGame,
      savedGames: gameState.savedGames,
    };
    await saveGameState(newState);
    setGameState(newState);
  };

  const addStroke = async () => {
    if (!gameState.currentGame) return;

    const currentHoleIndex = gameState.currentGame.currentHole - 1;
    const updatedHoles = [...gameState.currentGame.holes];
    updatedHoles[currentHoleIndex] = {
      ...updatedHoles[currentHoleIndex],
      strokes: updatedHoles[currentHoleIndex].strokes + 1,
    };

    const updatedGame = {
      ...gameState.currentGame,
      holes: updatedHoles,
    };

    const newState = {
      currentGame: updatedGame,
      savedGames: gameState.savedGames,
    };

    await saveGameState(newState);
    setGameState(newState);
  };

  const undoStroke = async () => {
    if (!gameState.currentGame) return;

    const currentHoleIndex = gameState.currentGame.currentHole - 1;
    if (gameState.currentGame.holes[currentHoleIndex].strokes === 0) return;

    const updatedHoles = [...gameState.currentGame.holes];
    updatedHoles[currentHoleIndex] = {
      ...updatedHoles[currentHoleIndex],
      strokes: updatedHoles[currentHoleIndex].strokes - 1,
    };

    const updatedGame = {
      ...gameState.currentGame,
      holes: updatedHoles,
    };

    const newState = {
      currentGame: updatedGame,
      savedGames: gameState.savedGames,
    };

    await saveGameState(newState);
    setGameState(newState);
  };

  const nextHole = async () => {
    if (!gameState.currentGame) return;

    const isLastHole = gameState.currentGame.currentHole === gameState.currentGame.holes.length;
    const updatedGame = {
      ...gameState.currentGame,
      currentHole: isLastHole ? gameState.currentGame.currentHole : gameState.currentGame.currentHole + 1,
      completed: isLastHole,
    };

    const newState = {
      currentGame: updatedGame,
      savedGames: isLastHole 
        ? [...gameState.savedGames, updatedGame]
        : gameState.savedGames,
    };

    await saveGameState(newState);
    setGameState(newState);
  };

  return {
    gameState,
    startNewGame,
    addStroke,
    undoStroke,
    nextHole,
  };
}; 
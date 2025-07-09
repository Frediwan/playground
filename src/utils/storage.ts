import localforage from 'localforage';
import { Game, GameState } from '../types/game';

const STORAGE_KEY = 'golf-stroke-counter';

export const storage = localforage.createInstance({
  name: STORAGE_KEY,
});

export const saveGameState = async (state: GameState): Promise<void> => {
  try {
    await storage.setItem(STORAGE_KEY, state);
  } catch (error) {
    console.error('Fehler beim Speichern des Spielstands:', error);
  }
};

export const loadGameState = async (): Promise<GameState> => {
  try {
    const state = await storage.getItem<GameState>(STORAGE_KEY);
    return state || { currentGame: null, savedGames: [] };
  } catch (error) {
    console.error('Fehler beim Laden des Spielstands:', error);
    return { currentGame: null, savedGames: [] };
  }
};

export const createNewGame = (mode: '9' | '18', playerName?: string): Game => {
  return {
    id: Date.now().toString(),
    mode,
    playerName,
    holes: Array.from({ length: parseInt(mode) }, (_, i) => ({
      number: i + 1,
      strokes: 0,
    })),
    currentHole: 1,
    timestamp: Date.now(),
    completed: false,
  };
}; 
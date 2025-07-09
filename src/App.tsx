import { useGameState } from './hooks/useGameState';
import { StartScreen } from './components/StartScreen';
import { StrokeCounter } from './components/StrokeCounter';
import { Summary } from './components/Summary';
import { GameMode } from './types/game';

function App() {
  const {
    gameState,
    startNewGame,
    addStroke,
    undoStroke,
    nextHole,
  } = useGameState();

  const handleStartGame = (mode: GameMode, playerName?: string) => {
    startNewGame(mode, playerName);
  };

  const handleStartNewGame = () => {
    gameState.currentGame = null;
  };

  // Zeige den StartScreen, wenn kein Spiel aktiv ist
  if (!gameState.currentGame) {
    return <StartScreen onStartGame={handleStartGame} />;
  }

  // Zeige die Zusammenfassung, wenn das Spiel beendet ist
  if (gameState.currentGame.completed) {
    return <Summary game={gameState.currentGame} onStartNewGame={handleStartNewGame} />;
  }

  // Zeige den StrokeCounter während des Spiels
  return (
    <StrokeCounter
      game={gameState.currentGame}
      onAddStroke={addStroke}
      onUndoStroke={undoStroke}
      onNextHole={nextHole}
    />
  );
}

export default App; 
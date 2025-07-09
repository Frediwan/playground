import { Game } from '../types/game';

interface StrokeCounterProps {
  game: Game;
  onAddStroke: () => void;
  onUndoStroke: () => void;
  onNextHole: () => void;
}

export const StrokeCounter = ({
  game,
  onAddStroke,
  onUndoStroke,
  onNextHole,
}: StrokeCounterProps) => {
  const currentHole = game.holes[game.currentHole - 1];

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary">
          Bahn {currentHole.number} von {game.holes.length}
        </h1>
        {game.playerName && (
          <p className="text-lg text-gray-600 mt-2">{game.playerName}</p>
        )}
      </header>

      {/* Stroke Counter */}
      <div className="flex-1 flex flex-col items-center justify-center mb-8">
        <div className="text-6xl font-bold text-text mb-8">
          {currentHole.strokes}
        </div>
        
        {/* Main Counter Button */}
        <button
          onClick={onAddStroke}
          className="w-72 h-72 rounded-full bg-primary text-white text-4xl font-bold
                   shadow-lg active:scale-95 transition-transform
                   focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50"
          aria-label="Schlag hinzufügen"
        >
          Tap
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-4">
        <button
          onClick={onUndoStroke}
          disabled={currentHole.strokes === 0}
          className="flex-1 py-4 px-6 rounded-lg bg-surface border border-gray-300
                   text-lg font-medium text-text
                   disabled:opacity-50 disabled:cursor-not-allowed
                   focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Rückgängig
        </button>

        <button
          onClick={onNextHole}
          className="flex-1 py-4 px-6 rounded-lg bg-secondary text-white
                   text-lg font-medium
                   focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          {game.currentHole === game.holes.length ? 'Beenden' : 'Nächste Bahn'}
        </button>
      </div>
    </div>
  );
}; 
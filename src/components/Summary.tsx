import { Game } from '../types/game';

interface SummaryProps {
  game: Game;
  onStartNewGame: () => void;
}

export const Summary = ({ game, onStartNewGame }: SummaryProps) => {
  const totalStrokes = game.holes.reduce((sum, hole) => sum + hole.strokes, 0);

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Spielübersicht</h1>
        {game.playerName && (
          <p className="text-lg text-gray-600">{game.playerName}</p>
        )}
        <p className="text-2xl font-bold mt-4">
          Gesamt: {totalStrokes} Schläge
        </p>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {game.holes.map((hole) => (
            <div
              key={hole.number}
              className="bg-surface p-4 rounded-lg shadow-sm"
            >
              <div className="text-sm text-gray-600">Bahn {hole.number}</div>
              <div className="text-2xl font-bold text-text">
                {hole.strokes} {hole.strokes === 1 ? 'Schlag' : 'Schläge'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onStartNewGame}
        className="mt-8 w-full bg-primary text-white py-4 rounded-lg text-xl font-medium
                 hover:bg-secondary transition-colors focus:outline-none focus:ring-2 
                 focus:ring-offset-2 focus:ring-primary"
      >
        Neues Spiel
      </button>
    </div>
  );
}; 
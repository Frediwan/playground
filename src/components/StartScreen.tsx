import { useState } from 'react';
import { GameMode } from '../types/game';

interface StartScreenProps {
  onStartGame: (mode: GameMode, playerName?: string) => void;
}

export const StartScreen = ({ onStartGame }: StartScreenProps) => {
  const [playerName, setPlayerName] = useState('');
  const [selectedMode, setSelectedMode] = useState<GameMode>('18');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartGame(selectedMode, playerName.trim() || undefined);
  };

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-primary mb-8">Golf Stroke Counter</h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <div className="space-y-4">
          <label className="block text-lg font-medium">
            Spielername (optional)
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-surface border border-gray-300 rounded-lg 
                       text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Dein Name"
            />
          </label>

          <fieldset className="space-y-2">
            <legend className="text-lg font-medium mb-2">Anzahl der Bahnen</legend>
            <div className="flex gap-4">
              <label className="flex-1">
                <input
                  type="radio"
                  className="sr-only"
                  checked={selectedMode === '9'}
                  onChange={() => setSelectedMode('9')}
                />
                <div className={`
                  w-full text-center py-3 rounded-lg text-lg font-medium
                  ${selectedMode === '9'
                    ? 'bg-primary text-white'
                    : 'bg-surface border border-gray-300 text-text hover:bg-gray-50'
                  }
                `}>
                  9 Bahnen
                </div>
              </label>

              <label className="flex-1">
                <input
                  type="radio"
                  className="sr-only"
                  checked={selectedMode === '18'}
                  onChange={() => setSelectedMode('18')}
                />
                <div className={`
                  w-full text-center py-3 rounded-lg text-lg font-medium
                  ${selectedMode === '18'
                    ? 'bg-primary text-white'
                    : 'bg-surface border border-gray-300 text-text hover:bg-gray-50'
                  }
                `}>
                  18 Bahnen
                </div>
              </label>
            </div>
          </fieldset>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-4 rounded-lg text-xl font-medium
                   hover:bg-secondary transition-colors focus:outline-none focus:ring-2 
                   focus:ring-offset-2 focus:ring-primary"
        >
          Spiel starten
        </button>
      </form>
    </div>
  );
}; 
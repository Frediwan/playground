export type GameMode = '9' | '18';

export interface Hole {
  number: number;
  strokes: number;
}

export interface Game {
  id: string;
  mode: GameMode;
  playerName?: string;
  holes: Hole[];
  currentHole: number;
  timestamp: number;
  completed: boolean;
}

export interface GameState {
  currentGame: Game | null;
  savedGames: Game[];
} 
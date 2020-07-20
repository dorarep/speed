type Room = {
  id: string;
}

type Player = {
  userId: string;
}

type GameState = 'pending' | 'player1' | 'player2' | 'finished'

type GridValue = 'empty' | 'player1' | 'player2';

type Game = {
  state: GameState;
  players: Player[];
  board: GridValue[][];
}

type ICommand = {
  execute: (game: Game) => Game;
  executable: (game: Game) => boolean;
}

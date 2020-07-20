import {isFinish, isMyTurn} from "../game";

type Props = {
  userId: string;
  x: 0 | 1 | 2;
  y: 0 | 1 | 2;
}

export const PutCommand = ({ userId, x, y }: Props): ICommand => ({
  execute: game => {
    if (game.state === 'player1' || game.state === 'player2') {
      game.board[x][y] = game.state;
    }
    return {
      ...game,
      state: isFinish(game) ? 'finished' : game.state === 'player1' ? 'player2' : 'player1'
    };
  },
  executable: game => (game.board[x][y] === 'empty') && isMyTurn(game, userId)
});

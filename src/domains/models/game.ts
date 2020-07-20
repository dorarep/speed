export const initialGame: () => Game = () => ({
  state: 'pending',
  players: [],
  board: [['empty', 'empty', 'empty'], ['empty', 'empty', 'empty'], ['empty', 'empty', 'empty']]
});

export const isMyTurn = (game: Game, userId: string) =>
  (game.players[0].userId === userId && game.state === 'player1') || (game.players[1].userId === userId && game.state === 'player2');

export const isFinish = (game: Game) => !![
    ...game.board,
    ...game.board.map((_, i, b) => b.map(row => row[i])),
    game.board.map((row, i) => row[i]),
    game.board.map((row, i) => row[2-i])
  ].filter(
    line => line.indexOf('empty') === -1
  ).find(
    line => line.every(row => row === line[0])
) || game.board.flat().indexOf('empty') === -1;

type Props = {
  userId: string;
}

export const JoinGameCommand = ({ userId }: Props): ICommand => ({
  execute: game => ({
    ...game,
    state: game.players.length === 1 ? 'player1' : 'pending',
    players: [...game.players, { userId }]
  }),
  executable: game =>
    game.players.length < 2 &&
    !game.players.find(player => player.userId === userId) &&
    game.state === 'pending'
});

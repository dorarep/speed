import React, {FC} from "react";
import {Button, Card} from "@material-ui/core";
import {Command} from "../../../../domains/models/command";

type Props = {
  game: Game;
  user: firebase.User;
  command: (command: Command) => {
    execute: () => void;
    executable: () => boolean;
  };
}

export const PendingGameBoard: FC<Props> = ({ game , command, user }) => {
  const joinGameCommand = command({ type: 'JoinGameCommand', props: { userId: user.uid }});

  return (
    <Card>
      { joinGameCommand.executable() && <Button onClick={joinGameCommand.execute}>参加する</Button> }
      <p>現在の参加者: {game.players.length} /2</p>
    </Card>
  );
}

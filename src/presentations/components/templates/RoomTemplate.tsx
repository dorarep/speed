import React, {FC} from "react";
import {PendingGameBoard} from "../organisms/room/PendingGameBoard";
import {PlayingGameBoard} from "../organisms/room/PlayingGameBoard";
import {Command} from "../../../domains/models/command";

type Props = {
  game: Game;
  user: firebase.User;
  command: (command: Command) => {
    execute: () => void;
    executable: () => boolean;
  };
};

export const RoomTemplate: FC<Props> = props =>
  props.game.state === 'pending' ? <PendingGameBoard {...props} /> : <PlayingGameBoard {...props} />;

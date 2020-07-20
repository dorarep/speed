import {useEffect, useState} from "react";
import {subscribeGame} from "../../../infrastructures/repositories/game-repository";
import {initialGame} from "../../../domains/models/game";

export const useGame = (roomId: string) => {
  const [game, setGame] = useState<Game>(initialGame);

  useEffect(() => roomId && subscribeGame(roomId, setGame), [roomId, setGame]);
  console.log(game);

  return game;
};

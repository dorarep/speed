import {NextPage} from "next";
import {RoomTemplate} from "../../presentations/components/templates/RoomTemplate";
import React from "react";
import {useRouter} from "next/router";
import {useGame} from "../../presentations/hooks/queries/game";
import {useUser} from "../../presentations/hooks/queries/user";
import {useCommand} from "../../presentations/hooks/commands/command";

const RoomPage: NextPage = () => {
  const router = useRouter();
  const roomId = router.query.id as string;
  const user = useUser();
  const game = useGame(roomId);
  const command = useCommand(roomId, game);

  return roomId && user ? <RoomTemplate {...{game, command, user}} /> : <div>Loading...</div>;
};

export default RoomPage;


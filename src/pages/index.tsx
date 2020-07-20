import {NextPage} from "next";
import {HomeTemplate} from "../presentations/components/templates/HomeTemplate";
import React from "react";
import {useRooms} from "../presentations/hooks/queries/room";
import {useCreateRoom} from "../presentations/hooks/commands/create-room";

const HomePage: NextPage = () => {
  const createRoom = useCreateRoom();
  const rooms = useRooms();

  return <HomeTemplate {...{createRoom, rooms}} />;
};

export default HomePage;


import {useEffect, useState} from "react";
import {subscribeRooms} from "../../../infrastructures/repositories/room-repository";

export const useRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);



  useEffect(
    () => subscribeRooms((newRooms) => setRooms([...rooms, ...newRooms])),
    [setRooms]
  );

  return rooms;
};

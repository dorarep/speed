import React, {FC} from "react";
import Router from 'next/router';
import {Button, Card, List, ListItem, ListItemText} from "@material-ui/core";

type Props = {
  createRoom: () => void;
  rooms: Room[];
}

export const RoomList: FC<Props> = ({ createRoom, rooms }) => (
  <Card>
    <Button onClick={createRoom}>部屋を作る</Button>
    <List>
      {rooms.map(room => (
        <ListItem key={room.id} button onClick={() => Router.push('/rooms/[id]', `/rooms/${room.id}`)}>
          <ListItemText primary={room.id} />
        </ListItem>
      ))}
    </List>
  </Card>
);

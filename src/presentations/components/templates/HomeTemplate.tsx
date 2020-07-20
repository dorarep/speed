import React, {ComponentProps, FC} from "react";
import {RoomList} from "../organisms/home/RoomList";

type Props = ComponentProps<typeof RoomList>

export const HomeTemplate: FC<Props> = props => (
  <RoomList {...props} />
);

import {FC} from "react";
import {Empty} from "../atoms/Empty";
import {Circle} from "../atoms/Circle";
import {Command} from "../../../domains/models/command";

type Props = {
  value: GridValue;
  onClick: (command: Command<'PutCommand'>) => void;
}

export const Grid: FC<Props> = ({ value, onClick }) => ({
  'empty': <Empty onClick={onClick} />,
  'player1': <Circle white />,
  'player2': <Circle />
})[value];

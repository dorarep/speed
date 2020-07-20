import {JoinGameCommand} from "./commands/join-game-command";
import {PutCommand} from "./commands/put-command";

export const Commands = {
  JoinGameCommand,
  PutCommand
};

export type CommandType = keyof typeof Commands;

export type Command<T extends CommandType = CommandType> = {
  type: T;
  props: Parameters<typeof Commands[T]>[0]
}

export function executable<T extends CommandType>(command: Command<T>, game: Game) {
  return Commands[command.type](command.props).executable(game);
}

export function execute<T extends CommandType>(command: Command<T>, game: Game) {
  return Commands[command.type](command.props).execute(game);
}


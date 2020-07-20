import {Command, executable} from "../../../domains/models/command";
import {appendCommand} from "../../../infrastructures/repositories/game-repository";

export const useCommand = (roomId: string, game: Game) => (command: Command) => ({
  executable: () => executable(command, game),
  execute: () => appendCommand(roomId, command)
});

import {firestore} from "../clients/firebase";
import {ulid} from "ulid";
import firebase from "firebase";
import {initialGame} from "../../domains/models/game";
import {Command, executable, execute} from "../../domains/models/command";

const commandsCollectionPath =
  (roomId: string) => firestore.collection('rooms').doc(roomId).collection('commands');

export const appendCommand = (roomId: string, command: Command) => commandsCollectionPath(roomId).doc(ulid()).set({
  ...command,
  createdAt: firebase.firestore.FieldValue.serverTimestamp()
});

export const subscribeGame = (roomId: string, update: (game: Game) => void) => {
  let cachedGame = initialGame();

  commandsCollectionPath(roomId).onSnapshot(
    querySnapshot => {
      cachedGame = querySnapshot.docChanges().flatMap(docChange =>
        docChange.type === 'added' ? [docChange.doc.data() as Command] : []
      ).reduce((game, command) => executable(command, game) ? execute(command, game) : game, cachedGame);
      update(cachedGame);
    }
  );
};

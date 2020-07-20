import {firestore} from "../clients/firebase";
import {ulid} from "ulid";
import firebase from "firebase";

const roomsCollectionPath = () => firestore.collection('rooms');

export const createRoom = () => roomsCollectionPath().doc(ulid()).set({ createdAt: firebase.firestore.FieldValue.serverTimestamp() });

export const subscribeRooms = (set: (rooms: Room[]) => void) => {
  const rooms = [];

  return roomsCollectionPath().orderBy('createdAt', 'desc').limit(5).onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(docChange => docChange.type === 'added' && rooms.splice(0, 0, { id: docChange.doc.id }));
    set(rooms);
  });
};

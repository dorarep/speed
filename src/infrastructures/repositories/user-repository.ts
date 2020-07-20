import {auth} from "../clients/firebase";

export const signInAnonymously = () => auth.signInAnonymously();

export const subscribeUser = (set: (user: firebase.User) => void) => auth.onAuthStateChanged(set);

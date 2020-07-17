import {auth} from "../infrastructures/firebase";
import {useEffect, useState} from "react";

export const useUser = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    auth.signInAnonymously();
    return auth.onAuthStateChanged(user => setUser(user));
  }, [setUser]);

  return user;
};

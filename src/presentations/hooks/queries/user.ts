import {useEffect, useState} from "react";
import {subscribeUser} from "../../../infrastructures/repositories/user-repository";

export const useUser = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => subscribeUser(setUser), [setUser]);

  return user;
};

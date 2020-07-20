import {createContext} from "react";

type Props = {
  user: firebase.User | null;
};

export const UserContext = createContext<Props>(null);

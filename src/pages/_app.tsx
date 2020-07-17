import React from 'react'
import {AppProps} from "next/app";
import {useUser} from "../hooks/user";
import {UserContext} from "../contexts/user";

const SpeedApp = ({ Component, pageProps }: AppProps) => {
  const user = useUser();

  return (
    <UserContext.Provider value={{ user }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};

export default SpeedApp;

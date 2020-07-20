import React, {useEffect} from 'react'
import {AppProps} from "next/app";
import {useUser} from "../presentations/hooks/queries/user";
import {UserContext} from "../presentations/contexts/user";
import {useSignInAnonymously} from "../presentations/hooks/commands/sign-in-anonymously";

const SpeedApp = ({ Component, pageProps }: AppProps) => {
  const user = useUser();
  const signInAnonymously = useSignInAnonymously();

  useEffect(() => {
    signInAnonymously();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};

export default SpeedApp;

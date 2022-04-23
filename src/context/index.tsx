import React, { createContext, useState, PropsWithChildren  } from "react";
import { useMoralis } from "react-moralis";

export const AppContext = createContext<unknown>(null);


export const AppProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [ currentWallet, setCurrentWallet ] = useState(null);
  const {
    isAuthenticated,
    authenticate,
    logout,
  } = useMoralis();

  const connectWallet = async () => {
    if (isAuthenticated) return disconnectWallet();
    try {
      const response =await authenticate({
        signingMessage: "OpenSea will be using your wallet to sign transactions",
        onError: (err) => {console.log(err.message); return; },
      });
      const walletAddress = response?.get("ethAddress");
      setCurrentWallet(walletAddress);
    } catch (error) {
      // console.log(error);
    }
  };

  const disconnectWallet = async () => {
    await logout();
    setCurrentWallet(null);
    console.log("logged out");
  };

  return (
    <AppContext.Provider
      value={{
        connectWallet,
        currentWallet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
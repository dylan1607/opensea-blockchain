import React, { createContext, useState, PropsWithChildren  } from "react";
import { useMoralis } from "react-moralis";

type ContextType = {
  currentWallet?: string,
  connectWallet: () => void,
}
export const AppContext = createContext<ContextType>({
  currentWallet: "",
  connectWallet: () => {return;},
});


export const AppProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [ currentWallet, setCurrentWallet ] = useState<string>("");
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
    setCurrentWallet("");
    console.log("logged out");
  };

  return (
    <AppContext.Provider
      value={{
        currentWallet,
        connectWallet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
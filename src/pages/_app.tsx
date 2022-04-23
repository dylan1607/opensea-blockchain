import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import { AppProvider } from "~/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <MoralisProvider
      // Use hardcode string for your Moralis API key. Don't use env
        appId="ObrwozWTewLcYKA0zjuE9CA2fydpN0Dn7T0DkR5b"
        serverUrl="https://trrlmgstlpko.usemoralis.com:2053/server"
      >
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </MoralisProvider>
  );
}

export default MyApp;

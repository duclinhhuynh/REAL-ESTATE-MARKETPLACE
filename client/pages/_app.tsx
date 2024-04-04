import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import {StateContextProvider} from "../context";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThirdwebProvider activeChain={ChainId.Mainnet}>
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>
    </ThirdwebProvider>
    );
};

export default App

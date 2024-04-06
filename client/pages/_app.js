import "../styles/globals.css";
import {ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import {StateContextProvider} from "../context";
import { mumbai } from "thirdweb/chains";


console.log("chainid", ChainId.Mumbai);
const App = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider activeChain={ChainId.Mumbai} clientId = {process.env.API_KEY}>
      <StateContextProvider >
        <Component {...pageProps} />
      </StateContextProvider>
    </ThirdwebProvider>
    );
};

export default App

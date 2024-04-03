import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
// import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { WagmiConfig } from "wagmi";
import { base, baseGoerli } from "wagmi/chains";
// 1. Get projectId
const projectId = "5c036caa882e3306871ef7df0eefdfc6";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const BaseSepolia = {
  id: 84532,
  name: "Base Sepolia",
  network: "Base Sepolia",
  iconUrl:
    "https://raw.githubusercontent.com/base-org/brand-kit/7d3531058f5d89aeb627ab2045e1c5df3efb5de8/logo/symbol/Base_Symbol_Blue.svg",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org/"],
    },
    public: {
      http: ["https://sepolia.base.org/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://sepolia.basescan.org/",
    },
  },
  testnet: true,
};

const { chains, publicClient } = configureChains(
  [base, BaseSepolia],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "0xDeveloper",
  projectId: projectId,
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  defaultChain: BaseSepolia,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: "#260e0e",
          accentColorForeground: "white",
          borderRadius: "medium",
        })}
        coolMode
      >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import "./global.css"

import "@rainbow-me/rainbowkit/styles.css"
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { WagmiProvider } from "wagmi"
import { base } from "wagmi/chains"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const config = getDefaultConfig({
  appName: "Ether ORB",
  projectId: "d3ef14f74baa9f1a49ceca432431178d",
  chains: [base],
  ssr: false, // If your dApp uses server side rendering (SSR)
})

const container = document.getElementById("root")
const root = createRoot(container!)
const queryClient = new QueryClient()

root.render(
  <BrowserRouter>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </BrowserRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

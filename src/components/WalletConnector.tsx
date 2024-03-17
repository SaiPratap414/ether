//ethersHooks.js

import * as React from "react"
import { useWalletClient } from "wagmi"
import { providers } from "ethers"
import Web3 from "web3"

export function walletClientToSigner(walletClient: any) {
  const { account, chain, transport } = walletClient
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new providers.Web3Provider(transport, network)
  const signer = provider.getSigner(account.address)
  return signer
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId } = {} as any) {
  const { data: walletClient } = useWalletClient({ chainId })
  return React.useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient],
  )
}

export function useWeb3Signer({ chainId } = {} as any) {
  const { data: walletClient } = useWalletClient({ chainId })

  return React.useMemo(
    () =>
      walletClient
        ? new Web3(
            (walletClientToSigner(walletClient).provider as any).provider,
          )
        : undefined,
    [walletClient],
  )
}

import { ConnectButton } from "@rainbow-me/rainbowkit"
import styled from "styled-components"

const Button = styled.button`
  font-size: var(--font-size-s);
  font-family: var(--font-krungthep);
  color: #00000080;
  transition: all 0.3s ease;
  padding: 10px 20px;
  border: none;
  text-align: center;
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
`

const BtnContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  color: #ffffff;

  button {
    max-width: 110px;
    text-align: center;
    margin-top: 10px;
    background: transparent;
  }
`
const ConnectWallet = (props: any) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading"
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated")
        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  // <button onClick={openConnectModal} type="button">
                  //   Connect Wallet
                  // </button>
                  <Button onClick={openConnectModal}>Connect Wallet</Button>
                )
              }

              if (chain.unsupported) {
                return (
                  // <button onClick={openChainModal} type="button">
                  //   Wrong network
                  // </button>
                  <Button onClick={openConnectModal}>Wrong network</Button>
                )
              }
              return (
                <Button onClick={props.onClickCallback}>{props.message}</Button>
              )
            })()}
          </>
        )
      }}
    </ConnectButton.Custom>
  )
}

export default ConnectWallet

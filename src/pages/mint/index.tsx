import styled from "styled-components"
import { useAccount, useConnections,useDisconnect } from "wagmi"
import { useAccountModal } from "@rainbow-me/rainbowkit"
import { useWeb3Signer } from "../../components/WalletConnector"
import SubwayPowerVector from "../../components/SubwayPowerVector"
import { Box, CircularProgress, Typography } from "@mui/material" // Updated import
import React, { useState } from "react"
import Web3 from "web3"

import ABI from "../../constants/contractABI.json"
import { useNavigate } from "react-router-dom"
import ConnectWallet from "../../components/ConnectWallet"

const MintPageContainer = styled.div``

const WalletInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 20px;
  box-sizing: border-box;
  z-index: 1000;
`

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 50px;
  flex-wrap: wrap;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
`

const Li = styled.li`
  text-decoration: none;
  color: #ffffff80;
  display: block;
  font-family: var(--font-jetbrains-mono);
  a {
    text-decoration: none;
    color: #ffffff80;
    display: block;
    font-family: var(--font-jetbrains-mono);
    text-transform: uppercase;
    position: relative;
    &:hover {
      text-decoration: underline;
      color: #ffffff;
      &.consto::after {
        content: "coming soon";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.8rem;
        background-color: black;
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 0.2rem;
        z-index: 1;
      }
    }
  }

  a:hover {
    text-decoration: underline;
    color: #ffffff;
  }
`

const WalletAddress = styled.div`
  color: white;
  font-family: var(--font-jetbrains-mono);
  margin: 10px auto;
  font-size: 14px;
  @media screen and (max-width: 700px) {
    margin: 20px auto;
  }
`

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

const MintPageContent = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const BtnContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
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

const Content = styled.div`
  height: 450px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 680px) {
    bottom: 43%;
  }
`

const DisconnectButton = styled(Button)`
  color: #ffffff;
  background: #000000;
  max-width: 300px;
  margin: 0 auto;
  font-weight: bold;
  transition: border 0.3s;
  &:hover,
  &:active {
    border: 2px solid black;
  }
`

const FollowButton = styled.button`
  font-size: var(--font-size-xs);
  font-family: var(--font-krungthep);
  color: #ffffff;
  background: #000000;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    text-decoration: underline;
  }
`

const MintPage = () => {
  const [account, setAccount] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const [isEligible, setIsEligible] = useState(false)
  const [message, setMessage] = useState("NOT ELIGIBLE")
  const [mintedAmount, setMintedAmount] = useState(0)
  const [updateMessage, setUpdateMessage] = useState("You are not on the whitelist, watch this space for updates")
  const [isConnecting, setIsConnecting] = useState(false)
  const [sold, setSold] = useState<string>("0")
  const [total, setTotal] = useState<string>("850")
  const [contract, setContract] = useState<any>()
  const wagmiAccount = useAccount()
  const disconnecthook = useDisconnect()
  const {openAccountModal} = useAccountModal()
  const [mintQuantity, setMintQuantity] = useState(1);

  ;(window as any).wagmiAccount = wagmiAccount

  const [title, setTitle] = useState<string>("let the orb choose you")

  const navigate = useNavigate()

  const [price, setPrice] = useState<string>("0")

  let web3: any = useWeb3Signer()
  const web3_extra = new Web3("https://rpc.ankr.com/base")
  const contractAddress = "0x4cDb78d79adB7FE0735C6676921b98d1b4749837"
  const extra_contract = new web3_extra.eth.Contract(ABI, contractAddress)

  React.useEffect(() => {
    if (isConnected && !isEligible) {
      setTitle("Council is pondering")
    } else {
      setTitle("Let the orb choose you")
    }
  }, [isEligible, setIsEligible, isConnected])

  React.useEffect(() => {
    if (!wagmiAccount.address){
      setIsConnected(false)
      setIsConnecting(false)
      setIsEligible(false)
      setMessage("NOT ELIGIBLE")
      setAccount("")
      return;
    }
    if (!web3) return;
    setIsConnected(true)
    setIsConnecting(false)
    connectWalletCallback()
  }, [wagmiAccount])

  React.useEffect(() => {
    const fetchSold = async () => {
      const sold: string = (
        (await extra_contract.methods._sold_count().call()) as any
      ).toString()
      const total: string = (
        (await extra_contract.methods._max_supply().call()) as any
      ).toString()
      setSold(sold)
      setTotal(total)
    }

    fetchSold()
  }, [])

  React.useEffect(() => {
    if (message === "ALREADY MINTED") {
      console.log(message)
      navigate("../mint/success")
    }
  }, [message])

  React.useEffect(() => {
    const CheckEligibility = async () => {
      if (!isConnected) return

      try {
        const accounts = await web3.eth.requestAccounts()
        console.log("Accounts:", accounts)
        const account = accounts[0]
        console.log("Account:", account)
        let contract = new web3.eth.Contract(ABI, contractAddress)
        const mintEnabled = await contract.methods._mintEnabled().call()
        if (!mintEnabled){
          setMessage("Coming Soon");
        }
        const guranteedWhitelisted:boolean = await contract.methods
          ._guranteed_minters(account)
          .call()
        const whitelisted: boolean = await contract.methods
          ._whitelisted_minters(account)
          .call()
        console.log("Whitelisted:", whitelisted)
        const mintedAmount: number =  await contract.methods._minted_amount(account).call()
        setMintedAmount(mintedAmount);
        const price: number = await contract.methods._price(account).call()
        const isPublic: boolean = await contract.methods._isPublic().call()
        console.log("whitelisted", whitelisted)
        console.log("price", price)
        if (price) {
          setPrice(web3_extra.utils.fromWei(price, "ether"))
        }
        if (mintedAmount == 3) {
          setMessage("ALREADY MINTED")
          setIsEligible(false)
          return
        }
        if (isPublic) {
          setMessage("MINT")
          setIsEligible(true)
          return
        }
        if (guranteedWhitelisted) {
          if (!mintEnabled) {
            setUpdateMessage("You're on the whitelist,   Your mints starts at 4 PM UTC")
            return;
          }
          setMessage("MINT")
          setIsEligible(true)
          return
        }

        if (whitelisted) {
          if (!mintEnabled) {
            setUpdateMessage("You're on the whitelist, Your mints starts at 6 PM UTC")
            return;
          }
            setMessage("MINT")
            setIsEligible(true)
            return
        }
      } catch (err) {
        console.log(err)
      }
      
    }

    CheckEligibility()
  }, [isConnected, setIsConnected]);

  const increaseMintQuantity = () => {
    if (mintQuantity < 3) {
      setMintQuantity(mintQuantity + 1);
    }
  };

  // Function to handle decreasing mint quantity
  const decreaseMintQuantity = () => {
    if (mintQuantity > 1) {
      setMintQuantity(mintQuantity - 1);
    }
  };

  const mint = async () => {
    if (!isEligible) return
    if (isConnected && account.length !== 0) {
      try {
        const accounts = await web3.eth.requestAccounts()
        const account = accounts[0]
        setMessage("MINTING")
        let contract = new web3.eth.Contract(ABI, contractAddress)
        let transactionValue: string
        try {
          console.log(await contract.methods._price().call())
          transactionValue = await contract.methods._price().call()
          let price = web3_extra.utils.fromWei(transactionValue, "ether")
          transactionValue = web3_extra.utils.toWei((Number(price) * mintQuantity).toFixed(2), "ether")
        } catch {
          transactionValue = web3_extra.utils.toWei((Number(price) * mintQuantity).toFixed(2), "ether")
          console.log("Error fetching fee")
        }
        console.log("Transaction value:", transactionValue)
        const result = await contract.methods.mint(mintQuantity).send({
          from: account,
          value: transactionValue,
        })
        console.log("Transaction successful:", result)
        setMessage("ALREADY MINTED")
      } catch (error) {
        console.error("Error minting:", error)
      }
    } else {
      return
    }
  }

  const connectWalletCallback = async () => {
    const accounts = await web3.eth.requestAccounts()
    setAccount(accounts[0])
  }

  const disconnect = () => {
    disconnecthook.disconnect();
    (openAccountModal as any)()
    setIsConnected(false)
    setAccount("")
    setIsEligible(false)
    setMessage("NOT ELIGIBLE")
  }

  const followTwitter = () => {
    window.open("https://twitter.com/etherorbxyz", "_blank")
  }

  return (
    <MintPageContainer>
      <MintPageContent>
        <Navbar>
          <SubwayPowerVector
            group3="/group-3-1.svg"
            propAlignSelf="unset"
            propFlexDirection="row"
            propFlex="unset"
            propAlignSelf1="stretch"
          />
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              fontFamily: "var(--font-jetbrains-mono), sans-serif",
              minWidth: "200px",
            }}
          >
            <Li>
              <a
                href="https://twitter.com/etherorbxyz"
                target="_blank"
                rel="noopener"
              >
                twitter
              </a>
            </Li>
            <Li>
              <a href="https://t.me/EtherOrb404" target="_blank" rel="noopener">
                telegram
              </a>
            </Li>
            <Li>
              <a href="#" className="consto">
                docs
              </a>
            </Li>
            <Li>
              <a href="#" className="consto">
                PLAY
              </a>
            </Li>
          </Box>
        </Navbar>
        <img src="./mint_page_bacground.png" alt="mint_page_img" />
        <Content>
          {isConnected && isEligible && (
              <Box
                sx={{
                  fontSize: "var(--font-size-s)",
                  fontFamily: "var(--font-krungthep)",
                  background: "var(--color-black)",
                  color: "var(--color-white)",
                  padding: "20px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  marginTop: "-20px",
                  '@media screen and (max-width: 680px)': {
                    fontSize: '12px',
                    marginTop: '-6vh'
                  }
                }}
              >
                <span style={{ color: "#ffffff50" }}>{sold}</span>/{total} PASSES
                MINTED
                <br />
                <span style={{ color: "#ffffff50" }}>WHITELIST ONLY</span>
              </Box>
            )}
          <Box
            sx={{
              fontSize: "var(--font-size-29xl)",
              fontFamily: "var(--font-krungthep)",
              color: "var(--color-white)",
              padding: "20px",
              textTransform: "uppercase",
              marginTop: '-20px',
              "@media screen and (max-width: 800px)": {
                fontSize: "16px",
                marginTop: '-20px'
              },
            }}
          >
            {title}
          </Box>
          {!isConnected && (
            <Box
              sx={{
                fontSize: "var(--font-size-xs)",
                fontFamily: "var(--font-krungthep)",
                background: "var(--color-black)",
                color: "var(--color-white)",
                padding: "20px",
                textTransform: "uppercase",
                marginTop: "-20px",
              }}
            >
              [open for whitelist only]
            </Box>
          )}
          {isConnected && !isEligible && (
            <>
              <Box
                sx={{
                  fontSize: "var(--font-size-xs)",
                  fontFamily: "var(--font-krungthep)",
                  background: "var(--color-black)",
                  color: "var(--color-white)",
                  padding: "20px",
                  width: "200px",
                  textTransform: "uppercase",
                  marginTop: "-20px",
                }}
              >
                {updateMessage}
              </Box>
              {/* <FollowButton onClick={followTwitter}>Follow on X</FollowButton> */}
            </>
          )}
  
          {isConnected && isEligible && (
            <Box
              sx={{
                fontSize: "var(--font-size-xs)",
                fontFamily: "var(--font-krungthep)",
                
                color: "var(--color-white)",
                padding: "20px",textTransform: "uppercase",
                marginTop: "-20px",
              }}
            >
             {/* 
    [You are on the whitelist, mint now]
    <br/>
    <p>{"    "}</p>
  
  You've Minted {mintedAmount.toString()} of 3 ORBS */}
</Box>
          )}
          <Box
            sx={{
              fontSize: "var(--font-size-xs)",
              fontFamily: "var(--font-krungthep)",
              color: "var(--color-white)",
              padding: "20px",
              marginTop: '-20px',
              textTransform: "uppercase",
              '@media screen and (max-width: 680px)': {
                marginTop: '-30px'
              }
            }}
          >
           {/* {isConnected && <> PRICE [{(Number(price) * mintQuantity).toFixed(2)} ETH]</>} */}
          </Box>
        </Content>
      </MintPageContent>
      <WalletInfoSection>
        {isConnected && account.length > 0 ? (
          <WalletAddress>
            {account} [{message}]
          </WalletAddress>
        ) : (
          <WalletAddress>NOT CONNECTED</WalletAddress>
        )}
  
        {isConnected && (
          <DisconnectButton onClick={disconnect}>
            Disconnect Wallet
          </DisconnectButton>
        )}
      </WalletInfoSection>
      <BtnContainer>
  {!isConnected && account.length === 0 ? (
    <>
      <ConnectWallet
        onConnect={connectWalletCallback}
        onClickCallback={connectWalletCallback}
        message={message}
      />
    </>
  ) : (
    <>
      {isConnecting ? (
        <CircularProgress color="primary" />
      ) : (
        <>
          <Button disabled>Minting Closed</Button> // 
           
        </>
      )}
    </>
  )}
</BtnContainer>

  
      {/* New section for mint quantity */}
      <Box
      sx={{
        position: 'absolute',
        width: '100%',
        boxSizing: 'border-box',
        height: '70px',
        top: 0,
        left: 0,
        zIndex: 999,
        color: '#ffffff',
        marginTop: '30vh',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: 'var(--font-jetbrains-mono)',
        '@media screen and (max-width: 680px)': {
          marginTop: '30vh'
        }
      }}
      >
        {/* Display the buttons, quantity, and transaction value */}
        {isConnected && isEligible && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "20px", // Adjust the margin as needed
              height: '100%',
              width: '150px'
            }}
          >
            {/* 
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "-36px",
  }}
>
  <Button style={{color: `${mintQuantity === 1 ? "#ffffff50" : "#ffffff"}`, border: '1px solid #ffffff', padding: '5px 10px'}} onClick={decreaseMintQuantity}>-</Button>
  <p style={{margin: '0 20px'}}>{mintQuantity}</p>
  <Button style={{color: `${mintQuantity === 3 ? "#ffffff50" : "#ffffff"}`, border: '1px solid #ffffff', padding: '5px 10px'}} onClick={increaseMintQuantity}>+</Button>
</Box>
*/}

          </Box>
        )}
      </Box>

    </MintPageContainer>
  );
}  

export default MintPage
import styled from 'styled-components'
import SubwayPowerVector from '../../components/SubwayPowerVector'
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Web3 from 'web3'

import ABI from "../../constants/contractABI.json"

const MintPageContainer = styled.div`
    
`

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 998;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  flex-wrap: wrap;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    padding: 10px;
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
  }
`

const Button = styled.button`
    font-size: var(--font-size-s);
    font-family: var(--font-krungthep);
    color: #00000080;
    transition: all .3s ease;
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
        width:100%;
        height: 100%;
        object-fit: cover;
    }
`

const BtnContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 1vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    overflow: hidden;
    color: red;
`

const Content = styled.div`
    height: 450px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 50%; /* Adjusted bottom position */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const MintPage = () => {
    const [account, setAccount] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [isEligible, setIsEligible] = useState(false);

    const [isConnecting, setIsConnecting] = useState(false);

    const ethereum  = (window as any).ethereum;

    const web3 = new Web3(ethereum)
    const contractAddress = '0x2F6C135F6881cFdD77d8816f546f52B4693F3233';

    const contract = new web3.eth.Contract(ABI, contractAddress);

    React.useEffect(() => { 
        const CheckEligibility = async () => {
            if (!isConnected) return;
        
            try {
                const accounts = await web3.eth.requestAccounts();
                const account = accounts[0];
        
                // call minter checking contract..
                const result = await contract.methods._whitelisted_minters(account).send({from: account});
        
                console.log('Is whitelisted:', result);
                setIsEligible(true);
            } catch (err) {
                console.log(err);
            }
        };

        CheckEligibility();
    }, [isConnected, setIsConnected])


    const mint = async () => {
        if(isConnected && account.length != 0) {
            try {

                // Get user's Ethereum account address
                const accounts = await web3.eth.requestAccounts();
                const account = accounts[0];

                // the transaction value..
                const transactionValue = web3.utils.toWei('0.001', 'ether');
        
                // Send transaction to mint
                const result = await contract.methods.mint(account).send({
                    from: account,
                    value: transactionValue
                });
        
                // Handle success
                console.log('Transaction successful:', result);
            } catch (error) {
                // Handle error
                console.error('Error minting:', error);
            }
        } else {
            return ;
        }
        
    };


    const connect = async () => {
        if (ethereum) {
            try {
                setIsConnecting(true);
                const chainId = await ethereum.request({ method: 'eth_accounts' });
                // Base EVM chain ID is '8453'
                // if (chainId !== '0x2105') {
                //     console.log('Please switch MetaMask to Base EVM chain');
                //     return;
                // }
    
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                setIsConnected(true);
                setIsConnecting(false);
            } catch (err) {
                console.error(err);
                setIsConnecting(false);
                setIsConnected(false);
            }
        }
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
                    <Box sx={{
                        display: 'flex',
                        gap: '20px',
                        fontFamily: "var(--font-jetbrains-mono)",
                    }}>
                        <Li><a href="https://twitter.com/etherorbxyz">twitter</a></Li>
                        <Li><a href="https://twitter.com/etherorbxyz">telegram</a></Li>
                        <Li><a href="https://twitter.com/etherorbxyz">docs</a></Li>
                    </Box>
                </Navbar>
                <img src="./mint_page_bacground.png" alt='mint_page_img' />
                <Content>
                    <Box
                        sx={{
                            fontSize: 'var(--font-size-xs)',
                            fontFamily: 'var(--font-krungthep)',
                            background: "var(--color-black)",
                            color: 'var(--color-white)',
                            padding: '20px'
                        }}
                    >
                        0/7777 MINTED
                    </Box>
                    <Box
                        sx={{
                            fontSize: 'var(--font-size-29xl)',
                            fontFamily: 'var(--font-krungthep)',
                            color: 'var(--color-white)',
                            padding: '20px',
                            textTransform: 'uppercase',
                            '@media screen and (max-width: 800px)': {
                                fontSize: 'var(--font-size-5xl)'
                            }
                        }}
                    >
                        let the orb choose you
                    </Box>
                    <Box
                        sx={{
                            fontSize: 'var(--font-size-xs)',
                            fontFamily: 'var(--font-krungthep)',
                            background: "var(--color-black)",
                            color: 'var(--color-white)',
                            padding: '20px',
                            textTransform:'uppercase'
                        }}
                    >
                        [open for whitelist only]
                    </Box>
                </Content>
                <BtnContainer>
                    {!isConnected && account.length === 0 ? 
                    <>
                        <Button onClick={connect}>Connect Wallet</Button>
                    </> 
                    : 
                    <>
                    {isConnecting ? "Loading" : <>
                        {isEligible ? 
                            <>
                                <Button onClick={mint}>MINT</Button>
                            </>
                        : 
                            <Typography sx={{
                                fontSize: "var(--font-size-s)",
                                fontFamily: "var(--font-krungthep)",
                                color: "#00000080",
                                transition: "all .3s ease",
                                padding: "5px 10px",
                                border: "none",
                                textAlign: "center",
                                cursor: "pointer" 
                            }}>NOT ELIGIBLE</Typography>
                        }
                        </>
                    }
                        
                    </>
                    }
                </BtnContainer>
            </MintPageContent>
        </MintPageContainer>
    )
}

export default MintPage

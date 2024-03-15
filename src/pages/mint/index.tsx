import styled from 'styled-components'
import SubwayPowerVector from '../../components/SubwayPowerVector'
import { Box } from '@mui/material'
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
    text-transform: uppercase;
    position: relative; /* Add relative positioning to the parent element */
    a { 
        text-decoration: none;
        color: #ffffff80;
        position: relative; /* Add relative positioning to the anchor element */
        &:hover {
            &.consto::after { /* Add hover effect to the ::after pseudo-element */
                content: "coming soon";
                position: absolute;
                top: 100%; /* Position below the anchor element */
                left: 50%;
                transform: translateX(-50%);
                font-size: 0.8rem;
                background-color: black; /* Set background color to black */
                color: white; /* Set text color to white */
                padding: 0.2rem 0.5rem;
                border-radius: 0.2rem;
                z-index: 1;
            }
        }
    }
`

const WalletAddress = styled.div`
    color: white;
    font-size: 14px;
    margin-right: -20px;
    @media screen and (max-width: 700px) {
        margin: 20px auto;
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
    flex-direction: column;
    gap: 65px;
    color: red;
`

const DisconnectButton = styled(Button)`
    margin-bottom: -100px; /* Adjusted margin top for Disconnect button */
    color: #000;
    font-weight: bold;
    transition: border 0.3s; /* Add transition for border */
    &:hover,
    &:active {
        border: 2px solid black; /* Add border on hover or click */
    }
`;



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
    const [paid, setPaid] = useState(true);
    const [message, setMessage] = useState('NOT ELIGIBLE');
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
                const paid_whitelisted:boolean = await contract.methods._whitelisted_minters(account).call();
                const free_whitelisted:boolean = await contract.methods._free_whitelisted_(account).call();
                const hasclaimed:boolean = await contract.methods._hasClaimed(account).call();

                if (hasclaimed) {
                    setMessage('ALREADY MINTED');
                    setIsEligible(false);
                    return;
                }

                if (paid_whitelisted || free_whitelisted) {
                    setIsEligible(true);
                    if (free_whitelisted) {
                        setMessage('MINT FOR FREE');
                        setPaid(false);
                    }
                    return;
                }

            } catch (err) {
                console.log(err);
            }
        };

        CheckEligibility();
    }, [isConnected, setIsConnected])


    const mint = async () => {
        if (!isEligible) return;
        if(isConnected && account.length != 0) {
            try {

                // Get user's Ethereum account address
                const accounts = await web3.eth.requestAccounts();
                const account = accounts[0];
                let transactionValue:string;
                try{
                    transactionValue = await contract.methods._price().call(); 
                }catch{
                    transactionValue = web3.utils.toWei('0.001', 'ether');
                    console.log('Error fetching fee');
                }
                // the transaction value..
                console.log('Transaction value:', transactionValue);
                // Send transaction to mint
                const result = await contract.methods.mint(account, transactionValue).send({
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

    const disconnect = async () => {
        if (ethereum && isConnected) {
            try {
                await ethereum.request({ method: 'wallet_disconnect' });
                setAccount('');
                setIsConnected(false);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const connect = async () => {
        if (ethereum) {
            try {
                setIsConnecting(true);
                const chainId = await ethereum.request({ method: 'eth_chainId' });
                console.log('Chain ID:', chainId);
                // Base EVM chain ID is '8453'
                if (chainId !== "0x2105") {
                    await ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x2105' }] });
                }
    
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
                    fontFamily: "var(--font-jetbrains-mono), sans-serif",
                    minWidth: '200px'
                    
                }}>
                    <Li><a href="https://twitter.com/etherorbxyz" target="_blank" rel="noopener">twitter</a></Li>
                    <Li><a href="https://t.me/EtherOrb404" target="_blank" rel="noopener">telegram</a></Li>
                    <Li><a href="#" className="consto">docs</a></Li>
                </Box>
                {isConnected && account.length > 0 && (
                    <WalletAddress>{account}</WalletAddress>
                )}
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
                        {/* 0/7777 MINTED */}
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
                        {isConnecting ? "Loading" : 
                            <>
                                <Button onClick={mint}>{message}</Button>
                                <DisconnectButton onClick={disconnect}>Disconnect Wallet</DisconnectButton>
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

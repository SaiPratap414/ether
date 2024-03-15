import styled from 'styled-components';
import SubwayPowerVector from '../../components/SubwayPowerVector';
import { Box, CircularProgress } from '@mui/material'; // Updated import
import React, { useState } from 'react';
import Web3 from 'web3';

import ABI from "../../constants/contractABI.json";

const MintPageContainer = styled.div`
    
`

const WalletInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    z-index: 999;
`;

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
`;

const WalletAddress = styled.div`
    color: white;
    font-family: var(--font-jetbrains-mono);
    margin: 10px auto;
    font-size: 14px;
    @media screen and (max-width: 700px) {
        margin: 20px auto;
    }
`;

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
`;

const MintPageContent = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    img {
        width:100%;
        height: 100%;
        object-fit: cover;
    }
`;

const BtnContainer = styled.div`
    position: absolute;
    top: 10vh; /* Adjusted position */
    left: 0;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #ffffff;
    z-index: 999;
    margin-top: 4vh; /* Optional: Keep this margin if needed */

    button {
        max-width: 150px;
        text-align: center;
    }

    // @media screen and (max-width: 680px) {
    //     margin-top: -1vh;
    // }
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
`;

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
`;

const MintPage = () => {
    const [account, setAccount] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [isEligible, setIsEligible] = useState(false);
    const [message, setMessage] = useState('NOT ELIGIBLE');
    const [isConnecting, setIsConnecting] = useState(false);
    const [sold, setSold] = useState<string>("0");
    const [total, setTotal] = useState<string>("850");

    const ethereum = (window as any).ethereum;

    const web3 = new Web3(ethereum);
    const web3_extra = new Web3('https://rpc.ankr.com/base');
    const contractAddress = '0xE1Df0d4b0FdeD95fc98AD12CF7f1FedfeB666b99';

    const contract = new web3.eth.Contract(ABI, contractAddress);
    const extra_contract = new web3_extra.eth.Contract(ABI, contractAddress);

    React.useEffect(() => {
        const fetchSold = async () => {
            alert('Fetching sold');
            const sold:string = ((await contract.methods._sold_count().call()) as any).toString();
            const total:string = ((await contract.methods._max_supply().call()) as any).toString();
            setSold(sold);
            setTotal(total);
        }

        fetchSold();
    }, []);

    React.useEffect(() => {
        const CheckEligibility = async () => {
            if (!isConnected) return;

            try {
                const accounts = await web3.eth.requestAccounts();
                const account = accounts[0];
                console.log('Account:', account);
                const whitelisted:boolean = await contract.methods._whitelisted_minters(account).call();
                const hasclaimed:boolean = await contract.methods._hasClaimed(account).call();

                if (hasclaimed) {
                    setMessage('ALREADY MINTED');
                    setIsEligible(false);
                    return;
                }

                if (whitelisted) {
                    setMessage('MINT');
                    setIsEligible(true);
                    return;
                }

            } catch (err) {
                console.log(err);
            }
        };

        CheckEligibility();
    }, [isConnected, setIsConnected]);

    const mint = async () => {
        if (!isEligible) return;
        if (isConnected && account.length !== 0) {
            try {
                const accounts = await web3.eth.requestAccounts();
                const account = accounts[0];
                let transactionValue:string;
                try {
                    console.log(await contract.methods._price().call());
                    transactionValue = await contract.methods._price().call(); 
                } catch {
                    transactionValue = web3.utils.toWei('0.001', 'ether');
                    console.log('Error fetching fee');
                }
                console.log('Transaction value:', transactionValue);
                const result = await contract.methods.mint(1).send({
                    from: account,
                    value: transactionValue
                });

                console.log('Transaction successful:', result);
            } catch (error) {
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
                const chainId = await ethereum.request({ method: 'eth_chainId' });
                console.log('Chain ID:', chainId);
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
    };

    const disconnect = () => {
        setIsConnected(false);
        setAccount('');
        setIsEligible(false);
        setMessage('NOT ELIGIBLE');
    };

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
        </Navbar>
            <img src="./mint_page_bacground.png" alt='mint_page_img' />
            <Content>
                
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
                        textTransform:'uppercase',
                        marginTop: '-20px'
                    }}
                >
                    [open for whitelist only]
                </Box>
                <BtnContainer>
                    {!isConnected && account.length === 0 ? 
                        <>
                            <Button onClick={connect}>Connect Wallet</Button>
                        </> 
                        : 
                        <>  
                        {isConnecting ? <CircularProgress color="primary" /> : message === "NOT ELIGIBLE" ? <Button>NOT ELIGIBLE</Button> : <Button onClick={mint}>MINT</Button> }
                        </>
                    }
                </BtnContainer>
            </Content>
        </MintPageContent>
        <WalletInfoSection>

        {isConnected && account.length > 0 && (
                <WalletAddress>{account} [{message}]</WalletAddress>
        )}

        {isConnected && <DisconnectButton onClick={disconnect}>Disconnect Wallet</DisconnectButton>}

    </WalletInfoSection>
    </MintPageContainer>
    );
};

export default MintPage;

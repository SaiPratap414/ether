import React from 'react'
import styled from 'styled-components'
import SubwayPowerVector from '../../components/SubwayPowerVector'
import { Box } from '@mui/material'

const MintPageSuccessContainer = styled.div`
    width: 100%;
    height: 100vh;
    height: 100svh;
    box-sizing: border-box;
    background: #000000;
`

const Image = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 600px;
    // object-fit: cover;
    opacity: 0.1;
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
`;

const PassImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    height: 100svh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 999;
    img {
        height: 50vh;
        max-width: 400px;
    }
`

const PassContent = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    gap: 20px;
    margin-bottom: 10px;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
`

const ShareButton = styled.button`
    color: #ffffff;
    background: #000000;
    max-width: 300px;
    margin: 0 auto;
    font-weight: bold;
    transition: border 0.3s;
    font-family: var(--font-krungthep);
    padding: 10px 20px;
    border: 1px solid rgba(255, 255, 255);
    border-radius: 5px;
    cursor: pointer;
    &:hover,
    &:active {
        border: 1px solid black;
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

const MintPageSuccess = () => {
  return (
    <MintPageSuccessContainer>
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
                <Li><a href="#" className="consto">PLAY</a></Li>
            </Box>
        </Navbar>
        <Image src="/1cd1b3dbf635d465812b2eb2bea0288e.png" />

        <PassImageWrapper>
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
                    welcome to the cabal
                </Box>
            <video src="/mint.MP4" autoPlay loop muted />
            <Box
                sx={{
                    fontSize: 'var(--font-size-s)',
                    width: '300px',
                    margin: '30px',
                    textAlign: 'center',
                    fontFamily: 'var(--font-jetbrains-mono)',
                    color: 'var(--color-white)',
                    padding: '20px',
                    textTransform: 'uppercase',
                    '@media screen and (max-width: 800px)': {
                        fontSize: 'var(--font-size-xs)'
                    }
                }}
            >
                This token will grant an airdrop (1:1) of the main token at TGE
            </Box>
        </PassImageWrapper> 

        <PassContent>
            <a
                href="https://twitter.com/intent/tweet?text=Some%20Custom%20Text&url=https://store-images.s-microsoft.com/image/apps.60673.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b7eb-9734-4b51-b65d-a0383348ab1b&hashtags=etherorb,example"
                data-size="large"
            ><ShareButton >SHARE ON X</ShareButton></a>
            <WalletAddress>[CONNECTED]</WalletAddress>
        </PassContent>

        {/*  onClick={() => window.location.href="https://twitter.com/intent/tweet?text="} */}
    </MintPageSuccessContainer>
  )
}

export default MintPageSuccess
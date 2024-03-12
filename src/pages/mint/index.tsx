import styled from 'styled-components'
import SubwayPowerVector from '../../components/SubwayPowerVector'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
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
    font-size: var(--font-size-lgi);
    font-family: var(--font-krungthep);
    color: #00000080;
    transition: all .3s ease;
    padding: 5px 10px;
    border: none;
    text-align: center;
    cursor: pointer;
`

const MintPageContent = styled.div`
    width: 100%;
    height: 100vh;
    height 100svh;
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
    top: 0;
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

    const ethereum  = (window as any).ethereum;

    const connect = async () => {

        if(ethereum) {
            try {
                const accounts = await ethereum.request({method: 'eth_requestAccounts'});
                setAccount(accounts![0]);
                setIsEligible(true);
            } catch (err: any) {
                console.log(err);
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
            fontFamily: "var(----font-jetbrains-mono), sans-serif",
            
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
                {isEligible ? 
                    <>
                    <Button onClick={connect}>MINT</Button>
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
        </BtnContainer>
        </MintPageContent>
    </MintPageContainer>
  )
}

export default MintPage
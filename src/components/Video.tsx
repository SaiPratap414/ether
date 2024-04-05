import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import SubwayPowerVector from "./SubwayPowerVector";
import styles from "./Video.module.css";
import styled from "styled-components";
import { Box, IconButton } from "@mui/material";
import { ArrowDownward, VolumeMute, VolumeOff, VolumeUpTwoTone } from "@mui/icons-material";

const HeaderSection = styled.div`
  width: 100%;
  position: relative;
  left: 0;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100vh;
  height: 100svh;
  background: #1a1a1a;
  z-index: 2; /* Ensure VideoContainer is above the pseudo-element */
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
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

  &:hover #mouse-tracker-blob {
    display: none;
  }
`

const HeaderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 996;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    margin-top: -20px;
    z-index: -1; /* Ensure pseudo-element is below HeaderContent */
  }
`;

const MouseTrackerBtn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-jetbrains-mono);
  background: rgba(255, 255, 255, 1);
  z-index: 10000;
  transition: transform 0.1s linear;
  pointer-events: none;
  overflow: hidden;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  &:hover {
    filter: invert(100%);
  }
`;

const Li = styled.li`
  text-decoration: none;
  color: #ffffff80;
  display: block;
  font-family: var(--font-jetbrains-mono);
  text-transform: uppercase;
  position: relative; /* Add position relative */
  cursor: pointer; /* Add cursor pointer */

  a {
    text-decoration: none;
    color: #ffffff80;
    position: relative;
    transition: text-decoration 0.3s ease;
  }

  &:hover a {
    text-decoration: underline;
    color: #ffffff; /* Change color on hover */
  }

  .consto::after {
    content: "Coming Soon";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 3px 8px;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    font-size: 10px;
    white-space: nowrap;
  }

  .consto:hover::after {
    opacity: 1;
  }

  .consto:hover {
    text-decoration: underline;
    color: #ffffff; /* Change color on hover */
  }
`;


const PoweredByImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px; /* Adjust the margin-top as needed */
`;


const Image = styled.img`
  width: 80px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
`;

const Video: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const [isBlobShowing, setIsBlobShowing] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
    setIsVideoMuted(!isVideoMuted); // Unmute the video
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  const handleButtonClick = () => {
    window.location.href = "https://uniswap.org"; 
  };

  const scrollToSection = () => {
    const section = document.getElementById("homepage-sec");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleBlobShow = (isHovering: boolean) => {
    setIsBlobShowing(isHovering);
  }

  return (
    <HeaderSection>
      <VideoContainer>
        <Navbar onMouseEnter={() => handleBlobShow(false)} onMouseLeave={() => handleBlobShow(true)}>
          <img
            className={styles.groupVectorTerraChild}
            loading="eager"
            alt=""
            src="/group-3-1.svg"
          />

          <Box sx={{
              display: 'flex',
              gap: '20px',
              fontFamily: "var(--font-jetbrains-mono), sans-serif",
              minWidth: '200px'
          }}>
              <Li><a href="https://twitter.com/etherorbxyz" target="_blank" rel="noopener">twitter</a></Li>
              <Li><a href="https://t.me/EtherOrb404" target="_blank" rel="noopener"> telegram</a></Li>
              <Li><a href="https://etherorb.gitbook.io/etherorb/" target="_blank" rel="noopener">docs</a></Li>
              <Li><a href="#" className="consto">Play</a></Li>
          </Box>
        </Navbar>
        <video
          src="/video.mp4"
          autoPlay
          playsInline
          muted={isVideoMuted}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: isVideoPlaying ? 998 : 1,
          }}
          onClick={handleVideoPlay}
          onPause={handleVideoPause}
          loop
        />
        <HeaderContent onClick={handleVideoPlay}>
          <div className={styles.layerFrame}>
            <div className={styles.orbIntroFrame}>
              <div className={styles.etherVectorGroup}>
                <div className="logoBox">
                  <SubwayPowerVector
                    group3="/group-3-1.svg"
                    propAlignSelf="unset"
                    propFlexDirection="row"
                    propFlex="unset"
                    propAlignSelf1="stretch"
                  />
                </div>
                <div className={styles.etherOrbsIntroduces}>
                  ETHER ORB INTRODUCES THE FIRST PVP GAME OF SKILL LEVERAGING THE ERC404 STANDARD ALLOWING “WIZARDS” TO BATTLE THEIR ORBS IN A ZERO-SUM STRATEGY GAME. 7777 UNIQUE ORBS WILL BE MINTED AND BURNED IN THE PROCESS OF A GOOD OLD-FASHIONED ORB DUEL.
                </div>
              </div>
              <div className={styles.putContractAddress}>
                CA: 0x655325df2528d3896C6BE2D8f5B98CD4020F3191
              </div>
              <button className={styles.ponderAcquireOrbs} onMouseEnter={() => handleBlobShow(false)} onMouseLeave={() => handleBlobShow(true)}>
                <div className={styles.howToFrame}>
                  <a href="https://app.uniswap.org/swap?outputCurrency=0x655325df2528d3896C6BE2D8f5B98CD4020F3191&inputCurrency=ETH&chain=base" target="_blank" rel="noopener noreferrer" className={styles.buyOrb} onClick={() => navigate("")}>Buy $Orb on Base</a>
                </div>
              </button>
              <div className={styles.putContractAddress}>
                
              </div>
              <PoweredByImage>
                <Image src="/base.png" alt="" />
              </PoweredByImage>
            </div>
          </div>
        </HeaderContent>
      </VideoContainer>
      {isBlobShowing && <MouseTrackerBtn id="mouse-tracker-blob" style={{ transform: `translate(${mousePosition.x - 25}px, ${mousePosition.y - 25}px)` }}>
          {isVideoPlaying ? <VolumeOff /> : <VolumeUpTwoTone />}
      </MouseTrackerBtn>}

      <IconButton sx={{position: 'absolute', bottom: 0, height: '70px', width: '100%', zIndex: 9999, color: '#ffffff40', borderRadius: '0px', background: 'linear-gradient(to bottom, #00000000, #00000070)', padding: '10px 20px', fontFamily: 'var(--font-jetbrains-mono)', fontSize: 'var(--font-size-s)'}} onMouseEnter={() => handleBlobShow(false)} onMouseLeave={() => handleBlobShow(true)} onClick={scrollToSection}>
        <ArrowDownward /> &nbsp;SCROLL DOWN
      </IconButton>
    </HeaderSection>
  );
};

export default Video;

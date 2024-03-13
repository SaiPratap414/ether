import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import SubwayPowerVector from "./SubwayPowerVector";
import styles from "./Video.module.css";
import styled from "styled-components";
import { Box } from "@mui/material";

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
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    z-index: -1; /* Ensure pseudo-element is below HeaderContent */
  }
`;

const MouseTrackerBtn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
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
  a { 
    text-decoration: none;
    color: #ffffff80;
  }
`

const Video: React.FunctionComponent = () => {

  const navigate = useNavigate();

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
    const section = document.getElementById("scroll-section");
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

  return (
    <HeaderSection>
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
            minWidth: '200px'
            
          }}>
            <Li><a href="https://twitter.com/etherorbxyz">twitter</a></Li>
            <Li><a href="https://twitter.com/etherorbxyz">telegram</a></Li>
            <Li><a href="https://twitter.com/etherorbxyz">docs</a></Li>
          </Box>
      </Navbar>
      <VideoContainer>
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
                  <img src="./logoo.png" />
                </div>
                <div className={styles.etherOrbsIntroduces}>
                Ether Orbs introduces the first PvP wagering iteration of the ERC404 standard allowing “wizards” to wager their ERC404 tokens in a zero-sum strategy game. 7777 unique $ORBS will be minted and burned in the process of a good old-fashioned ORB duel.
                </div>
              </div>
              <div className={styles.putContractAddress}></div>
              <button className={styles.ponderAcquireOrbs}>
                <div className={styles.howToFrame}>
                  <div className={styles.buyOrb} onClick={() => navigate("./mint")}>WHITELIST MINT</div>
                </div>
              </button>
            </div>
          </div>
        </HeaderContent>
      </VideoContainer>

      <MouseTrackerBtn style={{ transform: `translate(${mousePosition.x - 50}px, ${mousePosition.y - 50}px)` }}>
          {isVideoPlaying ? "MUTE" : "UNMUTE"}
      </MouseTrackerBtn>
    </HeaderSection>
  );
};

export default Video;

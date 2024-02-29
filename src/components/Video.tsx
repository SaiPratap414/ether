// Import React and necessary hooks
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import SubwayPowerVector from "./SubwayPowerVector";
import styles from "./Video.module.css";
import { motion } from "framer-motion";

const Video: React.FunctionComponent = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBackButtonClick = () => {
    // Navigate to the previous page
    navigate(-1);
  };

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  if (isVideoPlaying) {
    return (
      <div className={styles.fullScreenVideoContainer}>
        <video
          src="/video.mp4"
          autoPlay
          playsInline
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%", // Adjust the width as needed
            height: "100%", // Adjust the height as needed
            objectFit: "cover",
            zIndex: "9999",
          }}
        />
        <div className={styles.backButton} onClick={handleBackButtonClick}>
          Back
        </div>
      </div>
    );
  }

  const handleButtonClick = () => {
    window.location.href = "https://uniswap.org"; // Navigate to Uniswap
  };

  const scrollToSection = () => {
    const section = document.getElementById("scroll-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={styles.video} id="scroll-header">
      <motion.div
        className={styles.watchVideo}
        onClick={handleVideoPlay}
        animate={{ y: ["0px", "10px"] }} // Defines the vertical movement range
        transition={{
          duration: 2, // Duration of one cycle of the animation
          repeat: Infinity, // Makes the animation repeat indefinitely
          repeatType: "reverse", // Animates back and forth
          ease: "easeInOut", // Smoothens the start and end of the animation
        }}
      >
        watch video
      </motion.div>
     
      <div className={styles.layerFrame}>
        <div className={styles.orbIntroFrame}>
          <div className={styles.etherVectorGroup}>
            <div className="logoBox">
              <img src="/Logo1.png" alt="logo" />
            </div>
            <div className={styles.etherOrbsIntroduces}>
              Ether Orbs introduces the first PvP wagering iteration of the
              ERC404 standard allowing “wizards” to wager their ERC404 tokens in
              a zero-sum strategy game. 7777 unique $ORBS will be minted and
              burned in the process of a good old-fashioned ORB duel.
            </div>
          </div>
          <div className={styles.putContractAddress}></div>
          <button className={styles.ponderAcquireOrbs}>
            <div className={styles.howToFrame}>
              <div className={styles.buyOrb} onClick={handleButtonClick}>buy $orb</div>
            </div>
          </button>
        </div>
      </div>

      <motion.div
        className={styles.blitzBattle}
        onClick={scrollToSection}
        animate={{ y: ["0px", "-10px"] }} // Defines the vertical movement range
        transition={{
          duration: 2, // Duration of one cycle of the animation
          repeat: Infinity, // Makes the animation repeat indefinitely
          repeatType: "reverse", // Animates back and forth
          ease: "easeInOut", // Smoothens the start and end of the animation
        }}
      >
       <img
          className={styles.ggmoveDownIcon}
          loading="eager"
          alt=""
          src="/ggmovedown.svg"
        />
        <div className={styles.scrollDown}>scroll down</div>
        <img
          className={styles.ggmoveDownIcon1}
          loading="eager"
          alt=""
          src="/ggmovedown.svg"
        />
      </motion.div>
    
    </header>
  );
};

export default Video;

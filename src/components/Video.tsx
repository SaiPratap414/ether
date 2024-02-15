// Import React and necessary hooks
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import SubwayPowerVector from './SubwayPowerVector';
import styles from './Video.module.css';

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
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%', // Adjust the width as needed
            height: '100%', // Adjust the height as needed
            objectFit: 'cover',
            zIndex: '9999',
          }}
        />
         <div className={styles.backButton} onClick={handleBackButtonClick}>Back</div>
      </div>
    );
  }

  return (
    <header className={styles.video}>
      <div className={styles.watchVideo} onClick={handleVideoPlay}>
        watch video
      </div>
      <div className={styles.layerFrame}>
        <div className={styles.orbIntroFrame}>
          <div className={styles.etherVectorGroup}>
            <SubwayPowerVector group3="/group-3.svg" />
            <div className={styles.etherOrbsIntroduces}>
              Ether Orbs introduces the first PvP wagering iteration of the ERC404 standard allowing “wizards” to wager their ERC404 tokens in a zero-sum strategy game. 7777 unique $ORBS will be minted and burned in the process of a good old-fashioned ORB duel.
            </div>
          </div>
          <div className={styles.putContractAddress}></div>
          <button className={styles.ponderAcquireOrbs}>
            <div className={styles.howToFrame}>
              <div className={styles.buyOrb}>buy $orb</div>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.blitzBattle}>
        <img className={styles.ggmoveDownIcon} loading="eager" alt="" src="/ggmovedown.svg" />
        <div className={styles.scrollDown}>scroll down</div>
        <img className={styles.ggmoveDownIcon1} loading="eager" alt="" src="/ggmovedown.svg" />
      </div>
    </header>
  );
};

export default Video;

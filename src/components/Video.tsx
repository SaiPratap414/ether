// Import React and necessary hooks
import React, { useState } from 'react';
// Import other components and styles as before
import SubwayPowerVector from './SubwayPowerVector';
import styles from './Video.module.css';

// Define the Video component
const Video: React.FunctionComponent = () => {
  // State to manage video playback
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Function to trigger video playback
  const handleVideoPlay = () => {
    setIsVideoPlaying(true); // Set the state to true to play the video
  };

  // Conditional rendering based on whether the video is playing
  if (isVideoPlaying) {
    // If the video is playing, return a full-screen video element
    return (
      <div className={styles.fullScreenVideoContainer}>
        <video
          src="/finaledit.mp4" // Specify the path to your video file here
          autoPlay // Play the video automatically
           // Loop the video
           // Mute the video
          playsInline // Play the video inline
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensure the video covers the full screen
            zIndex: '9999', // Make sure the video is above all other content
          }}
        />
      </div>
    );
  }

  // Return the original component structure if the video is not playing
  return (
    <header className={styles.video}>
      <div className={styles.watchVideo} onClick={handleVideoPlay}>watch video</div>
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

// Export the updated component
export default Video;

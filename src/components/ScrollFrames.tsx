import React, { useState } from 'react';
import styles from './ScrollFrames.module.css';

const ScrollFrames = () => {
  const [centeredImage, setCenteredImage] = useState('orange'); // Default centered image
  const images = ['v', 'green', 'orange', 'blue', 'lightblue'];
  const handleArrowClick = (direction: 'left' | 'right') => {
    const currentIndex = images.indexOf(centeredImage);
    const nextIndex =
      direction === 'left'
        ? (currentIndex - 1 + images.length) % images.length
        : (currentIndex + 1) % images.length;
    setCenteredImage(images[nextIndex]);
  };



  return (
    <div className={styles.scrollFrames}>
      <div className={styles.buyOrbParent}>
        {/* Left arrow */}
        <div className={styles.fungiParent} onClick={() => handleArrowClick('left')}>
          <div className={styles.rectangleFrames}>
            <div className={styles.emptyFrame}>{"<--"}</div>
          </div>
        </div>

        {/* Images */}
        {images.map((imageId) => (
          <div key={imageId} className={styles.rectangleParent}>
            <img
              className={`${styles.blazeChildIcon} ${centeredImage === imageId ? styles.centered : ''} ${imageId === 'orange' ? styles.orangeIcon : ''}`}
              alt=""
              src={`/${imageId}.png`}
              style={centeredImage === imageId ? { transform: 'scale(1.9)', boxShadow: '0 0 10px rgba(0, 0, 255, 0.7)' } : {}}
            />
          </div>
        ))}

        {/* Right arrow */}
        <div className={styles.fungiParent1} onClick={() => handleArrowClick('right')}>
          <div className={styles.wrapper}>
            <div className={styles.div}>{'-->'}</div>
          </div>
        </div>
      </div>

      {/* Additional content */}
      {centeredImage === 'blue' ? (
        <div className={styles.frameParent}>
          <div className={styles.blazeWrapper}>
            <div className={styles.blaze}>torrent</div>
          </div>
          <div className={styles.blaze1}>
            <img
              className={styles.torrentIcon}
              loading="eager"
              alt=""
              src="/torrent.png"
            />
          </div>
          <div className={styles.blazeSurgesWithTheUnbridleWrapper}>
            <div className={styles.blazeSurgesWith}>
              Torrent captures the ever-flowing essence of water, representing fluidity & depth.
            </div>
          </div>
        </div>
      ) : centeredImage === 'lightblue' ? (
        <div className={styles.frameParent}>
          <div className={styles.blazeWrapper}>
            <div className={styles.blaze}>ether</div>
          </div>
          <div className={styles.blaze1}>
            <img
              className={styles.etherIcon}
              loading="eager"
              alt=""
              src="/ether.png"
            />
          </div>
          <div className={styles.blazeSurgesWithTheUnbridleWrapper}>
            <div className={styles.blazeSurgesWith}>
              Ether resonates with the mysteries of the spirit, encompassing the unknown.
            </div>
          </div>
        </div>
      ) : centeredImage === 'green' ? (
        <div className={styles.frameParent}>
          <div className={styles.blazeWrapper}>
            <div className={styles.blaze}>terra</div>
          </div>
          <div className={styles.blaze1}>
            <img
              className={styles.terraIcon}
              loading="eager"
              alt=""
              src="/Terra.png"
            />
          </div>
          <div className={styles.blazeSurgesWithTheUnbridleWrapper}>
            <div className={styles.blazeSurgesWith}>
              Terra stands for the enduring strength of earth, symbolizing stability & resilience.
            </div>
          </div>
        </div>
      ) : centeredImage === 'v' ? (
        <div className={styles.frameParent}>
          <div className={styles.blazeWrapper}>
            <div className={styles.blaze}>aer</div>
          </div>
          <div className={styles.blaze1}>
            <img
              className={styles.aerIcon}
              loading="eager"
              alt=""
              src="/aer.png"
            />
          </div>
          <div className={styles.blazeSurgesWithTheUnbridleWrapper}>
            <div className={styles.blazeSurgesWith}>
              Aer swirls with the freedom of air, signifying agility & freedom.
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.frameParent}>
          <div className={styles.blazeWrapper}>
            <div className={styles.blaze}>blaze</div>
          </div>
          <div className={styles.blaze1}>
            <img
              className={styles.riblazeFillIcon}
              loading="eager"
              alt=""
              src="/riblazefill.svg"
            />
          </div>
          <div className={styles.blazeSurgesWithTheUnbridleWrapper}>
            <div className={styles.blazeSurgesWith}>
              Blaze surges with the unbridled power of fire, embodying energy & transformation.
            </div>
          </div>
        </div>
      )}

      <button className={styles.buyButtonWrapper} onClick={() => alert("Orb purchase flow here")}>
        <div className={styles.buyButton}>
          <div className={styles.buyOrb}>buy orb</div>
        </div>
      </button>
    </div>
  );
};

export default ScrollFrames;

















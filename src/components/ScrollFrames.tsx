import React, { useState, useEffect } from "react";
import styles from "./ScrollFrames.module.css";

const ScrollFrames = () => {
  const [centeredImage, setCenteredImage] = useState("orange"); // Default centered image
  const [images, setImages] = useState([
    "v",
    "green",
    "orange",
    "blue",
    "lightblue",
  ]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleArrowClick = (direction: "left" | "right") => {
    setImages((currentImages) => {
      let newImages = [];
      if (direction === "right") {
        newImages = [...currentImages.slice(1), currentImages[0]];
      } else {
        newImages = [
          currentImages[currentImages.length - 1],
          ...currentImages.slice(0, -1),
        ];
      }
  
      // Calculate the new centered image based on the updated order
      const newCenteredImage = newImages[Math.floor(newImages.length / 2)];
      setCenteredImage(newCenteredImage); // Update the centered image state
  
      return newImages;
    });
  };

  const handleButtonClick = () => {
    window.open("", ""); // Open Uniswap in a new tab
  };

  let visibleImages = images;
  if (windowWidth <= 440) {
    const centerIndex = images.indexOf(centeredImage);
    visibleImages = [images[centerIndex]]; // Show only the centered image
  } else if (windowWidth <= 600) {
    const centerIndex = Math.floor(images.length / 2);
    visibleImages = images.slice(centerIndex - 1, centerIndex + 2); // Show three images
  }

  return (
    <div className={styles.scrollFrames}>
      <div className={styles.buyOrbParent}>
        {/* Left arrow */}
        <div
          className={styles.fungiParent}
          onClick={() => handleArrowClick("left")}
        >
          <div className={styles.rectangleFrames}>
            <div className={styles.emptyFrame}>{"<--"}</div>
          </div>
        </div>

        {/* Images */}
        {visibleImages.map((imageId) => (
  <div key={imageId} className={styles.rectangleParent}>
    <img
      className={`${styles.blazeChildIcon} ${
        centeredImage === imageId ? styles.centered : ""
      } ${centeredImage === imageId && imageId === "orange" ? styles.orangeIcon : ""} ${centeredImage === imageId && imageId === "v" ? styles.violetIcon : ""} ${centeredImage === imageId && imageId === "green" ? styles.greenIcon : ""} ${centeredImage === imageId && imageId === "blue" ? styles.blueIcon : ""} ${centeredImage === imageId && imageId === "lightblue" ? styles.lightblueIcon : ""}
      `}
      alt=""
      src={`/${imageId}.png`}
      style={
        centeredImage === imageId
          ? {
              transform: "scale(1.8)",
              boxShadow: "0 0 10px rgba(0, 0, 255, 0.7)",
              // animation: `glow-${imageId} 2s infinite ease-in-out`
            }
          : {}
      }
    />
  </div>
))}


        {/* Right arrow */}
        <div
          className={styles.fungiParent1}
          onClick={() => handleArrowClick("right")}
        >
          <div className={styles.wrapper}>
            <div className={styles.div}>{"-->"}</div>
          </div>
        </div>
      </div>

      {/* Additional content */}
      {centeredImage === "blue" ? (
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
              Torrent captures the ever-flowing essence of water, representing
              fluidity & depth.
            </div>
          </div>
        </div>
      ) : centeredImage === "lightblue" ? (
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
              Ether resonates with the mysteries of the spirit, encompassing the
              unknown.
            </div>
          </div>
        </div>
      ) : centeredImage === "green" ? (
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
              Terra stands for the enduring strength of earth, symbolizing
              stability & resilience.
            </div>
          </div>
        </div>
      ) : centeredImage === "v" ? (
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
              Blaze surges with the unbridled power of fire, embodying energy &
              transformation.
            </div>
          </div>
        </div>
      )}

<button className={styles.ponderAcquireOrbs} onClick={handleButtonClick}>
  <div className={styles.howToFrame}>
    <a href="https://app.uniswap.org/swap?outputCurrency=0x655325df2528d3896C6BE2D8f5B98CD4020F3191&inputCurrency=ETH&chain=base" target="_blank" rel="noopener noreferrer" className={styles.buyOrb} style={{ textDecoration: 'none' }}>buy $orb</a>
  </div>
</button>

    </div>
  );
};

export default ScrollFrames;

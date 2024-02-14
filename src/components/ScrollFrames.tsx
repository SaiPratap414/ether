import { FunctionComponent } from "react";
import styles from "./ScrollFrames.module.css";

const ScrollFrames: FunctionComponent = () => {
  return (
    <div className={styles.scrollFrames}>
      <div className={styles.buyOrbParent}>
        <div className={styles.fungiParent}>
          <div className={styles.rectangleFrames}>
            <div className={styles.emptyFrame}>{`<--`}</div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.blazeChildIcon}
            alt=""
            src="/blaze-child@2x.png"
          />
        </div>
        <div className={styles.powerFrame}>
          <img
            className={styles.elementalScoresFAQ}
            loading="eager"
            alt=""
            src="/rectangle-4@2x.png"
          />
        </div>
        <div className={styles.strategicBattle}>
          <div className={styles.orbNFTMalfunctioning}>
            <img
              className={styles.whatIsElementalScores}
              loading="eager"
              alt=""
              src="/rectangle-2@2x.png"
            />
          </div>
        </div>
        <div className={styles.predictOpponent}>
          <img
            className={styles.orbAcquisitionIcon}
            loading="eager"
            alt=""
            src="/rectangle-3-1@2x.png"
          />
        </div>
        <div className={styles.fAQHeader}>
          <img
            className={styles.fAQHeaderChild}
            loading="eager"
            alt=""
            src="/rectangle-2-1@2x.png"
          />
        </div>
        <div className={styles.fungiParent1}>
          <div className={styles.wrapper}>
            <div className={styles.div}>{`-->`}</div>
          </div>
        </div>
      </div>
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
          <div
            className={styles.blazeSurgesWith}
          >{`Blaze surges with the unbridled power of fire, embodying energy & transformation.`}</div>
        </div>
      </div>
      <button className={styles.buyButtonWrapper}>
        <div className={styles.buyButton}>
          <div className={styles.buyOrb}>buy orb</div>
        </div>
      </button>
    </div>
  );
};

export default ScrollFrames;

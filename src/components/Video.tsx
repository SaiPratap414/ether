import { FunctionComponent } from "react";
import SubwayPowerVector from "./SubwayPowerVector";
import styles from "./Video.module.css";

const Video: FunctionComponent = () => {
  return (
    <header className={styles.video}>
      <div className={styles.watchVideo}>watch video</div>
      <div className={styles.layerFrame}>
        <div className={styles.orbIntroFrame}>
          <div className={styles.etherVectorGroup}>
            <SubwayPowerVector group3="/group-3.svg" />
            <div className={styles.etherOrbsIntroduces}>
              Ether Orbs introduces the first PvP wagering iteration of the
              ERC404 standard allowing “wizards” to wager their ERC404 tokens in
              a zero-sum strategy game. 7777 unique $ORBS will be minted and
              burned in the process of a good old-fashioned ORB duel.
            </div>
          </div>
          <div className={styles.putContractAddress}>
            PUT CONTRACT ADDRESS HERE
          </div>
          <button className={styles.ponderAcquireOrbs}>
            <div className={styles.howToFrame}>
              <div className={styles.buyOrb}>buy $orb</div>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.blitzBattle}>
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
      </div>
    </header>
  );
};

export default Video;

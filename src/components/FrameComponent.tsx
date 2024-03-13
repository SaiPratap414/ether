import { FunctionComponent } from "react";
import SubwayPowerVector from "./SubwayPowerVector";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.navParent} id="scroll-section">
      <div className={styles.nav}>
        <div className={styles.nav1}>
          <SubwayPowerVector
            group3="/group-3-1.svg"
            propAlignSelf="unset"
            propFlexDirection="row"
            propFlex="unset"
            propAlignSelf1="stretch"
          />
          <div className={styles.twitterParent}>
            <a href="https://twitter.com/etherorbxyz"><div className={styles.twitter}>twitter</div></a>
            <a href="#"><div className={styles.telegram}>telegram</div></a>
            <a href="#"><div className={styles.docs}>docs</div></a>
            <a href="#"><div className={styles.play}>play</div></a>
          </div>
        </div>
      </div>
      <div className={styles.acquiringOrbIs}>
        Acquiring $ORB is no ordinary feat; it's like hacking into the mainframe
        of reality itself. The prize is a pulsating Orb NFT that's brimming with
        elemental data.
      </div>
    </div>
  );
};

export default FrameComponent;

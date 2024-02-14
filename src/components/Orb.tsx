import { FunctionComponent } from "react";
import BlazeOrb from "./BlazeOrb";
import styles from "./Orb.module.css";

const Orb: FunctionComponent = () => {
  return (
    <section className={styles.orb}>
      <div className={styles.ponderTheOrbAnonParent}>
        <h1 className={styles.ponderTheOrb}>Ponder The Orb, Anon</h1>
        <div className={styles.frameWrapper}>
          <div className={styles.vectorWrapper}>
            <div className={styles.vector}>
              <div className={styles.chooseYourOrb}>
                choose your orb to start wagering.
              </div>
              <div className={styles.text}>
                <BlazeOrb
                  oRB0245="ORB #0245"
                  etherTransformed="1.mp4" // Update the video source
                  dualNatureORBs="26"
                  predictionBattle="01"
                  orbPulse="25"
                  fAQParent="20"
                  pondering="28"
                />
                <BlazeOrb
                  oRB0245="ORB #1122"
                  etherTransformed="2.mp4" // Update the video source
                  dualNatureORBs="05"
                  predictionBattle="42"
                  orbPulse="35"
                  fAQParent="10"
                  pondering="08"
                  propMinHeight="unset"
                />
                <BlazeOrb
                  oRB0245="ORB #2542"
                  etherTransformed="3.mp4" // Update the video source
                  dualNatureORBs="42"
                  predictionBattle="10"
                  orbPulse="06"
                  fAQParent="17"
                  pondering="25"
                  propMinHeight="591px"
                />
              </div>
              <div className={styles.frameLayout}>
                <div className={styles.chooseYourOrb1}>
                  <div className={styles.chooseYourOrb2}>choose your orb</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.layer3Icon} alt="" src="/layer-3.svg" />
    </section>
  );
};

export default Orb;

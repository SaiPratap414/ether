import { FunctionComponent } from "react";
import Video from "../components/Video";
import FrameComponent from "../components/FrameComponent";
import ScrollFrames from "../components/ScrollFrames";
import Gameplay from "../components/Gameplay";
import Orb from "../components/Orb";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import styles from "./DEV.module.css";

const DEV: FunctionComponent = () => {
  return (
    <div className={styles.dev}>
      <Video />
      <section className={styles.homepage}>
        <FrameComponent />
        <div className={styles.ec93494c0d0f43b692577e7ac4Parent}>
          <img
            className={styles.ec93494c0d0f43b692577e7ac4Icon}
            alt=""
            src="/ec93494c0d0f43b692577e7ac45251ddtransformed-1removebg-1@2x.png"
          />
          <ScrollFrames />
        </div>
      </section>
      <Gameplay />
      <Orb />
      <FAQ />
      <Footer />
    </div>
  );
};

export default DEV;

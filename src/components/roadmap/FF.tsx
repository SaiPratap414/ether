import { FunctionComponent, useEffect, useState } from "react";

import styles from "./FF.module.css";
import FrameComponent from "./FrameComponent";
import MobileFrameComponent from "./MobileFrameComponent";

const FF: FunctionComponent = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1000) {
      setMobile(true);
    }
  }, [])
  return (
    <div className={styles.ff} id="roadmap">
      <header className={styles.theRoadAheadWrapper}>
        <div className={styles.theRoadAhead}>the road ahead</div>
      </header>
      {!mobile && <FrameComponent />}
      {mobile && <MobileFrameComponent />}
    </div>
  );
};

export default FF;

import { FunctionComponent } from "react";
import styles from "./Footer.module.css";
import SubwayPowerVector from "./SubwayPowerVector";

const Footer: FunctionComponent = () => {
  return (
    <section className={styles.footer}>
      <footer className={styles.twitterTelegramLinksParent}>
        <div className={styles.twitterTelegramLinks}>
        <SubwayPowerVector
            group3="/group-3-1.svg"
            propAlignSelf="unset"
            propFlexDirection="row"
            propFlex="unset"
            propAlignSelf1="stretch"
          />
        </div>

        <img
          className={styles.fAQParentChild}
          loading="eager"
          alt=""
          src="/group-3-2.svg"
        />

        
        <div className={styles.twitterParent}>
          <a href="https://twitter.com/etherorbxyz" target="_blank" rel="noopener"><div className={styles.twitter}>twitter</div></a>
          <a href="https://t.me/EtherOrb404" target="_blank" rel="noopener"><div className={styles.telegram}>telegram</div></a>
          <div className={styles.docs}>DOCS</div>
        </div>
      </footer>
      <b className={styles.link}>© All rights reserved, 2024</b>
    </section>
  );
};

export default Footer;

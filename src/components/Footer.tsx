import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <section className={styles.footer}>
      <footer className={styles.twitterTelegramLinksParent}>
        <div className={styles.twitterTelegramLinks}>
          <h1 className={styles.ether}>Ether</h1>
          <img
            className={styles.twitterTelegramLinksChild}
            loading="eager"
            alt=""
            src="/group-3-3.svg"
          />
          <h1 className={styles.rb}>rb</h1>
        </div>
        <div className={styles.twitterParent}>
          <a href="https://twitter.com/etherorbxyz"><div className={styles.twitter}>twitter</div></a>
          <div className={styles.telegram}>telegram</div>
          <div className={styles.docs}>DOCS</div>
        </div>
      </footer>
      <b className={styles.link}>© All rights reserved, 2024</b>
    </section>
  );
};

export default Footer;

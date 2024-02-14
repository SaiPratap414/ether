import { FunctionComponent } from "react";
import styles from "./FAQ.module.css";

const FAQ: FunctionComponent = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.fAQParent}>
        <div className={styles.theTechnologyBehindTheMagiWrapper}>
          <div className={styles.theTechnologyBehindContainer}>
            <p className={styles.theTechnologyBehind}>
              The technology behind the magic
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.theDualNature}>
              The Dual Nature of ORB Tokens is enabled by ERC404, the wizardry
              behind the ORBs. ERC-404 is a new standard of on-chain
              coordination, that (in this case) lets you own a piece of the
              game, both as a fungible asset and a gateway to your own Orb NFT.
              This allows each NFT to possess inherent liquidity, facilitating a
              robust wagering system. These token are not just static
              collectibles but active, liquid assets integral to the game's
              financial mechanics.
            </p>
          </div>
        </div>
        <img
          className={styles.fAQParentChild}
          loading="eager"
          alt=""
          src="/group-3-2.svg"
        />
        <div className={styles.fAQTitle}>
          <h1 className={styles.faq1}>FAQ</h1>
          <div className={styles.socialMediaLinks}>
            <div className={styles.helpMyORBParent}>
              <div className={styles.helpMyORB}>
                <div className={styles.howDoI}>How do I start pondering?</div>
                <div className={styles.theDualNature1}>
                  The Dual Nature of ORB Tokens is enabled by ERC404, the
                  wizardry behind the ORBs. ERC-404 is a new standard of
                  on-chain coordination, that (in this case) lets you own a
                  piece of the game, both as a fungible asset and a gateway to
                  your own Orb NFT. This allows each NFT to possess inherent
                  liquidity, facilitating a robust wagering system. These token
                  are not just static collectibles but active, liquid assets
                  integral to the game's financial mechanics.
                </div>
              </div>
              <div className={styles.fAQ}>-</div>
            </div>
            <div className={styles.orbWontStopPulsating}>
              <div className={styles.whatsTheDeal}>
                What’s the deal with elemental scores?
              </div>
              <div className={styles.winWithStrategy}>+</div>
            </div>
            <div className={styles.orbWontStopPulsating1}>
              <div className={styles.canIActually}>
                Can I actually win with a strategy?
              </div>
              <div className={styles.div}>+</div>
            </div>
            <div className={styles.orbWontStopPulsating2}>
              <div className={styles.helpMyOrb}>
                Help! My Orb NFT won’t stop pulsating!
              </div>
              <div className={styles.div1}>+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

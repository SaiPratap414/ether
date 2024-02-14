import React, { FunctionComponent, useMemo, CSSProperties } from "react";
import styles from "./BlazeOrb.module.css";

export type BlazeOrbType = {
  oRB0245?: string;
  etherTransformed?: string;
  dualNatureORBs?: string;
  predictionBattle?: string;
  orbPulse?: string;
  fAQParent?: string;
  pondering?: string;
  propMinHeight?: CSSProperties["minHeight"];

  // New video props
  videoSrc?: string;
};

const BlazeOrb: FunctionComponent<BlazeOrbType> = ({
  oRB0245,
  etherTransformed,
  dualNatureORBs,
  predictionBattle,
  orbPulse,
  fAQParent,
  pondering,
  propMinHeight,
  videoSrc, // New prop
}) => {
  const blazeOrbStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div className={styles.blazeOrb} style={blazeOrbStyle}>
      <div className={styles.cardNft}>
        <div className={styles.chooseOrbs}>
          <div className={styles.subwayPower}>
            <img
              className={styles.torrentIcon}
              loading="eager"
              alt=""
              src="/vector-4.svg"
            />
          </div>
          <div className={styles.orb0245}>{oRB0245}</div>
        </div>
        <div className={styles.blazeWrapper}>
          <div className={styles.blaze}>
            {/* Use videoSrc prop if provided, otherwise use etherTransformed */}
            <video className={styles.etherTransformedIcon} autoPlay loop muted>
              <source src={videoSrc || etherTransformed} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className={styles.ponderAcquireWrapper}>
          <div className={styles.ponderAcquire}>
            <div className={styles.coreParent}>
              <div className={styles.core}>CORE</div>
              <div className={styles.predictBattle}>
                <div className={styles.scrollDown}>
                  <div className={styles.fAQSection}>
                    <div className={styles.blaze1}>BLAZE</div>
                    <div className={styles.blaze2}>
                      <img
                        className={styles.riblazeFillIcon}
                        alt=""
                        src="/riblazefill-2.svg"
                      />
                    </div>
                    <div className={styles.whatDealElementals}>
                      <img
                        className={styles.subwaypowerIcon}
                        alt=""
                        src="/subwaypower.svg"
                      />
                      <div className={styles.dualNatureO}>{dualNatureORBs}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.orbInfo}>
                  <div className={styles.buyButton}>
                    <div className={styles.terra}>TERRA</div>
                    <div className={styles.ether}>
                      <img
                        className={styles.gameIconsabstract030}
                        alt=""
                        src="/gameiconsabstract030-1.svg"
                      />
                    </div>
                    <div className={styles.techBackground}>
                      <img
                        className={styles.subwaypowerIcon1}
                        alt=""
                        src="/subwaypower.svg"
                      />
                      <div className={styles.predictionBattle}>
                        {predictionBattle}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.blazeGroup}>
                  <div className={styles.blazeSurge}>
                    <div className={styles.torrent}>TORRENT</div>
                    <img
                      className={styles.gameIconsaquarius}
                      loading="eager"
                      alt=""
                      src="/gameiconsaquarius.svg"
                    />
                    <div className={styles.battleInfo}>
                      <img
                        className={styles.subwaypowerIcon2}
                        alt=""
                        src="/subwaypower.svg"
                      />
                      <div className={styles.orbPulse}>{orbPulse}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.battlePrediction}>
              <div className={styles.bonus}>BONUS</div>
              <div className={styles.frameGroup}>
                <div className={styles.contractAddress}>
                  <div className={styles.howToAcquire}>
                    <div className={styles.aer}>AER</div>
                    <div className={styles.aer1}>
                      <img
                        className={styles.akarIconsair}
                        alt=""
                        src="/akariconsair.svg"
                      />
                    </div>
                    <div className={styles.scrollDown1}>
                      <img
                        className={styles.subwaypowerIcon3}
                        alt=""
                        src="/subwaypower-3.svg"
                      />
                      <div className={styles.fAQ}>{fAQParent}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.elementalScores}>
                  <div className={styles.strategyInfo}>
                    <div className={styles.ether1}>ETHER</div>
                    <img
                      className={styles.gameIconsatomicSlashes}
                      loading="eager"
                      alt=""
                      src="/gameiconsatomicslashes.svg"
                    />
                    <div className={styles.whatIsORB}>
                      <img
                        className={styles.subwaypowerIcon4}
                        alt=""
                        src="/subwaypower-3.svg"
                      />
                      <div className={styles.pondering}>{pondering}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlazeOrb;

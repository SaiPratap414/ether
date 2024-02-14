import { FunctionComponent } from "react";
import styles from "./Gameplay.module.css";

const Gameplay: FunctionComponent = () => {
  return (
    <section className={styles.gameplay}>
      <h1 className={styles.gameplay1}>gameplay</h1>
      <div className={styles.frameParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.terra}>
                <div className={styles.ether}>
                  <img
                    className={styles.gameIconsabstract030}
                    alt=""
                    src="/gameiconsabstract030.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.torrentVectorGroupParent}>
              <img
                className={styles.torrentVectorGroup}
                alt=""
                src="/vector.svg"
              />
              <div className={styles.torrent}>
                <img
                  className={styles.blazeVectorGroup}
                  loading="eager"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
            <div className={styles.buyOrbFrameParent}>
              <img className={styles.buyOrbFrame} alt="" src="/vector.svg" />
              <div className={styles.blaze}>
                <img
                  className={styles.riblazeFillIcon}
                  loading="eager"
                  alt=""
                  src="/riblazefill-1.svg"
                />
              </div>
            </div>
            <div className={styles.subtractFrame}>
              <img
                className={styles.subtractIcon}
                alt=""
                src="/subtract@2x.png"
              />
              <div className={styles.beatsParent}>
                <div className={styles.beats}>Beats</div>
                <img
                  className={styles.bxsupArrowIcon}
                  loading="eager"
                  alt=""
                  src="/bxsuparrow@2x.png"
                />
              </div>
              <img
                className={styles.subtractIcon1}
                loading="eager"
                alt=""
                src="/frame-3@2x.png"
              />
              <img
                className={styles.twoFramesIcon}
                loading="eager"
                alt=""
                src="/frame-17@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.howToPonderContainer}>
          <p className={styles.howToPonder}>
            <b>How to Ponder?</b>
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <ol className={styles.acquireYourOrbTokenBoth}>
            <li className={styles.acquireYourOrbTokenBoth1}>
              <span>
                Acquire your ORB token – both fungible and non-fungible, until
                you decide its fate.
              </span>
            </li>
          </ol>
          <p className={styles.blankLine1}>&nbsp;</p>
          <ol className={styles.mintYourOrbNftAndEnterDu}>
            <li className={styles.mintYourOrbNftAndEnterDu1}>
              <span>
                Mint your Orb NFT and enter Duels to Wager the $ORB against
                other ponderooors!
              </span>
            </li>
          </ol>
          <p className={styles.blankLine2}>
            <span>
              <b>&nbsp;</b>
            </span>
          </p>
          <p className={styles.gameMechanics}>
            <span>
              <b>Game Mechanics</b>
            </span>
          </p>
          <p className={styles.blankLine3}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <ul className={styles.elementalRockPaperScissors}>
            <li className={styles.elementalRockPaperScissors1}>
              <span>
                <span>
                  Elemental rock-paper-scissors mechanic (with trait scores
                  attached to each trait)
                </span>
              </span>
            </li>
          </ul>
          <p className={styles.blankLine4}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <ul className={styles.elementsAreCommonForAllWi}>
            <li className={styles.elementsAreCommonForAllWi1}>
              <span>
                <span>
                  Elements are common for all with randomized trait score making
                  each ORB unique
                </span>
              </span>
            </li>
          </ul>
          <p className={styles.blankLine5}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <ul className={styles.eachOrbNftHasAnAllocation}>
            <li className={styles.eachOrbNftHasAnAllocation1}>
              <span>
                <span>
                  Each Orb NFT has an allocation of points for each elemental
                  trait (Blaze, Terra, Torrent), totaling 100.
                </span>
              </span>
            </li>
          </ul>
          <p className={styles.blankLine6}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <ul className={styles.inTheEventOfATieWinIs}>
            <li className={styles.inTheEventOfATieWinIs1}>
              <span>
                <span>
                  In the event of a tie, win is determined based on trait score
                </span>
              </span>
            </li>
          </ul>
          <p className={styles.blankLine7}>
            <span>
              <b>&nbsp;</b>
            </span>
          </p>
          <ul className={styles.eachMatchAllowsPvpWagering}>
            <li className={styles.eachMatchAllowsPvpWagering1}>
              <span>
                <span>
                  Each match allows PvP wagering decided over best of 5 rounds.
                </span>
              </span>
            </li>
          </ul>
          <p className={styles.blankLine8}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <ul className={styles.theUtilityFor2BonusTraits}>
            <li>
              <span>
                <span>
                  The utility for 2 bonus traits (aer, ether) is a secret for
                  now.
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.everyBattleIsContainer}>
        <p className={styles.everyBattleIs}>
          Every battle is a blend of predicting your opponent's choices and
          making moves based on your ORB's elemental intensity score, adding a
          layer of depth to the game's tactical decision-making.
        </p>
        <p className={styles.blankLine9}>&nbsp;</p>
        <p className={styles.whetherYoureBetting}>
          Whether you’re betting a fragment or a full token, every battle is a
          chance to acquire more $ORB. More orbs means more power, and more
          pondering!"
        </p>
      </div>
    </section>
  );
};

export default Gameplay;

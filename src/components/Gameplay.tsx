import { FunctionComponent, useEffect, useRef } from "react";
import styles from "./Gameplay.module.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { TextPlugin } from "gsap/TextPlugin"; // Import TextPlugin
import styled from "styled-components";
import { Box } from "@mui/material";

gsap.registerPlugin(TextPlugin, ScrollTrigger); // Register TextPlugin

const RulesWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  font-size: var(--font-size-xs);
`;
const Rules = styled.div`
  display: flex;
  flex: 1;
  max-width: 300px;
  gap: 10px;
  // height: 100px;
  border-left: 2px solid #171717;
  padding: 10px;
  font-size: var(--font-size-xs);
`;

const Gameplay: FunctionComponent = () => {

  useEffect(() => {
    gsap.utils.toArray(".animate-text").forEach((text: any) => {
      gsap.from(text, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          toggleActions: "restart none", // Restart the animation every time the element comes into view
        },
      });
    });
  
    gsap.utils.toArray(".animate-text-2").forEach((text: any) => {
      gsap.from(text, {
        opacity: 0,
        x: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          toggleActions: "restart none", // Restart the animation every time the element comes into view
        },
      });
    });
  
    gsap.utils.toArray(".words").forEach((text: any) => {
      gsap.from(text, {
        opacity: 0,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        y: 50,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          toggleActions: "restart none", // Restart the animation every time the element comes into view
        },
      });
    });
  }, []);
  

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
                  <span className={styles.iconText}>TERRA</span>
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
                  <span className={styles.iconText}>TORRENT</span>

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
                  <span className={styles.iconText}>BLAZE</span>

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
          <p className={`${styles.howToPonder} animate-text`}>
            <b>How to Ponder?</b>
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <RulesWrapper>
            <Rules>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  padding: "10px",
                  background: "#171717",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                }}
              >
                01
              </Box>
              <p className="animate-text-2">
              ACQUIRE YOUR ORB TOKEN – BOTH FUNGIBLE AND NON-FUNGIBLE, UNTIL YOU
              DECIDE ITS FATE.
              </p>
            </Rules>

            <Rules>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  padding: "10px",
                  background: "#171717",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                }}
              >
                02
              </Box>
              <p className="animate-text-2">
              MINT YOUR ORB NFT AND ENTER DUELS TO BATTLE THE ORB AGAINST OTHER PONDEROOORS!
              </p>
            </Rules>
          </RulesWrapper>

          <p className={styles.blankLine2}>
            <span>
              <b>&nbsp;</b>
            </span>
          </p>
          <p className={`${styles.gameMechanics}`}>
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
                <span className="words">
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
                <span className="words">
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
                <span className="words">
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
                <span className="words">
                  In the event of a tie, win is determined based on trait score
                </span>
              </span>
            </li>
          </ul>
          <p className={styles.blankLine7}>
            <span className="words">
              <b>&nbsp;</b>
            </span>
          </p>
          <ul className={styles.eachMatchAllowsPvpWagering}>
            <li className={styles.eachMatchAllowsPvpWagering1}>
              <span>
                <span className="words">
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
                <span className="words">
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
        EVERY BATTLE IS A BLEND OF PREDICTING YOUR OPPONENT'S CHOICES AND MAKING MOVES BASED ON YOUR ORB'S ELEMENTAL INTENSITY SCORE, ADDING A LAYER OF DEPTH TO THE GAME'S TACTICAL DECISION-MAKING.
        </p>
        <p className={styles.blankLine9}>&nbsp;</p>
        <p className={styles.whetherYoureBetting}>
        WHETHER YOU’RE BETTING A FRAGMENT OR A FULL TOKEN, EVERY BATTLE IS A CHANCE TO ACQUIRE MORE ORBS. MORE ORBS MEANS MORE POWER, AND MORE PONDERING!"
        </p>
      </div>
    </section>
  );
};

export default Gameplay;

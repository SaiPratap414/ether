import { FunctionComponent, memo, useEffect, useState } from "react";
import styles from "./FrameComponent.module.css"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Divider, Typography } from "@mui/material";
import { FrameMainContainer, Section, SectionWrapper } from "./MobileFrameComponentStyles";
import { HeadText, ImgWrapper, OffWhiteText } from "./FrameStyles";


gsap.registerPlugin(useGSAP,ScrollTrigger);


const MobileFrameComponent: FunctionComponent = memo(() => {


  return (
    <FrameMainContainer>

    <SectionWrapper>
      <div className="panel">
      <Section>
          <OffWhiteText>
              MAR WEEK 3
          </OffWhiteText>
          <HeadText>
            <OffWhiteText>
                PRESALE
            </OffWhiteText>
            <OffWhiteText>
                +IDO
            </OffWhiteText>
          </HeadText>
      </Section>
      </div>

      <div className="panel">
      <Section>
          <OffWhiteText>
              MAR 30
          </OffWhiteText>
          <HeadText>
            <OffWhiteText>
                STEALTH LAUNCH
            </OffWhiteText>
            <OffWhiteText>
                $XYZ ON ETH
            </OffWhiteText>
          </HeadText>
      </Section>
      </div>


      <div className="panel">
      <Section>
          <Typography sx={{
            color: '#83C878',
            fontSize: 'var(--font-size-base-8)',
            fontFamily: 'var(--font-jetbrains-mono)',
          }}>
            ONGOING
          </Typography>
          <Divider sx={{
            width: '30px',
            height: '3px',
            background: '#83C878'
          }} />
            <span>APR WEEK 1</span>
          <HeadText>
            <span>AIRDROP AND</span>
            <span>PARTNERSHIPS</span>
          </HeadText>
          <ImgWrapper>
            <img
              className={styles.rectangleIcon}
              loading="lazy"
              alt=""
              src="/rectangle-14@2x.png"
            />
            <img
              className={styles.frameChild2}
              loading="lazy"
              alt=""
              src="/rectangle-15@2x.png"
            />
          </ImgWrapper>
      </Section>
      </div>


      <div className="panel">
      <Section>
          <Typography sx={{
            color: '#EE8868',
            fontSize: 'var(--font-size-base-8)',
            fontFamily: 'var(--font-jetbrains-mono)',
          }}>
            UPCOMING
          </Typography>
          <Divider sx={{
            width: '30px',
            height: '3px',
            background: '#EE8868'
          }} />
            <span>APR WEEK 1</span>
          <HeadText>
            <span>GAME</span>
            <span>TESTNET</span>
          </HeadText>
      </Section>
      </div>


      <div className="panel">
      <Section>
          <span>
              APR WEEK 2
          </span>
          <HeadText>
            <OffWhiteText>
                NFT ART
            </OffWhiteText>
            <OffWhiteText>
                REVEAL
            </OffWhiteText>
          </HeadText>
      </Section>
      </div>


      <div className="panel">
      <Section>
          <span>
              APR WEEK 3
          </span>
          <HeadText>
            <OffWhiteText>
                GAME
            </OffWhiteText>
            <OffWhiteText>
                MAINNET
            </OffWhiteText>
          </HeadText>
      </Section>
      </div>


      </SectionWrapper>
    </FrameMainContainer>
  )
});

export default MobileFrameComponent;

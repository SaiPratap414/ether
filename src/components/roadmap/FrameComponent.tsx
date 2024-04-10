import { FunctionComponent, memo, useEffect, useState } from "react";
import styles from "./FrameComponent.module.css"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FrameMainContainer, HeadText, ImgWrapper, OffWhiteText, Section, SectionWrapper } from "./FrameStyles";
import { Divider, Typography } from "@mui/material";


gsap.registerPlugin(useGSAP,ScrollTrigger);


const FrameComponent: FunctionComponent = memo(() => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    const roadmapContainer = document.getElementById("roadmap");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 2),
      ease: "none",
      overwrite: "auto",
      scrollTrigger: {
        trigger: roadmapContainer,
        // pin: true,
        scrub: true, // Change scrub value to true
        start: "top top", // Start the animation at the top of the viewport
        end: () => "+=1000", // End the animation when scrolling to the end of the wrapper
      }
    });
  }, [scrollPosition]);


  return (
    <FrameMainContainer className="frameParent">

    <SectionWrapper className="scrollWrapper">
    <div className="panel">
  <Section>
    <Typography sx={{
      color: '#3472BB',
      fontSize: 'var(--font-size-base-8)',
      fontFamily: 'var(--font-jetbrains-mono)',
      marginTop: '-45px'
    }}>
      COMPLETED
    </Typography>
    <Divider sx={{
      width: '30px',
      height: '3px',
      background: '#3472BB'
    }} />
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
    <Typography sx={{
      color: '#3472BB',
      fontSize: 'var(--font-size-base-8)',
      fontFamily: 'var(--font-jetbrains-mono)',
      marginTop: '-45px'
    }}>
      COMPLETED
    </Typography>
    <Divider sx={{
      width: '30px',
      height: '3px',
      background: '#3472BB'
    }} />
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
            marginTop: '-45px'
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
            marginTop: '-45px'
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
      <Typography sx={{
            color: '#EE8868',
            fontSize: 'var(--font-size-base-8)',
            fontFamily: 'var(--font-jetbrains-mono)',
            marginTop: '-45px'
          }}>
            UPCOMING
          </Typography>
          <Divider sx={{
            width: '30px',
            height: '3px',
            background: '#EE8868'
          }} />
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
      <Typography sx={{
            color: '#EE8868',
            fontSize: 'var(--font-size-base-8)',
            fontFamily: 'var(--font-jetbrains-mono)',
            marginTop: '-45px'
          }}>
            UPCOMING
          </Typography>
          <Divider sx={{
            width: '30px',
            height: '3px',
            background: '#EE8868'
          }} />
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

export default FrameComponent;

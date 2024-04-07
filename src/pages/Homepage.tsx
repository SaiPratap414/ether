import React, { FunctionComponent, useEffect, useRef } from "react";
import Video from "../components/Video";
import FrameComponent from "../components/FrameComponent";
import ScrollFrames from "../components/ScrollFrames";
import Gameplay from "../components/Gameplay";
import Orb from "../components/Orb";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import styles from "./DEV.module.css";

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box } from "@mui/material";
import styled from "styled-components";
import FF from "../components/roadmap/FF";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ETHERLOOP = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 20px;
  img {
    height: 80px;
  }
`;

const OrbImage = styled.img`
  height: 120vh;
  height: 180svh;
  position: absolute;
  opacity: 0.1;
  margin-top: -300px;
  z-index: 1;
  
`

interface DEVProps {
  onLoaded?: () => void;
}

const DEV: FunctionComponent<DEVProps> = ({ onLoaded }) => {
  const etherLoopElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const etherLoopElements = Array.from({ length: 8 });

  useEffect(() => {
    if (!etherLoopElementsRef.current.length) return;

    etherLoopElementsRef.current.forEach((element, index) => {
      if (!element) return; // Check if element is null

      gsap.fromTo(
        element,
        {
          x: "100%", // Start from the right
        },
        {
          x: "-100%", // Move to the left
          duration: 2, // Animation duration
          delay: 0.1 * index, // Transition delay based on index
          ease: "power4.out", // Smooth easing
          scrollTrigger: {
            trigger: element,
            // start: "top 80%", // Start animation when ETHERLOOP element is 80% in view
            end: "bottom", // End animation when ETHERLOOP element leaves view
            scrub: true, // Smoothly follow scroll position
          },
        }
      );
    });
  }, [etherLoopElementsRef]);

  useEffect(() => {
    const images = Array.from(document.images);
    const totalImages = images.length;
    let loadedImages = 0;

    const videos = Array.from(document.getElementsByTagName('video'));
    const totalVideos = videos.length;
    let loadedVideos = 0;

    const itemLoaded = () => {
      if (loadedImages + loadedVideos === totalImages + totalVideos) {
        onLoaded?.(); // Call onLoaded if it exists and all items are loaded
      }
    };

    // Load images
    images.forEach((img) => {
      if (img.complete) {
        loadedImages++;
        itemLoaded();
      } else {
        img.addEventListener('load', () => {
          loadedImages++;
          itemLoaded();
        });
        img.addEventListener('error', () => {
          loadedImages++;
          itemLoaded();
        });
      }
    });

    // Load videos
    videos.forEach((video) => {
      if (video.readyState >= 3) { // HAVE_FUTURE_DATA or more
        loadedVideos++;
        itemLoaded();
      } else {
        video.addEventListener('loadedmetadata', () => {
          loadedVideos++;
          itemLoaded();
        });
        video.addEventListener('error', () => {
          loadedVideos++;
          itemLoaded();
        });
      }
    });

    // Immediate invocation if there are no images or videos
    if (totalImages === 0 && totalVideos === 0) {
      onLoaded?.();
    }
  }, [onLoaded]);

  return (
    <div className={styles.dev}>
      <Video />

      {/* <Box
        sx={{
          display: "flex",
          width: "100%",
          boxSizing: "border-box",
          height: "150px",
          textAlign: "center",
          marginTop: "-150px",
          position: "relative",
          zIndex: 1000,
          overflow: "hidden"
        }}
      >
        {etherLoopElements.map((_, index) => (
          <ETHERLOOP
            key={index}
            ref={(element) => (etherLoopElementsRef.current[index] = element)}
          >
            <img src="./logoo.png" />
            <img src="./star-img.png" />
          </ETHERLOOP>
        ))}
      </Box> */}

      <section id="homepage-sec" className={styles.homepage}>
          <OrbImage src="./47a24665e0318a667eacee5805c98c02.png" />
        
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
      <FF />
      <FAQ />
      <Footer />
    </div>
  );
};

export default DEV;

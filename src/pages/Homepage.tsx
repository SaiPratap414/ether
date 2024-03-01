import { FunctionComponent, useEffect } from "react";
import Video from "../components/Video";
import FrameComponent from "../components/FrameComponent";
import ScrollFrames from "../components/ScrollFrames";
import Gameplay from "../components/Gameplay";
import Orb from "../components/Orb";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import styles from "./DEV.module.css";

// Define props interface to include onLoaded
interface DEVProps {
  onLoaded?: () => void; // Optional to avoid breaking changes
}


const DEV: FunctionComponent<DEVProps> = ({ onLoaded }) => {

  useEffect(() => {
    // Convert HTMLCollections to Arrays using Array.from()
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
      <section className={styles.homepage}>
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
      <FAQ />
      <Footer />
    </div>
  );
};

export default DEV;

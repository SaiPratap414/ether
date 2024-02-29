import React, { useState, useEffect } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Define the structure of your subtitles
interface Subtitle {
  start: number;
  end: number;
  text: string;
}

interface FigmaProps {
  onSkip: () => void;
}

const Figma: React.FC<FigmaProps> = ({ onSkip }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  const subtitles: Subtitle[] = [
    { start: 0, end: 2, text: "In the far-flung future," },
    {
      start: 2,
      end: 4,
      text: "where the lines between sorcery and technology blur",
    },
    { start: 5, end: 8, text: "like a meme on a quantum computer screen," },
    {
      start: 9,
      end: 13,
      text: "exists a world both wondrous and slightly absurd.",
    },
    {
      start: 13,
      end: 19,
      text: "Here, in the sprawling expanse of the post-singularity Universe,",
    },
    {
      start: 20,
      end: 29,
      text: "the most esteemed minds aren't technologists – they're Wizards,",
    },
    { start: 30, end: 34, text: "and they have a bit of an orb obsession." },
    {
      start: 35,
      end: 42,
      text: "These Wizards, spend their days (and likely their nights) decrypting the secrets of the universe, pondering one ORB at a time.",
    },
    {
      start: 42,
      end: 47,
      text: "decrypting the secrets of the universe, pondering one ORB at a time",
    },
  ];

  useEffect(() => {
    const video = document.getElementById("bg-video") as HTMLVideoElement;
    const subtitleElement = document.getElementById("subtitle");

    if (!video || !subtitleElement) {
      console.error("Video or subtitle element not found.");
      return;
    }

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const subtitle = subtitles.find(
        (sub) => currentTime >= sub.start && currentTime <= sub.end
      );
      subtitleElement.innerText = subtitle ? subtitle.text : "";
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    // Cleanup function to remove the event listener
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [subtitles]);

  const handleSkip = () => {
    navigate("/home"); // Navigate to the DEV page when skip is clicked
    onSkip();
  };

  return (
    <>
      <div className="background-video-container">
        {!clicked ? (
          <div className="bg-img" onClick={() => setClicked(true)}>
            <img className="logo" src="/logo.png" alt="logo" />

            <motion.div
              className="image-blob"
              animate={{
                y: ["2%", "-2%"], // Moves the image up and down
                scale: [0.96, 1.02], // Scales the image down and up
              }}
              transition={{
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
                scale: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            >
              <img className="image-blob" src="/torrent.gif" alt="blob" />
            </motion.div>
            {/* <img
              className="image-blob"
              src="/blobimage.png"
              alt="blob"
            /> */}

            <motion.div
              initial={{ opacity: 1 }}
              animate={{
                opacity: [
                  1, 0.2, 0.9, 0.2, 1, 0.5, 0.2, 0.8, 0.3, 0.1, 1, 1, 1,
                ],
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <h1 className="future" onClick={() => setClicked(true)}>
                SEE YOUR FUTURE
              </h1>
            </motion.div>
          </div>
        ) : (
          <>
            <video autoPlay loop playsInline id="bg-video">
              <source src="/video.mp4" type="video/mp4" /> // Reference to
              video.mp4 in public folder
            </video>

            <div className="frame-366-4kP">
              <img
                className="image"
                src="/frame.jpg" // Reference to frame.jpg in public folder
                alt="frame"
              />
              <div className="para">
                <div className="subtitle para-text" id="subtitle"></div>
              </div>

              <div className="skipnot" onClick={onSkip}>
                <div className="skip-button">SKIP</div>
                <img
                  className="ri-skip-right-line-r3y"
                  src="/ri-skip-right-line.png" // Reference to ri-skip-right-line.png in public folder
                  alt="skip"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Figma;

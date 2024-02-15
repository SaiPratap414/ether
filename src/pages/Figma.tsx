import React, { useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Figma({ onSkip }: { onSkip: () => void }) {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/dev"); // Navigate to the DEV page when skip is clicked
  };

  return (
    <>
      <div className="background-video-container">
        {!clicked ? (
          <div className="bg-img">
            <img
              className="logo"
              src="/logo.png"
              alt="logo"
            />
            <img
              className="image-blob"
              src="/blobimage.png"
              alt="blob"
            />
            <h1 className="future" onClick={() => setClicked(true)}>
              SEE YOUR FUTURE
            </h1>
          </div>
        ) : (
          <>
            <video autoPlay loop playsInline id="bg-video">
              <source src="/video.mp4" type="video/mp4" /> // Reference to video.mp4 in public folder
            </video>

            <div className="frame-366-4kP">
              <img
                className="image"
                src="/frame.jpg" // Reference to frame.jpg in public folder
                alt="frame"
              />
              <div className="para">
                <p className="para-text">
                  In the far flung future where the line
                  <br />
                  lines between sorcery and technology blur
                </p>
              </div>
              <div className="skip-button" onClick={onSkip}>SKIP</div>
              <img
                className="ri-skip-right-line-r3y"
                src="/ri-skip-right-line.png" // Reference to ri-skip-right-line.png in public folder
                alt="skip"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

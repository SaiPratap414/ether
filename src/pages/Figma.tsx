import React, { useState, useEffect } from 'react';
import './home.css'; // Make sure the path is correct
import { useNavigate } from 'react-router-dom';

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

  // Subtitles array
  const subtitles: Subtitle[] = [
    { start: 0, end: 5, text: 'In the far-flung future,' },
    { start: 5, end: 14, text: 'where the lines between sorcery and technology blur' },
    { start: 14, end: 24, text: 'like a meme on a quantum computer screen,' },
    { start: 24, end: 38, text: 'exists a world both wondrous and slightly absurd.' },
    { start: 38, end: 56, text: 'Here, in the sprawling expanse of the post-singularity Universe,' },
    { start: 56, end: 82, text: "the most esteemed minds aren't technologists – they're Wizards," },
    { start: 82, end: 103, text: 'and they have a bit of an orb obsession.' },
  ];

  useEffect(() => {
    const video = document.getElementById('bg-video') as HTMLVideoElement;
    const subtitleElement = document.getElementById('subtitle');

    if (!video || !subtitleElement) {
      console.error('Video or subtitle element not found.');
      return;
    }

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const subtitle = subtitles.find(sub => currentTime >= sub.start && currentTime <= sub.end);
      subtitleElement.innerText = subtitle ? subtitle.text : '';
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    // Cleanup function to remove the event listener
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [subtitles]); // Dependency array to avoid re-binding

  const handleSkip = () => {
    navigate('/dev'); // Adjust the path as needed
    onSkip(); // Execute additional skip logic if provided
  };

  return (
    <div className="background-video-container">
      {!clicked ? (
        <div className="bg-img" onClick={() => setClicked(true)}>
          <img className="logo" src="/logo.png" alt="logo" />
          <img className="image-blob" src="/blobimage.png" alt="blob" />
          <h1 className="future">ENTER</h1>
        </div>
      ) : (
        <>
          <video autoPlay playsInline  id="bg-video">
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="frame-366-4kP">
          <img
                className="image"
                src="/frame.jpg" // Reference to frame.jpg in public folder
                alt="frame"
              />
            <div className="subtitle" id="subtitle"></div>
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
  );
};

export default Figma;

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DEV from "./pages/Homepage";
import Figma from "./pages/Figma"; // Import the new page component
import LoadingScreen from "./components/LoadingScreen";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate and useLocation
import { MintPage, MintPageSuccess } from "./pages";


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Get the navigation function
  const location = useLocation(); // Get the location object
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Scroll to top whenever pathname changes

  useEffect(() => {
    let title = "";
    let metaDescription = "";
  
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }
  
    if (title) {
      document.title = title;
    }
  
    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      ) as HTMLMetaElement | null; // Type assertion
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  

  const handleSkip = () => {
    setIsLoading(true); // Show loading screen
    navigate("/home");
  };

  const handleLoadingComplete = () => {
    setIsLoading(false); // Hide loading screen
  };

  return (
    <>
      {isLoading && <LoadingScreen />} {/* Conditionally render the LoadingScreen component */}
      <Routes>
        {/* <Route path="/" element={<Figma onSkip={handleSkip} />} /> */}
        <Route path="/" element={<DEV onLoaded={handleLoadingComplete} />} />
        <Route path="/home" element={<DEV onLoaded={handleLoadingComplete} />} /> {/* Pass the handleLoadingComplete function as a prop */}
        <Route path = "/mint" element={<MintPage />} />
        <Route path = "/mint/success" element={<MintPageSuccess />} />
      </Routes>
    </>
  );
}

export default App;

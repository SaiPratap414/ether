import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DEV from "./pages/DEV";
import Figma from "./pages/Figma"; // Import the new page component
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate and useLocation

function App() {
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
    navigate("/dev"); // Navigate to the DEV page when skip is clicked
  };

  return (
    <Routes>
      <Route path="/" element={<Figma onSkip={handleSkip} />} />
      <Route path="/dev" element={<DEV />} />
    </Routes>
  );
}

export default App;

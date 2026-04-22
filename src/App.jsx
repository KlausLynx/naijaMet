import { Routes, Route } from "react-router-dom";
import "../src/index.css"
import AppNav from "./components/layout/Navbar"
import HeroSection from "./pages/HeroSection"
import SectionOne from "./pages/SectionOne";
import SectionTwo from "./pages/SectionTwo";
import SectionThree from "./pages/SectionThree";
import SectionFour from "./pages/SectionFour";
import SectionFive from "./pages/SectionFive";
import { transformData } from "./hooks/transform_data";
import { useState, useEffect } from "react";


function App() {
  const [savedAt, setSavedAt] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { savedAt } = await transformData();
      setSavedAt(savedAt);
    }
    fetchData();
  }, []);
  return (
    <div className="App" 
      style={{
        backgroundColor: "#0D0F0E",
        fontFamily: "'Merriweather'",
        letterSpacing: "1px"
        
      }}
    >
      <AppNav savedAt={savedAt} />  
        <main>
          <HeroSection />
            <Routes>
              <Route path="/lying-averages" element={<SectionOne />} />
              <Route path="/inside-nigeria" element={<SectionTwo />} />
              <Route path="/the-hidden-half" element={<SectionThree />} />
              <Route path="/growth-for-who" element={<SectionFour />} /> 
              <Route path="/measure-what-matters" element={<SectionFive />} />
            </Routes>
        </main>
    </div>
  );
}

export default App;
import {lazy, Suspense, useState, useEffect } from "react";
import HeroSection from "./pages/HeroSection"
import { Routes, Route } from "react-router-dom";
import "../src/index.css"
import AppNav from "./components/layout/Navbar"

const SectionOne = lazy(() => import("./pages/SectionOne"));
const SectionTwo = lazy(() => import("./pages/SectionTwo"));
const SectionThree = lazy(() => import("./pages/SectionThree"));
const SectionFour = lazy(() => import("./pages/SectionFour"));
const SectionFive = lazy(() => import("./pages/SectionFive"));
import { transformData } from "./hooks/transform_data";

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
          <Suspense fallback={<div className="text-center bg-black mt-10"></div>}>
            <Routes>
              <Route path="/lying-averages" element={<SectionOne />} />
              <Route path="/inside-nigeria" element={<SectionTwo />} />
              <Route path="/the-hidden-half" element={<SectionThree />} />
              <Route path="/growth-for-who" element={<SectionFour />} /> 
              <Route path="/measure-what-matters" element={<SectionFive />} />
            </Routes>
          </Suspense>
        </main>
    </div>
  );
}

export default App;
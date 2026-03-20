import { Routes, Route } from "react-router-dom";
import "../src/index.css"
import AppNav from "./components/layout/Navbar"
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App" 
      style={{
        backgroundColor: "#0D0F0E",
        fontFamily: "'Bebas Neue'",
        letterSpacing: "1px"
        
      }}
    >
      <AppNav />  
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
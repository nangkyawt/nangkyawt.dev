
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import BackToTop from "./components/BackToTop";

function App() {
  // Load saved theme from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-[#121212] text-[#F5F1EE]"
          : "min-h-screen bg-[#FDFBF7] text-[#2C2A29]"
      }
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Certificates darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <BackToTop darkMode={darkMode} />
    </div>
  );
}

export default App;

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-[#121212] text-[#F5F1EE]"
          : "min-h-screen bg-[#FDFBF7] text-[#2C2A29]"
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;
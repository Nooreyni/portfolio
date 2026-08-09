import { useState, useEffect } from "react";
import "./App.css";
import content from "./data/content";
import ScrollProgressBar from "./components/ScrollProgressBar";
import CustomCursor from "./components/CustomCursor";
import GridOverlay from "./components/GridOverlay";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Ticker from "./components/Ticker";
import Chapters from "./components/Chapters";
import Expertise from "./components/Expertise";
import CaseStudies from "./components/CaseStudies";
import OtherWork from "./components/OtherWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  const [lang, setLang] = useState("fr");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const t = content[lang];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleLang() {
    setLang((l) => (l === "fr" ? "en" : "fr"));
  }

  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return (
    <div className="App">
      <ScrollProgressBar />
      <CustomCursor />
      <GridOverlay />
      <Nav t={t} onToggleLang={toggleLang} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero t={t} />
        <Manifesto t={t} />
        <Ticker t={t} />
        <Chapters t={t} />
        <Expertise t={t} />
        <CaseStudies t={t} lang={lang} />
        <OtherWork t={t} />
        <Contact t={t} lang={lang} />
      </main>
      <Footer t={t} />
      <BackToTop lang={lang} />
    </div>
  );
}

export default App;

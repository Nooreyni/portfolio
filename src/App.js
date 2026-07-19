import { useState } from "react";
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
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("fr");
  const t = content[lang];

  function toggleLang() {
    setLang((l) => (l === "fr" ? "en" : "fr"));
  }

  return (
    <div className="App">
      <ScrollProgressBar />
      <CustomCursor />
      <GridOverlay />
      <Nav t={t} onToggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <Manifesto t={t} />
        <Ticker t={t} />
        <Chapters t={t} />
        <Expertise t={t} />
        <CaseStudies t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;

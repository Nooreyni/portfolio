import './App.css';
import useReveal from './hooks/useReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useReveal();

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

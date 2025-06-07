import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ExperienceSection from './components/Experience'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;

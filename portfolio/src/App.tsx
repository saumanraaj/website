import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ui/theme-provider';
import { Navigation } from './components/Navigation';
import { Landing } from './sections/Landing';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Achievements } from './sections/Achievements';
import { Technologies } from './sections/Technologies';
import { Contact } from './sections/Contact';
import { BeamsBackground } from './components/BeamsBackground';

const sections = ['Projects', 'Experience', 'Achievements', 'Technologies', 'Contact'];

function App() {
  const [activeSection, setActiveSection] = useState('landing');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.toLowerCase());
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <BeamsBackground />
      <div className="min-h-screen transition-colors duration-300 relative z-10">
        <Navigation
          sections={sections}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        
        <main className="pt-16">
          <Landing />
          <Projects />
          <Experience />
          <Achievements />
          <Technologies />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App; 
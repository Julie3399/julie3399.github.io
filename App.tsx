import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Awards } from './components/Awards';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-main selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
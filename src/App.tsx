import React from 'react';
import Aurora from './components/Aurora';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-gray-900/95 min-h-screen">
      <Aurora colorStops={["#4f46e5", "#7c3aed", "#db2777"]} amplitude={2.0} blend={0.8} />
      <div className="relative z-10">
        <Navbar />
        <Header />
        <Education />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
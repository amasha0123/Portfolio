import React from 'react';
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg';
// eslint-disable-next-line no-unused-vars
import viteLogo from './assets/vite.svg';
import profile from './assets/profile.jpg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      {/* Floating Icons */}
      <div className="floating-icons">
        <span>CODE</span>
        <span>REACT</span>
        <span>VITE</span>
        <span>JS</span>
        <span>CSS</span>
        <span>HTML</span>
        <span>DESIGN</span>
        <span>WEB</span>
        <span>DEV</span>
        <span>TOOLS</span>
      </div>
      {/* Hero Section */}
      <header id="hero" className="hero">
        <img src={profile} alt="Profile" className="profile-img" />
        <h1>Amasha Hansamali</h1>
        <p>Undergraduate | Web Developer</p>
        <div className="logos">
          <img src={reactLogo} alt="React Logo" />
          <img src={viteLogo} alt="Vite Logo" />
        </div>
      </header>

      {/* Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="footer">
        © 2024 Amasha Hansamali
      </footer>
    </div>
  );
}

export default App;




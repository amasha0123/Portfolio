import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'  
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <h1>Amasha Hansamali</h1>
      <p>Undergraduate | Web Developer</p>
      <About />
      <Skills />
      <Contact /> 
    </div>
  );
}

export default App;


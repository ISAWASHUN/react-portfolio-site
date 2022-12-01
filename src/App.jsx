import React from 'react'
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from "./components/Header"
import Hero from './components/Hero';
import Skills from './components/Skills';


function App() {

  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
    )
}

export default App;

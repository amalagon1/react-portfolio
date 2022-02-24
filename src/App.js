import './App.css'
import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <About />
      <Testimonials />
      <Projects />

    </div >
  );
}


export default App;

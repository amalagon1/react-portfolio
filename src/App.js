import './App.css'
import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Testimonials from './components/Testimonials'


function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <About />
      <Testimonials />

    </div >
  );
}

export default App;

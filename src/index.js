import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Projects from './components/Projects';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/testimonials' element={<Testimonials />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Projects' element={<Projects />}></Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);



import React from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Course from './Pages/Course';
import './App.css'
import Notfound from './Pages/Notfound';

const App = () => {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Course/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Notfound/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
import React from 'react';
import ReactDOM from "react-dom/client";
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './component/Home';
import Services from './component/Services';
import About from './component/About';
import Contact from './component/Contact';
import Appointment from './component/Appointment';
import Footer from './component/Footer';
import './App.css'



const App = () => {
    return (
      <>
      <div className='App'>
       <BrowserRouter>
       <Navbar />
        <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about' element={<About />} About />
         <Route path='/services' element={<Services />} Services />
         <Route path='/contact' element={<Contact />} Contact />
         <Route path='/appointment' element={<Appointment />} Appointment />
      </Routes>
      <Footer />
      </BrowserRouter>
      </div>
      </>
    
    )
}
export default App



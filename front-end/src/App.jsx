import React from 'react'
<<<<<<< Updated upstream
import Hero from './Components/Hero-Section/hero'
import Navbar from './Components/Top-Header-Section/navbar/navbar'
import Footer from './Components/Footer/footer'
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Top-Header-Section/navbar/navbar'
import Footer from './Components/Footer/footer'
import Home from './Components/Home/home'
import ContactUs from './Components/Contact-Us/contactus'

>>>>>>> Stashed changes
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

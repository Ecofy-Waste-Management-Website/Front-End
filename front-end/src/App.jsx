import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Top-Header-Section/navbar/navbar'
import Footer from './Components/Footer/footer'
import ServiceHistory from './Components/Screens/ServiceHistory'
import PaymentHistory from './Components/Screens/PaymentHistory'
import Notifications from './Components/Screens/Notifications'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/service-history" element={<ServiceHistory />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

import React from 'react';
import Home from "./pages/Home"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/About Us";
import ContactUs from "./pages/Contact Us";
import Service from "./pages/Service";
import ImageDetail from './pages/ImageDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/image-detail/:id" element={<ImageDetail />} />
          <Route path="/" element={<Navigate to="/home" />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

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
      <Router>
        <Header>
        <div className="container">
              <nav>
                <ul>
                  
                  <li><Link to="Home">Home</Link></li>
                  <li><Link to="About-Us">About us</Link></li>
                  <li><Link to="Contact-Us">Contact us</Link></li>
                  <li><Link to="Service">Service</Link></li>
                </ul>
              </nav>
          </div>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/image-detail/:id" element={<ImageDetail />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import Service from './pages/Service';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="services" element={<Service />} />
        <Route path="a propos" element={<AboutPage />} />
        <Route path="tarifs" element={<PricingPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

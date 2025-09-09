import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <br/>
        <div className="flex-grow">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <Home key={location.pathname} />
            } />
            <Route path="/about" element={
              <About key={location.pathname} />
            } />
            <Route path="/services" element={
              <Services key={location.pathname} />
            } />
            <Route path="/contact" element={
              <Contact key={location.pathname} />
            } />
            <Route path="/login" element={
              <Login key={location.pathname} />
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StayOptions from './components/StayOptions';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <StayOptions />
      <Footer />
    </div>
  );
}

export default App;



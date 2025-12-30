import { useState } from 'react';
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Products from '../Components/Products';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer'


export default function Landing() {
 return (
  <div>
  <Navbar />
      <Hero />
      <div id="products-section">
        <Products />
      </div>
      <div id="about-section">
        <About />
      </div>
      <Contact />
      <Footer />
  </div>
);
}
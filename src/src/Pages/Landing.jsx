import { useState } from 'react';
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Products from '../Components/Products';
import About from '../Components/About';
import Contact from '../Components/Contact';


export default function Landing() {
 return (
  <div>
  <Navbar />
  <Hero />
  <Products />
  <About />
  <Contact />
  </div>
);
}
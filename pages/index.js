import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import Articles from '@/components/Articles/Articles';
import About from '@/components/About/About';
import Subscribe from '@/components/Subscribe/Subscribe';


export default function Homepage() {
  return (
    <>
      <Navbar />
      <Home />
      <Articles/>
      <About />
      <Subscribe/>
      <Footer />
    </>
  );
}

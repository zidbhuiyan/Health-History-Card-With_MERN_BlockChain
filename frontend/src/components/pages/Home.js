import React, { useState} from 'react';
import '../../App.css';
import Footer from '../Footer';
import HeroSection from '../Herosection';
import Navbar from '../Navbar';

function Home(props) {

  return (
    <>
      <Navbar 
      NavPage='Home'/>
      <HeroSection/>
      <Footer/>
    </>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './Herosection.css';

function HeroSection() {
  return (
    <div className='hero-container' id='hero'>
     <img src='https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
      <h1>At Your Service</h1>
      <p>Click on Get Started to Login</p>
      <div className='hero-btns'>
        <Link to ='/login'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
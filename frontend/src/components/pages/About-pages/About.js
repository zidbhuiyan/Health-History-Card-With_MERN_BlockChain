import React from 'react';
import '../../../App.css';
import About_card from '../../About-card';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './About.css'


function About() {
  return (
    <>
    <Navbar
      NavPage = 'other'/>
      <div class="bga">
      <section class="about" id="about">
        <h1 class="heading">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
          <span>&nbsp;</span>
          <span>U</span>
          <span>s</span>
        </h1>

        
      <div className='about_cards__container'>
        <div className='about_cards__wrapper'>
          <ul className='about_cards__items'>
  
            <About_card
              src='images/samiha.jpg'
              name='Samiha Fairooz'
              
            />
             <About_card
              src='images/zihad.jpg'
              name='Zihadul Islam'
            
            />

            <About_card
              src='images/miti.jpeg'
              name='Shakila Yeasmin Miti'
              
            />
          </ul>
        </div>
      </div>
    
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default About;
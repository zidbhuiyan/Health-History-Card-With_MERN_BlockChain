import React from 'react';
import '../App.js';
import '../components/pages/About-pages/About.css'


function About_card(props) {
  return (
    <>
     
     <li className='about_cards__item'>
         <div className='img_cont'>
         <div className='about_cards__item__link'>
      <img
              className='about_cards__item__img'
              alt='Image'
              src={props.src}
            />
            <div className='about_cards__item__info'>
          </div>
      </div>   
            <div className='about_name'>
                <h2>
                {props.name}
                </h2>
            </div> 
            <div className='about_info'>
                <p>
                Department of <br/> Electrical and Computer Engineering (ECE)
                <br/> North South University
                </p>
            </div>
            
            <div className='about_icon'>
            <p>Conatct:</p>
             <span><i class='fab fa-facebook-f' /></span>
             <span> <i class='fab fa-instagram' /></span>
             <span><i class='fab fa-twitter' /></span>
            </div> 
             </div>
     
    </li>
       
    </>
  );
}

export default About_card;
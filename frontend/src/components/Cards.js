import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Login Here!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrjug5wizRLZJT1t4LMfmsYYGOliFcf60IPhwAIWZV6GAbUxxxeA61nJGDaZwl9YWIc0&usqp=CAU'
              text='Login as Client'
              path='/login_form_client'
            />
            <CardItem
              src='https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg'
              text='Login as Doctor'
              path='/login_form_doctor'
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='https://scx2.b-cdn.net/gfx/news/2020/studyfindsme.jpg'
              text='Login as Report staff'
              path='/login_form_report_staff'
            />
            <CardItem
              src='https://ichef.bbci.co.uk/news/976/cpsprodpb/CAF2/production/_122945915_gettyimages-1291715271.jpg'
              text='Login as Vaccine staff'
              path='/login_form_vaccine_staff'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

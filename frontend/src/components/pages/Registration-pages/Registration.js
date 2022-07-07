import React from 'react';
import '../../../App';
import CardItem from '../../CardItem';
import Footer from '../../Footer';
import Navbar from '../../Navbar';


function Registration() {
  return (
    <>
      <Navbar
      NavPage='registration'/>
      <div className='cards'>
      <h1>Register Here!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.sstgroup-inc.com/wp-content/uploads/2016/09/AdobeStock_59162630-1170x780.jpeg'
              text='Register as Client'
              path='/Register_form'
            />
            <CardItem
              src='https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg'
              text='Register as Doctor'
              path='/Register_form_doctor'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://media.istockphoto.com/photos/doctor-clicking-on-a-laptop-before-her-picture-id1292777576?b=1&k=20&m=1292777576&s=170667a&w=0&h=Tg1ASn3aw19DgyqjGaaWqJmPeXiDRaU1LW8c83Y5tbw='
              text='Register as Report staff'
              path='/Register_form_report_staff'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3onn4JDDWkIph0QkKfRcm1CC9nZiHNDJ_YM-pAoQzaBNW72op7cj2S1zTRPtbHMlqI8Q&usqp=CAU'
              text='Register as Vaccine staff'
              path='/Register_form_vaccine_staff'
            />
          </ul>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default Registration;
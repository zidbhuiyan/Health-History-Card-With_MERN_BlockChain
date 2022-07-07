import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import Vaccine_Staff_Navbar from './Vaccine_Staff_Navbar';

function Vaccine_Staff_Profile(props) {

    return (
      <>
      <div class="bgvsp">
        <Vaccine_Staff_Navbar/>

<div class="container">
  
    <div class="title">Vaccine Staff Profile</div>
    <div class="content">
    <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" value = {props.user.firstname} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" value = {props.user.lastname} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Vaccine Staff Register ID</span>
            <input type="text" value = {props.user.Vregid} disabled/>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" value = {props.user.nid} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(YYYY/MM/DD)</span>
            <input type="text" value = {props.user.dateofbirth} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" value = {props.user.phonenumber} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Hospital Name</span>
            <input type="text" value = {props.user.hospitalname} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <input type="text" value = {props.user.gender} disabled/>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>
        
        <Footer/>
      </>
    );
  }
  
  export default Vaccine_Staff_Profile;
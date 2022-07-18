import React from 'react';
import '../../../App.css';
import './Profile.css'
import Footer from '../../Footer';
import Info_Navbar from '../../Info_Navbar';
import { useNavigate } from "react-router-dom";
import Navbar from '../../Navbar'; 


const Profile = (props) => {

  const navigate = useNavigate();

  function editbtnClick(event) {
    event.preventDefault();
    navigate("/edit_profile");
  }

    return (
      <>
       <div class ="bgpc">
        <Navbar
        NavPage='profile'
        page = 'profile'/>

<div class="container">
    <div class="title">Profile  </div>
    
    <div class="content">
      <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" name="firstname" value = {props.user.firstname}  disabled/>
          </div>
          <div class="input-box">
            <span class="details">Last Name</span>
            <input type="text" name="lastname" value = {props.user.lastname}   disabled/>
          </div>
          <div class="input-box">
            <span class="details">Health ID</span>
            <input type="text" name="hid" value = {props.user.hid}  disabled/>
          </div>
          <div class="input-box">
            <span class="details">Birth ID</span>
            <input type="text" name="birthid" value = {props.user.birthid}  disabled/>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" name="nid" value = {props.user.nid}  disabled/>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(YYYY/MM/DD)</span>
            <input type="text" name="dateofbirth" value = {props.user.dateofbirth}   disabled/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" name="phonenumber" value = {props.user.phonenumber} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" name="email" value = {props.user.email} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <input type="text" name="gender" value = {props.user.gender} disabled/>
          </div>

          <div class="input-box">
            <span class="details">Blood Group</span>
            <input type="text" name="bloodgroup" value = {props.user.bloodgroup} disabled/>
          </div>
        </div>
      </form>
      <div class="edit"><button class="cng" onClick={editbtnClick}>Edit Profile</button></div>
      <div class="title">Medical Information</div>
      <Info_Navbar
      userCat = "client"
      user = {props.user}/>  
    </div>
  </div>
 
        
        <Footer/>
        </div>
      </>
    );

  }
  
  export default Profile;
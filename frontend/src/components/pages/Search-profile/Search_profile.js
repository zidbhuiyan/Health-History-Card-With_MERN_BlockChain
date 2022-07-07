import React from 'react';
import '../../../App.css';
import './Search_profile.css'
import Footer from '../../Footer';
import Doctor_Navbar from '../Doctor-pages/Doctor_Navbar'
import Info_Navbar from '../../Info_Navbar';
import {useLocation} from 'react-router-dom';
import Report_Staff_Navbar from '../Report-Staff-pages/Report_Staff_Navbar';
import Vaccine_Staff_Navbar from '../Vaccine-Staff-pages/Vaccine_Staff_Navbar';

function Search_profile (props){

    const location = useLocation();

    console.log(location.state.user);
    console.log(location.state.userCat);


    if(location.state.userCat === "doctor"){
        return (
            <>
            <div class = "bgspc">
            <Doctor_Navbar
            user = {location.state.userCatInfo}/>

<div class="container">
  
  <div class="title">Client Profile</div>
  <div class="content">
    <form>
      <div class="user-details">
        <div class="input-box">
          <span class="details">First Name</span>
          <input type="text" name="firstname" value = {location.state.user.firstname} disabled/>
        </div>
        <div class="input-box">
          <span class="details">Last name</span>
          <input type="text" name="lastname" value = {location.state.user.lastname}  disabled/>
        </div>
        <div class="input-box">
          <span class="details">Health ID</span>
          <input type="text" name="hid" value = {location.state.user.hid}  disabled/>
        </div>
    
        <div class="input-box">
          <span class="details">Date of Birth(YYYY/MM/DD)</span>
          <input type="text" name="dateofbirth" value = {location.state.user.dateofbirth}  disabled/>
        </div>
        <div class="input-box">
          <span class="details">Phone Number</span>
          <input type="text" name="phonenumber" value = {location.state.user.phonenumber} disabled/>
        </div>
        
        <div class="input-box">
          <span class="details">Gender</span>
          <input type="text" name="gender" value = {location.state.user.gender} disabled/>
        </div>
      </div>
    </form>
    <div class="title">Medical Information</div>
    <Info_Navbar
    userCat = "doctor"
    user = {location.state.user}/>  
  </div>
</div>



              <Footer/>
            </div>

            Doctor
            
            </>
          );
    }

    if(location.state.userCat === "reportStaff"){
        return (
            <>
            <div class = "bgspc">
                <Report_Staff_Navbar
                 user = {location.state.userCatInfo}/>

<div class="container">
  
  <div class="title">Client Profile</div>
  <div class="content">
    <form>
      <div class="user-details">
        <div class="input-box">
          <span class="details">First Name</span>
          <input type="text" name="firstname" value = {location.state.user.firstname} disabled/>
        </div>
        <div class="input-box">
          <span class="details">Last name</span>
          <input type="text" name="lastname" value = {location.state.user.lastname}  disabled/>
        </div>
        <div class="input-box">
          <span class="details">Health ID</span>
          <input type="text" name="hid" value = {location.state.user.hid}  disabled/>
        </div>
    
        <div class="input-box">
          <span class="details">Date of Birth(YYYY/MM/DD)</span>
          <input type="text" name="dateofbirth" value = {location.state.user.dateofbirth}  disabled/>
        </div>
        <div class="input-box">
          <span class="details">Phone Number</span>
          <input type="text" name="phonenumber" value = {location.state.user.phonenumber} disabled/>
        </div>
        
        <div class="input-box">
          <span class="details">Gender</span>
          <input type="text" name="gender" value = {location.state.user.gender} disabled/>
        </div>
      </div>
    </form>
    <div class="title">Medical Information</div>
    <Info_Navbar
    userCat = "reportStaff"/>  
  </div>
</div>
                


                <Footer/>
            </div>

            Report Staff
            
            </>
          );
    }

    if(location.state.userCat === "vaccineStaff"){
        return (
            <>
           <div class = "bgspc">
             <Vaccine_Staff_Navbar
             user = {location.state.userCatInfo}/>


<div class="container">
  
  <div class="title">Client Profile</div>
  <div class="content">
    <form>
      <div class="user-details">
        <div class="input-box">
          <span class="details">First Name</span>
          <input type="text" name="firstname" value = {location.state.user.firstname} disabled/>
        </div>
        <div class="input-box">
          <span class="details">Last name</span>
          <input type="text" name="lastname" value = {location.state.user.lastname}  disabled/>
        </div>
        <div class="input-box">
          <span class="details">Health ID</span>
          <input type="text" name="hid" value = {location.state.user.hid}  disabled/>
        </div>
    
        <div class="input-box">
          <span class="details">Date of Birth(YYYY/MM/DD)</span>
          <input type="text" name="dateofbirth" value = {location.state.user.dateofbirth}  disabled/>
        </div>
        <div class="input-box">
          <span class="details">Phone Number</span>
          <input type="text" name="phonenumber" value = {location.state.user.phonenumber} disabled/>
        </div>
        
        <div class="input-box">
          <span class="details">Gender</span>
          <input type="text" name="gender" value = {location.state.user.gender} disabled/>
        </div>
      </div>
    </form>
    <div class="title">Medical Information</div>
    <Info_Navbar
    userCat = "vaccineStaff"/>  
  </div>
</div>

              <Footer/>
            </div> 

            Vaccine Staff
            
            </>
          );
    }

    
    
    
    
    }
  
  export default Search_profile;
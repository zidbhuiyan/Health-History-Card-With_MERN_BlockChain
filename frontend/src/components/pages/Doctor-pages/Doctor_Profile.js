import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import Doctor_Navbar from './Doctor_Navbar';

function Doctor_Profile(props) {

  console.log(props.user);

    return (
      <>

<div className='bgdp'>

        <Doctor_Navbar/>

<div class="container">
  
    <div class="title">Doctor Profile</div>
    <div class="content">
    <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" value={props.user.Dfirstname}  disabled/>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" value={props.user.Dlastname}  disabled/>
          </div>
          <div class="input-box">
            <span class="details">Doctor Register ID</span>
            <input type="text" value={props.user.Docregid}  disabled/>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" value={props.user.Dnid} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(YYYY/MM/DD)</span>
            <input type="text" value={props.user.Ddateofbirth}  disabled/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" value={props.user.Dphonenumber} disabled/>
          </div>

          <div class="input-box">
            <span class="details">Hospital Name</span>
            <input type="text" value={props.user.hospitalname} disabled/>
          </div>
         
          <div class="input-box">
            <span class="details">Gender</span>
            <input type="text" value={props.user.Dgender}  disabled/>
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
  
  export default Doctor_Profile;
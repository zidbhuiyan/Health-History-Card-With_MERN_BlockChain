import React, { useState, useEffect } from "react";
import "../../../App.css";
import "./Profile.css";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";

const Edit_Profile = (props) => {
  const navigate = useNavigate();

  const [numberShow, setNumberShow] = useState(false);
  const [emailShow, setEmailShow] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);

  const [phonenumber, setPhonenumber] = useState({})
  const [email, setEmail] = useState({})
  const [password, setPassword] = useState({})

  const handleEmailChange = e =>{
    const {name, value} = e.target
    setEmail({
      ...email,
      [name]: value 
    })   
  }

  const handlePhoneChange = e =>{
    const {name, value} = e.target
    setPhonenumber({
      ...phonenumber,
      [name]: value 
    })   
  }

  const handlePasswordChange = e =>{
    const {name, value} = e.target
    setPassword({
      ...password,
      [name]: value 
    })   
  }

  function updateEmailbtn(event){
    event.preventDefault();
    console.log(email);
  }

  function updatePhonebtn(event){
    event.preventDefault();
    console.log(phonenumber);
  }

  function updatePasswordbtn(event){
    event.preventDefault();
    console.log(password);
  }


  function phoneShowbtn(event) {
    event.preventDefault();

    console.log("phone");
    setNumberShow(true);
    setEmailShow(false);
    setPasswordShow(false);
  }

  function emailShowbtn(event) {
    event.preventDefault();

    console.log("email");
    setNumberShow(false);
    setEmailShow(true);
    setPasswordShow(false);
  }

  function passShowbtn(event) {
    event.preventDefault();

    console.log("pass");
    setNumberShow(false);
    setEmailShow(false);
    setPasswordShow(true);
  }

  return (
    <>
      <div class="bgpc">
        <Navbar NavPage="profile" page="profile" />

        <div class="container">
          <div class="title">Edit Profile</div>

          <div class="content">
            <div class="editpro">
              <button onClick={phoneShowbtn} class="editbtnp">
                Change Phone number
              </button>
              {numberShow ? (
                <div>
                  <form>
                    <div class="phone-input-box">
                      <span class="details">New Phone Number</span>
                      <input type="text" name="phonenumber" value={phonenumber.phonenumber}  placeholder="Enter Phone Number" id="phonenumber" onChange={ handlePhoneChange } required />
                    </div>
                    <div>
                      <button onClick={updatePhonebtn} class="login">Update</button>
                    </div>
                  </form>
                </div>
              ) : null}
            </div>
            <div class="editpro">
              <button onClick={emailShowbtn} class="editbtnp">
                Change Email
              </button>
              {emailShow ? (
                <div>
                  <form>
                    <div class="phone-input-box">
                      <span class="details">New Email</span>
                      <input type="text" name="email" value={email.email} placeholder="Enter Email" id="email" onChange={ handleEmailChange } required />
                    </div>
                    <div>
                      <button onClick={updateEmailbtn} class="login">Update</button>
                    </div>
                  </form>
                </div>
              ) : null}
            </div>
            <div class="editpro">
              <button onClick={passShowbtn} class="editbtnp">
                Change Password
              </button>
              {passwordShow ? (
                <div>
                  <form>
                    <div class="phone-input-box">
                      <span class="details">New Password</span>
                      <input type="password" name="password" value={password.password} placeholder="Enter password" id="password" onChange={ handlePasswordChange } required/>
                    </div>
                    <div>
                      <button onClick={updatePasswordbtn} class="login">Update</button>
                    </div>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Edit_Profile;

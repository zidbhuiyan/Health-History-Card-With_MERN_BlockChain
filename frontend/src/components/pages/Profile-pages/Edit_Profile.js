import React, { useState, useEffect } from "react";
import "../../../App.css";
import "./Profile.css";
import Footer from "../../Footer";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import swal from 'sweetalert';

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
    
    const updateEmail ={
      hid: props.user.hid,
      email: email.email,
    }

    console.log(updateEmail);

    var result = "";

    if(email.email){
      axios.post('http://localhost:3001/updateEmail', updateEmail).then(res=>{
        console.log(res.data.user);
        console.log(res.data.message);
  
        result = (res.data.message)
        props.updateUser(res.data.user)
  
        if(result == "updateEmailDone"){
          swal({
            title: "Email updated",
            text: "Please, check your new email",
            icon: "success",
            button: "Okay",
          }).then((done) => {
            if (done) {
              navigate("/profile");
            }
          });
        }
       
      })
    }  

  }

  function updatePhonebtn(event){
    event.preventDefault();

    const updatePhoneNumber ={
      hid: props.user.hid,
      phonenumber: phonenumber.phonenumber,
    }

    console.log(updatePhoneNumber);

    var result = "";

    if(phonenumber.phonenumber){

      axios.post('http://localhost:3001/updatePhoneNumber', updatePhoneNumber).then(res=>{
        console.log(res.data.user);
        console.log(res.data.message);
  
        result = (res.data.message)
        props.updateUser(res.data.user)
  
        if(result == "updatePhoneDone"){
          swal({
            title: "Phone number updated",
            text: "Please, check your new number",
            icon: "success",
            button: "Okay",
          }).then((done) => {
            if (done) {
              navigate("/profile");
            }
          });
        }
       
      })

    }
  }

  function updatePasswordbtn(event){
    event.preventDefault();
    const updatePassword ={
      hid: props.user.hid,
      password: password.password,
      newpassword: password.newpassword,
    }
   
    var result = "";

    if(password.password && password.newpassword && password.confirmpassword){

      if(password.newpassword.length > 6){
        
        if(password.newpassword === password.confirmpassword){

        axios.post('http://localhost:3001/updatePassword', updatePassword).then(res=>{
          console.log(res.data.message);
    
          result = (res.data.message)
    
          if(result == "passwordisChanged"){
            swal({
              title: "Password is changed",
              icon: "success",
              button: "Okay",
            }).then((done) => {
              if (done) {
                navigate("/profile");
              }
            });
          }

          else if(result == "passwordisIncorrect"){
            swal({
              title: "Password is Incorrect",
              icon: "warning",
              button: "Okay",
            })
          }
         
        })
          
        }
        else{
          swal({
            title: "Confirm password doesn't match",
            icon: "warning",
            button: "Okay",
          })
        }

      }
      else{
        swal({
          title: "At least 6 characters required for password!",
          icon: "warning",
          button: "Okay",
        })
      }

    }
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
                      <span class="details">Password</span>
                      <input type="password" name="password" value={password.password} placeholder="Enter password" id="password" onChange={ handlePasswordChange } required/>
                    </div>
                    <div class="phone-input-box">
                      <span class="details">New Password</span>
                      <input type="password" name="newpassword" value={password.newpassword} placeholder="Enter new password" id="newpassword" onChange={ handlePasswordChange } required/>
                    </div>

                    <div class="phone-input-box">
                      <span class="details">Confirm New Password</span>
                      <input type="password" name="confirmpassword" value={password.confirmpassword} placeholder="Enter new password" id="confirmpassword" onChange={ handlePasswordChange } required/>
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

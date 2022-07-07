import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../../../App';
import Footer from '../../Footer';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../Navbar';
import './Registration-Form.css';
import swal from 'sweetalert';



function Registration_Form_Vaccine_Staff() {
  
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    Vregid: '',
    nid: '',
    dateofbirth: '',
    phonenumber: '',
    hospitalname: '',
    gender: '',
    password: '',
    confirmpassword: '',
    })

  const [formErrors , setFormErrors] =useState({});
  const [isSubmit , setIsSubmit] =useState(false);

  function handleChange (e) {
    const {name, value} = e.target;
    
    setUser(prevUser => {
      return{
      ...prevUser,
      [name]: value 
    }
    })
    
  }

  function handleClick(event) {
    event.preventDefault();

     setFormErrors(validate(user));

     setIsSubmit(true);

  }

  let navigate = useNavigate();

  useEffect(()=> {
    
    if(Object.keys(formErrors).length === 0 && isSubmit){
      const newVaccinestaff = {
        firstname: user.firstname,
        lastname: user.lastname,
        Vregid: user.Vregid,
        nid: user.nid,
        dateofbirth: user.dateofbirth,
        phonenumber: user.phonenumber,
        hospitalname: user.hospitalname,
        gender: user.gender,
        password: user.password,
        confirmpassword: user.confirmpassword,
      }
    
      if(user.firstname && user.lastname && user.Vregid && user.nid && user.dateofbirth && user.phonenumber && user.hospitalname && user.gender && user.password && user.confirmpassword){
        
        swal({
          title: "Registration Done!",
          text: "Now, Please login!",
          icon: "success",
          button: "Okay",
        }).then((done) => {
          if (done) {
            
            navigate("/login_form_vaccine_staff");
          }
        });

        axios.post('http://localhost:3001/create4', newVaccinestaff)
        .then( res => console.log(res))
      }
   
  
    }
 },[formErrors])

 const validate = (values) =>{

  const errors = {};

  var nameRegex = /^[a-zA-Z ]{2,30}$/;
  var numReg = /^\d+$/;
  var phoneReg = /^(?:\+88|88)?(01[3-9]\d{8})$/;
  var now = new Date();

  if(!values.firstname){
    errors.firstname = "* First name is required!";
  }
  else if(!nameRegex.test(values.firstname)){
    errors.firstname = "* First name is not valid";
  }

  if(!values.lastname){
    errors.lastname = "* Last name is required!";
  }
  else if(!nameRegex.test(values.lastname)){
    errors.lastname = "* Last name is not valid";
  }

  if(!values.Vregid){
    errors.Vregid = "* Register ID is required!";
  }
  else if(!numReg.test(values.Vregid)){
    errors.Vregid = "* Invalid Register ID";
  }
  else if(values.Vregid.length != 12){
    errors.Vregid = "* Register ID must have 12 digit";
  }

  if(!values.nid){
    errors.nid = "* National ID is required!";
  }
  else if(!numReg.test(values.nid)){
    errors.nid = "* Invalid National ID";
  }

  else if(values.nid.length != 10){
    errors.nid = "* NID must have 10 digit";
  }

  if(!values.phonenumber){
    errors.phonenumber = "* Phone Number is required!";
  }
  else if(!phoneReg.test(values.phonenumber)){
    errors.phonenumber = "* Invalide phone number";
  }

  if(!values.dateofbirth){
    errors.dateofbirth = "* Date of birth is required!";
  }

  if(!values.hospitalname){
    errors.hospitalname = "* Hospital name is required!";
  }

  if(!values.gender){
    errors.gender= "* Gender is required!";
  }
  
  if(!values.password){
    errors.password= "* Password is required!";
  }
  else if(values.password.length < 6){
    errors.password= "* At least 6 characters required for password!";
  }

  if(!values.confirmpassword){
    errors.confirmpassword= "* Password is required!";
  }
  else if(values.password != values.confirmpassword){
    errors.confirmpassword= "* Password does not match!";
  }


 return errors;
}


  return (
    <>
    <div className='bgg'>
    <Navbar
      NavPage="other"/>


<div class="container">
    <div class="title">Registar As Vaccine Staff</div>
    <div class="content">
      <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name </span>
            <input type="text" name="firstname" value={user.firstname} placeholder="Enter First name" id="firstname" onChange={ handleChange } autoComplete='off' required/>
            <p class = "error">{formErrors.firstname}</p>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" name="lastname" value={user.lastname}  placeholder="Enter Last name" id="lastname" onChange={ handleChange } required/>
            <p class = "error">{formErrors.lastname}</p>
          </div>
          <div class="input-box">
            <span class="details">Vaccine Staff Register ID</span>
            <input type="text" name="Vregid" value={user.Vregid} placeholder="Enter Register ID" id="Vregid" onChange={ handleChange }autoComplete='off' required/>
            <p class = "error">{formErrors.Vregid}</p>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" name="nid" value={user.nid}  placeholder="Enter NID" id="nid" onChange={ handleChange } autoComplete='off' required/>
            <p class = "error">{formErrors.nid}</p>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(MM/DD/YYYY)</span>
            <input type="date" name="dateofbirth" value={user.dateofbirth}  placeholder="Enter Date of Birth" id="dateofbirth" onChange={ handleChange } required/>
            <p class = "error">{formErrors.dateofbirth}</p>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" name="phonenumber" value={user.phonenumber}  placeholder="Enter Phone number" id="phonenumber" onChange={ handleChange } autoComplete='off' required/>
            <p class = "error">{formErrors.phonenumber}</p>
          </div>
          <div class="input-box">
            <span class="details">Hospital Name</span>
            <input type="text" name="hospitalname" value={user.hospitalname} placeholder="Enter hospital name" id= "hospitalname" autoComplete='off' onChange={ handleChange } required/>
            <p class = "error">{formErrors.hospitalname}</p>
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <select name="gender" value={user.gender} id="gender" onChange={ handleChange }>
            <option value="" disabled selected>Select Gender</option>
	          <option value="male">Male</option>
	          <option value="female">Female</option>
          	<option value="other">Prefer not to say</option>
            </select>
            <p class = "error">{formErrors.gender}</p>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" name="password" value={user.password} placeholder="Enter password" id="password" onChange={ handleChange } required/>
            <p class = "error">{formErrors.password}</p>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" name="confirmpassword" value={user.confirmpassword} placeholder="Confirm password" id="confirmpassword" onChange={ handleChange } required/>
            <p class = "error">{formErrors.confirmpassword}</p>
          </div>
        </div>
        
        <div class="button">
        <input onClick={handleClick} type="submit" value="Register" id="submitBtn"/>
        </div>
      </form>
    </div>
  </div>


      <Footer/>
      </div>
    </>
  );
}

export default Registration_Form_Vaccine_Staff;

import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../../../App';
import Footer from '../../Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';
import './Registration-Form.css';
import swal from 'sweetalert';


function Registration_Form_Doctor() {
  
  const [user, setUser] = useState({
    Dfirstname: '',
    Dlastname: '',
    Docregid: '',
    Dnid: '',
    Ddateofbirth: '',
    Dphonenumber: '',
    hospitalname: '',
    Dgender: '',
    Dpassword: '',
    Dconfirmpassword: '',
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
      
      const newDoctor = {
        Dfirstname: user.Dfirstname,
        Dlastname: user.Dlastname,
        Docregid: user.Docregid,
        Dnid: user.Dnid,
        Ddateofbirth: user.Ddateofbirth,
        Dphonenumber: user.Dphonenumber,
        hospitalname: user.hospitalname,
        Dgender: user.Dgender,
        Dpassword: user.Dpassword,
        Dconfirmpassword: user.Dconfirmpassword,
        }
    
        if(user.Dfirstname && user.Dlastname && user.Docregid && user.Dnid && user.Ddateofbirth && user.Dphonenumber && user.hospitalname && user.Dgender && user.Dpassword && user.Dconfirmpassword ){
          swal({
            title: "Registration Done!",
            text: "Now, Please login!",
            icon: "success",
            button: "Okay",
          }).then((done) => {
            if (done) {
              
              navigate("/login_form_doctor");
            }
          });
          axios.post('http://localhost:3001/createDoc', newDoctor)
          .then( res => console.log(res))
        }
  
    }
 },[formErrors])

 const validate = (values) =>{

  const errors = {};

  var nameRegex = /^[a-zA-Z ]{2,30}$/;
  var numReg = /^\d+$/;
  var phoneReg = /^(?:\+88|88)?(01[3-9]\d{8})$/;

  if(!values.Dfirstname){
    errors.firstname = "* First name is required!";
  }
  else if(!nameRegex.test(values.Dfirstname)){
    errors.firstname = "* First name is not valid";
  }

  if(!values.Dlastname){
    errors.lastname = "* Last name is required!";
  }
  else if(!nameRegex.test(values.Dlastname)){
    errors.lastname = "* Last name is not valid";
  }

  if(!values.Docregid){
    errors.regid = "* Register ID is required!";
  }
  else if(!numReg.test(values.Docregid)){
    errors.regid = "* Invalid Register ID";
  }
  else if(values.Docregid.length != 12){
    errors.regid = "* Register ID must have 12 digit";
  }

  if(!values.Dnid){
    errors.nid = "* National ID is required!";
  }
  else if(!numReg.test(values.Dnid)){
    errors.nid = "* Invalid National ID";
  }

  else if(values.Dnid.length != 10){
    errors.nid = "* NID must have 10 digit";
  }

  if(!values.Dphonenumber){
    errors.phonenumber = "* Phone Number is required!";
  }
  else if(!phoneReg.test(values.Dphonenumber)){
    errors.phonenumber = "* Invalide phone number";
  }

  if(!values.Ddateofbirth){
    errors.dateofbirth = "* Date of birth is required!";
  }

  if(!values.hospitalname){
    errors.hospitalname = "* Hospital name is required!";
  }

  if(!values.Dgender){
    errors.gender= "* Gender is required!";
  }
  
  if(!values.Dpassword){
    errors.password= "* Password is required!";
  }
  else if(values.Dpassword.length < 6){
    errors.password= "* At least 6 characters required for password!";
  }

  if(!values.Dconfirmpassword){
    errors.confirmpassword= "* Password is required!";
  }
  else if(values.Dpassword != values.Dconfirmpassword){
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
    <div class="title">Registar As Doctor</div>
    <div class="content">
      <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" name="Dfirstname" value={user.Dfirstname} placeholder="Enter First name" id="Dfirstname" onChange={ handleChange } required/>
            <p class = "error">{formErrors.firstname}</p>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" name="Dlastname" value={user.Dlastname}  placeholder="Enter Last name" id="Dlastname" onChange={ handleChange } required/>
            <p class = "error">{formErrors.lastname}</p>
          </div>
          <div class="input-box">
            <span class="details">Doctor Register ID</span>
            <input type="text" name="Docregid" value={user.Docregid} placeholder="Enter Register ID" id="Docregid" onChange={ handleChange } required/>
            <p class = "error">{formErrors.regid}</p>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" name="Dnid" value={user.Dnid}  placeholder="Enter NID" id="Dnid" onChange={ handleChange } required/>
            <p class = "error">{formErrors.nid}</p>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(MM/DD/YYYY)</span>
            <input type="date" name="Ddateofbirth" value={user.Ddateofbirth}  placeholder="Enter Date of Birth" id="Ddateofbirth" onChange={ handleChange } required/>
            <p class = "error">{formErrors.dateofbirth}</p>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" name="Dphonenumber" value={user.Dphonenumber}  placeholder="Enter Phone Number" id="Dphonenumber" onChange={ handleChange } required/>
            <p class = "error">{formErrors.phonenumber}</p>
          </div>
          <div class="input-box">
            <span class="details">Hospital Name</span>
            <input type="text" name="hospitalname" value={user.hospitalname} placeholder="Enter hospital name" id="hospitalname" onChange={ handleChange } required/>
            <p class = "error">{formErrors.hospitalname}</p>
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <select name="Dgender" value={user.Dgender} id="Dgender" onChange={ handleChange }>
            <option value="" disabled selected>Select Gender</option>
	          <option value="male">Male</option>
	          <option value="female">Female</option>
          	<option value="other">Prefer not to say</option>
            </select>
            <p class = "error">{formErrors.gender}</p>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" name="Dpassword" value={user.Dpassword} placeholder="Enter password" id="Dpassword" onChange={ handleChange } required/>
            <p class = "error">{formErrors.password}</p>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" name="Dconfirmpassword" value={user.Dconfirmpassword} placeholder="Confirm password" id="Dconfirmpassword" onChange={ handleChange } required/>
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

export default Registration_Form_Doctor;

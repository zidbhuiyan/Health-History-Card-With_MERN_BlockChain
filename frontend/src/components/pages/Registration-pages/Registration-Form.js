import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../App';
import Footer from '../../Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';
import './Registration-Form.css';
import swal from 'sweetalert';


function Registration_Form() {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    birthid: '',
    nid: '',
    hid:'',
    email:'',
    bloodgroup:'',
    dateofbirth: '',
    phonenumber: '',
    fathersname: '',
    fathersnid: '',
    mothersname: '',
    mothersnid: '',
    presentaddress: '',
    permanentaddress: '',
    password: '',
    confirmpassword: '',
    gender: '',
    emergphonenumber: '',
    })

    const [formErrors , setFormErrors] =useState({});
    const [isSubmit , setIsSubmit] =useState(false);
    const errors = {};

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

    const healthid = user.birthid;

    const healthid1 = healthid.slice(0,4);
    const healthid2 = healthid.slice(11);

    const userhid = healthid1+healthid2;

    user.hid = userhid;

    setFormErrors(validate(user));

    setIsSubmit(true); 
    
  }
 
  let navigate = useNavigate();

  useEffect(()=> {
    
    if(Object.keys(formErrors).length === 0 && isSubmit){

      const newClient = {
        firstname: user.firstname,
        lastname: user.lastname,
        birthid: user.birthid,
        nid: user.nid,
        hid: user.hid,
        email:user.email,
        bloodgroup:user.bloodgroup,
        dateofbirth: user.dateofbirth,
        phonenumber: user.phonenumber,
        fathersname: user.fathersname,
        fathersnid: user.fathersnid,
        mothersname: user.mothersname,
        mothersnid: user.mothersnid,
        presentaddress: user.presentaddress,
        permanentaddress: user.permanentaddress,
        password: user.password,
        confirmpassword: user.confirmpassword,
        gender: user.gender,
        emergphonenumber: user.emergphonenumber
        }

        var result = "";

        if(user.firstname && user.lastname && user.birthid && user.dateofbirth && user.hid && user.fathersname && user.mothersname && user.fathersnid && user.mothersnid && user.gender && user.password && user.confirmpassword && user.presentaddress && user.permanentaddress && user.emergphonenumber ){
          
          axios.post('http://localhost:3001/create1', newClient)
          .then( res => {
  
            result = (res.data.message)

            if(result == "regDone"){
              swal({
                title: "Registration Done!",
                text: "Now, Please login!",
                icon: "success",
                button: "Okay",
              }).then((done) => {
                if (done) {
                  navigate("/login_form_client");
                }
              });
            }
            else if(result == "userBidExist"){
              swal({
                title: "Birth ID already Exist!",
                text: "Please, Check again",
                icon: "warning",
                button: "Okay",
              });
            }
            else if(result == "userNidExist"){
              swal({
                title: "National ID already Exist!",
                text: "Please, Check again",
                icon: "warning",
                button: "Okay",
              });
            }
        })
        }
      
    }
 },[formErrors])

 const validate = (values) =>{

  

  var nameRegex = /^[a-zA-Z ]{2,30}$/;
  var numReg = /^\d+$/;
  var phoneReg = /^(?:\+88|88)?(01[3-9]\d{8})$/;

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

  if(!values.birthid){
    errors.birthid = "* Birth ID is required!";
  }
  else if(!numReg.test(values.birthid)){
    errors.birthid = "* Invalid Birth ID";
  }
  else if(values.birthid.length != 17){
    errors.birthid = "* Birth ID must have 17 digit";
  }

  if(!numReg.test(values.nid)){
    errors.nid = "* Invalid National ID";
  }
  else if(values.nid.length != 10){
    errors.nid = "* NID must have 10 digit";
  }

  if(values.phonenumber && !phoneReg.test(values.phonenumber)){
    errors.phonenumber = "* Invalide phone number";
  }

  if(!values.emergphonenumber){
    errors.emergphonenumber = "* Phone number is reqired";
  }
  else if(!phoneReg.test(values.emergphonenumber)){
    errors.emergphonenumber = "* Invalide phone number";
  }

  if(!values.presentaddress){
    errors.presentaddress = "* Present address is required";
  }

  if(!values.permanentaddress){
    errors.permanentaddress = "* Permanent address is required";
  }

  if(!values.dateofbirth){
    errors.dateofbirth = "* Date of birth is required!";
  }

  if(!values.fathersname){
    errors.fathersname = "* Father's name is required!";
  }
  else if(!nameRegex.test(values.fathersname)){
    errors.fathersname = "* Father's name is not valid";
  }

  if(!values.mothersname){
    errors.mothersname = "* Mother's name is required!";
  }
  else if(!nameRegex.test(values.mothersname)){
    errors.mothersname = "* Mother's name is not valid";
  }

  if(!values.fathersnid){
    errors.fathersnid = "* National ID is required";
  }
  else if(!numReg.test(values.fathersnid)){
    errors.fathersnid = "* Invalid National ID";
  }
  else if(values.fathersnid.length != 10){
    errors.fathersnid = "* NID must have 10 digit";
  }

  if(!values.mothersnid){
    errors.mothersnid = "* National ID is required";
  }
  else if(!numReg.test(values.mothersnid)){
    errors.mothersnid = "* Invalid National ID";
  }
  else if(values.mothersnid.length != 10){
    errors.mothersnid = "* NID must have 10 digit";
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
      NavPage='other'/>


<div class="container">
    
    <div class="title">Registration</div>
    <div class="content">
      <form>
        <div class="user-details" >
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" name="firstname" value={user.firstname} placeholder="Enter First name" id="firstname" onChange={ handleChange } required/>
            <p class = "error">{formErrors.firstname}</p>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" name="lastname" value={user.lastname}  placeholder="Enter Last name" id="lastname" onChange={ handleChange } required/>
            <p class = "error">{formErrors.lastname }</p>
          </div>
          <div class="input-box">
            <span class="details">Birth ID</span>
            <input type="text" name="birthid" value={user.birthid} placeholder="Enter Birth Certificate ID" id="birthid" onChange={ handleChange } required/>
            <p class = "error">{formErrors.birthid }</p>
          </div>

          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" name="nid" value={user.nid}  placeholder="Enter NID" id="nid" onChange={ handleChange } required/>
            <p class = "error">{formErrors.nid}</p>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(MM/DD/YYYY)</span>
            <input type="date" name="dateofbirth" value={user.dateofbirth}  placeholder="Enter Date of Birth" id="dateofbirth" onChange={ handleChange } required/>
            <p class = "error">{formErrors.dateofbirth}</p>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" name="phonenumber" value={user.phonenumber}  placeholder="Enter Phone Number" id="phonenumber" onChange={ handleChange } required/>
            <p class = "error">{formErrors.phonenumber }</p>
          </div>
          <div class="input-box">
            <span class="details">Father's Name</span>
            <input type="text" name="fathersname" value={user.fathersname} placeholder="Enter father's name" id="fathersname" onChange={ handleChange } required/>
            <p class = "error">{formErrors.fathersname}</p>
          </div>
          <div class="input-box">
            <span class="details">Father's NID</span>
            <input type="text" name="fathersnid" value={user.fathersnid} placeholder="Enter father's NID" id="fathersnid" onChange={ handleChange } required/>
            <p class = "error">{formErrors.fathersnid}</p>
          </div>
          <div class="input-box">
            <span class="details">Mother's Name</span>
            <input type="text" name="mothersname" value={user.mothersname} placeholder="Enter mother's name" id="mothersname" onChange={ handleChange } required/>
            <p class = "error">{formErrors.mothersname}</p>
          </div>
          <div class="input-box">
            <span class="details">Mother's NID</span>
            <input type="text" name="mothersnid" value={user.mothersnid} placeholder="Enter mother's NID" id="mothersnid" onChange={ handleChange }  required/>
            <p class = "error">{formErrors.mothersnid}</p>
          </div>
          <div class="input-box">
            <span class="details">Present Address</span>
            <input type="text" name="presentaddress" value={user.presentaddress} placeholder="Enter present address" id="presentaddress" onChange={ handleChange } required/>
            <p class = "error">{formErrors.presentaddress}</p>
          </div>
          <div class="input-box">
            <span class="details">Permanent Address</span>
            <input type="text" name="permanentaddress" value={user.permanentaddress} placeholder="Enter permanent address" id="permanentaddress" onChange={ handleChange } required/>
            <p class = "error">{formErrors.permanentaddress}</p>
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

          <div class="input-box">
            <span class="details">Emergency Phone Number</span>
            <input type="text" name="emergphonenumber" value={user.emergphonenumber} placeholder="Enter emergency phone number" id="emergphonenumber" onChange={ handleChange } required/>
            <p class = "error">{formErrors.emergphonenumber}</p>
          </div>

          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" name="email" value={user.email} placeholder="Enter Email" id="email" onChange={ handleChange } required/>
            <p class = "error">{formErrors.email}</p>
          </div>

          <div class="input-box">
            <span class="details">Gender</span>
            <select name="gender" value={user.gender} id="gender" onChange={ handleChange }>
            <option value="" disabled selected>Select Gender </option>
	          <option value="Male">Male</option>
	          <option value="Female">Female</option>
          	<option value="Other">Prefer not to say</option>
            </select>
            <p class = "error">{formErrors.gender}</p>
          </div>

          <div class="input-box">
            <span class="details">Blood Group</span>
            <select name="bloodgroup" value={user.bloodgroup} id="bloodgroup" onChange={ handleChange }>
            <option value="" disabled selected>Select Blood Group </option>
	          <option value="A(+ve)">A(+ve)</option>
	          <option value="B(+ve)">B(+ve)</option>
          	<option value="A(-ve)">A(-ve)</option>
	          <option value="B(-ve)">B(-ve)</option>
            <option value="AB(+ve)">AB(+ve)</option>
	          <option value="AB(-ve)">AB(-ve)</option>
          	<option value="O(+ve)">O(-ve)</option>
	          <option value="O(-ve)">O(-ve)</option>
            </select>
            <p class = "error">{formErrors.bloodgroup}</p>
          </div>

          

        </div>
     
        <div class="button" >
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

export default Registration_Form;
import React, {useState, useEffect} from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './Contact.css'
import axios from "axios"
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

function Contact() {

  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [formErrors , setFormErrors] =useState({});
  const [isSubmit , setIsSubmit] =useState(false);


  function handleChange(event){
    const {name, value} = event.target;

    setInput(prevInput => {
    return{
        ...prevInput,
        [name] : value
    }
    
  })
}
  function handleClick(event){

     event.preventDefault();

     setFormErrors(validate(input));

     setIsSubmit(true);
     
  }

  let navigate = useNavigate();

  useEffect(()=> {
    
     if(Object.keys(formErrors).length === 0 && isSubmit){
      
      const newContact = {
        name: input.name,
        email: input.email,
        message: input.message
      }
      swal({
        title: "Messege Sent!",
        icon: "success",
        button: "Okay",
      }).then((done) => {
        if (done) {
          
          navigate("/");
        }
      });
      axios.post('http://localhost:3001/create', newContact)
   
     }
  },[formErrors])

  const validate = (values) =>{

    const errors = {};

    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!values.name){
      errors.name = "* Name is required!";
    }
    else if(!nameRegex.test(values.name)){
      errors.name = "* Name is not valid";
    }

    if(!values.email){
      errors.email = "* Email is required!";
    }
    else if(!emailRegex.test(values.email)){
      errors.email = "* Email is not valid";
    }

    if(!values.message){
      errors.message = "* Message is required!";
    }

   return errors;
  }

  return (
    <>
      <Navbar
      NavPage='other'/>
      <div class="bgc">
      <div class="contact" id="contact">
        <h1 class="heading">
          <span>c</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="content">
              <h3>For any type of query, fill up this form!</h3>
              
              <div class="row">
                <form id="contactForm" name="contactForm">
                  <div class="inputBox">
                    <label for="cname">Name:</label>
                    
                  </div>
                 
                  <div class="inputBox">
                    <input onChange ={handleChange}
                      name= "name"
                      type="text"
                      value={input.name}
                      placeholder="Enter You Name"
                      id="name"
                      required
                    />  
                    <p class = "error">{formErrors.name}</p>
                    
                  </div>

                  <div class="inputBox">
                    <label for="email">Email: </label>
                   
                  </div>
                  <div class="inputBox">
                    <input onChange ={handleChange}
                      name= "email"
                      type="email"
                      value={input.email}
                      placeholder="Enter Your E-mail"
                      id="email"
                      required
                    />
                     <p class = "error">{formErrors.email}</p>
                  </div>
                  <textarea onChange ={handleChange}
                    name= "message"
                    placeholder="Please, type Your message here"
                    value={input.message}
                    cols="30"
                    rows="10"
                    id="message"
                    required
                  ></textarea>
                  <p class = "error">{formErrors.message}</p>
                  <input onClick={handleClick}
                    type="submit"
                    class="btn"
                    value="Send message"
                    id="submitBtn"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default Contact;
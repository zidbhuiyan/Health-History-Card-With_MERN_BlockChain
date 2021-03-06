import React, {useState} from 'react';
import '../../../App';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './Login-Form.css'
import axios from 'axios';
import swal from 'sweetalert';

function Login_Form_Doctor(props) {
  
  const navigate = useNavigate();

  const [user, setUser] = useState({
    Docregid:"",
    Dpassword: "",
    })
  
  const handleChange = e =>{
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value 
    }) 
  }


  var result = "";

  function handleClick(event) {

    event.preventDefault();

    console.log(user)

    axios.post('http://localhost:3001/doctorLogin', user)
    .then(res => {
      result = (res.data.message)
      
      if(result == "logindone"){
      
      

        navigate("/doctor_home");

        props.updateUser(res.data.user);
      }

      else if(result == "passwordisIncorrect"){
        swal({
          title: "Password is invalid!",
          text: "Please, check again",
          icon: "warning",
          button: "Okay",
        });
      }
      else if(result == "userDoesNotExist"){
        swal({
          title: "User does not exist!",
          text: "Please, register first",
          icon: "warning",
          button: "Okay",
        });
      }

    })
  }


  return (
    <>
      <div className='bgg'>
    <Navbar
      NavPage="other"/>

    <div className="center">
      
      <h1>Login as Doctor</h1>
      <form>
        <div className="txt_field">
          <input type="text" name="Docregid" value={user.Docregid} onChange={handleChange} required/>
          <span></span>
          <label>Enter Registration ID</label>
        </div>
        <div className="txt_field">
          <input type="password" name="Dpassword" value={user.Dpassword}onChange={handleChange} required/>
          <span></span>
          <label>Enter Password</label>
        </div>
        
        <input type="submit" onClick={handleClick} value="Login"/>
        <div className="signup_link">
        Not Registered? <Link to='/registration'>Register here!</Link>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
 
    </>
  );
}

export default Login_Form_Doctor;
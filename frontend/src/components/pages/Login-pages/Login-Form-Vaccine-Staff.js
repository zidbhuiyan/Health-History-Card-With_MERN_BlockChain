import React, {useState} from 'react';
import '../../../App';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './Login-Form.css'
import axios from 'axios';
import swal from 'sweetalert';

function Login_Form_Vaccine_Staff(props) {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    Vregid: "",
    password: "",
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

    axios.post('http://localhost:3001/vaccineStaffLogin', user)
    .then(res => {
      result = (res.data.message)
      
      if(result == "logindone"){
       
        navigate("/vaccine_staff_home");
        props.updateUser(res.data.user);

      }

      else if(result == "passwordisIncorrect"){
        swal({
          title: "Password is Invalid!",
          text: "Please, Check again",
          icon: "warning",
          button: "Okay",
        });
      }
      else if(result == "userDoesNotExist"){
        swal({
          title: "User Does Not Exist!",
          text: "Please, Register First",
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
      
      <h1>Login As Vaccine Staff</h1>
      <form>
        <div className="txt_field">
          <input type="text" name="Vregid" value={user.Vregid} onChange={handleChange} required/>
          <span></span>
          <label>Enter Registration ID</label>
        </div>
        <div className="txt_field">
          <input type="password" name="password" value={user.password} onChange={handleChange} required/>
          <span></span>
          <label>Enter Password</label>
        </div>
        
        <input type="submit" onClick={handleClick} value="Login"/>
        <div className="signup_link">
        Not Registered? <Link to='/registration'>Register Here</Link>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
 
    </>
  );
}

export default Login_Form_Vaccine_Staff;
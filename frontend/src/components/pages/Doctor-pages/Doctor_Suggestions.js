import React, {useState, useEffect} from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import Doctor_Navbar from './Doctor_Navbar';
import'./Doctor_Home.css'
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate } from 'react-router-dom';

function Doctor_Sugestions( props ) {

    const navigate = useNavigate();

    const location = useLocation();

    console.log(location.state);

    const [input, setInput] = useState({
        hid: '',
        Dfirstname: '',
        Dlastname: '',
        Docregid: '',
        hospitalname: '',
        Dsuggestions: ''
      })

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

        const newSuggestions = {
            hid: location.state.user.hid,
            Dfirstname: props.user.Dfirstname,
            Dlastname: props.user.Dlastname,
            Docregid: props.user.Docregid,
            hospitalname: props.user.hospitalname,
            Dsuggestions: input.Dsuggestions
          }

          console.log(newSuggestions);


    axios.post('http://localhost:3001/doctorSuggestion',newSuggestions).then(res => {
        if(res.data.message == "suggestionsupdated"){
            swal({
                title: "Suggestions Updated!",
                icon: "success",
                button: "Okay",
              }).then((found) => {
                if (found) {
                  navigate("/search_profile",{
                    state:{
                      user: location.state.user,
                      userCat: location.state.userCat,
                      userCatInfo: location.state.userCatInfo
                    }
                  });
                }
              });
        }
})


        
     }
  
  return (
    <>
    <div className='bgdoctor'>
      <Doctor_Navbar/>
      

        <div class="box-container">
          <div class="box">
          <h1 class="suggheading">
          <span>Suggestions</span>
          <span>&nbsp;</span>
          <span>Box</span>
        </h1>
            <div class="content">
              
              <div class="row">
                <form id="contactForm" name="contactForm">
                  
                  <textarea onChange ={handleChange}
                    name= "Dsuggestions"
                    placeholder="Please, type Your message here"
                    value={input.Dsuggestions}
                    cols="30"
                    rows="15"
                    id="Dsuggestions"
                    required
                  ></textarea>
    
                  <input onClick={handleClick}
                    type="submit"
                    class="btn"
                    value="Send suggestions"
                    id="submitBtn"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
     

      <Footer/>
    </div>
    </>
  );
}

export default Doctor_Sugestions;
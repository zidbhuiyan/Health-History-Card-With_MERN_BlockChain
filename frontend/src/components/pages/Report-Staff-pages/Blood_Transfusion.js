import React, { useState, useEffect } from "react";
import "../../../App.css";
import Footer from "../../Footer";
import "./Report_Staff_Home.css";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

import Web3 from "web3";
import { Client_ABI, Client_ADDRESS } from "../../../config";
import Report_Staff_Navbar from "./Report_Staff_Navbar";

function Blood_Transfusion(props) {
  const navigate = useNavigate();

  const location = useLocation();

  console.log(location.state);

  if(!props.user){
    navigate("/");
  window.location.reload(false);
  }

  const [input, setInput] = useState({
    type: "",
    amount: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

    const date = new Date().toLocaleString();
    console.log(date);

    console.log("set");
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const client = new web3.eth.Contract(Client_ABI, Client_ADDRESS);
    console.log(client);

    web3.eth.getAccounts().then(function (accounts) {
      let acc = accounts[0];
      return client.methods
        .setBooldtransfusionData(
          props.user.firstname,
          props.user.lastname,
          props.user.Rregid,
          props.user.hospitalname,
          input.amount,
          input.type,
          date,
          location.state.user.hid
        )
        .send({ from: acc })
        .then((done) => {
          swal({
            title: "Record saved!",
            icon: "success",
            button: "Okay",
          }).then((found) => {
            if (found) {
              navigate("/search_profile", {
                state: {
                  user: location.state.user,
                  userCat: location.state.userCat,
                  userCatInfo: location.state.userCatInfo,
                },
              });
            }
          });
        });
    });
  }

  return (
    <>
      <div className="bgRepStf">
        <Report_Staff_Navbar />

        <div class="container">
        <h1 class="suggheading">
              <span>Blood</span>
              <span>&nbsp;</span>
              <span>Transfusion</span>
              <span>&nbsp;</span>
              <span>Record</span>
            </h1>
    <div class="content">
      <form>
        <div class="user-details">

        <div class="blood-input-box">
                    <span class="details">Blood transfusion amount</span>
                    <select
                      name="amount"
                      value={input.amount}
                      id="amount"
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Select amount
                      </option>
                      <option value="100 ml">100 ml</option>
                      <option value="200 ml">200 ml</option>
                      <option value="300 ml">300 ml</option>
                      <option value="400 ml">400 ml</option>
                      <option value="500 ml">500 ml</option>
                      <option value="600 ml">600 ml</option>
                      <option value="700 ml">700 ml</option>
                      <option value="800 ml">800 ml</option>
                      <option value="900 ml">900 ml</option>
                    </select>
                    
                  </div>
                  
                  <div class="blood-input-box">
                    <span class="details">Blood Transfusion type</span>
                    <select
                      name="type"
                      value={input.type}
                      id="type"
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Select Type
                      </option>
                      <option value="Whole Blood">Whole Blood</option>
                      <option value="Power Red">Power Red</option>
                      <option value="Platelet">Platelet</option>
                      <option value="Plasma">Plasma</option>
                    </select>
                    
                  </div>
        
        </div>
        
        <div class="button">
        <input
                    onClick={handleClick}
                    type="submit"
                    class="btn"
                    value="Save record"
                    id="submitBtn"
                  />
        </div>
      </form>
    </div>
  </div>

        <Footer />
      </div>
    </>
  );
}

export default Blood_Transfusion;

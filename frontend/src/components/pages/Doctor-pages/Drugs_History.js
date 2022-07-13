import React, { useState, useEffect } from "react";
import "../../../App.css";
import Footer from "../../Footer";
import Doctor_Navbar from "./Doctor_Navbar";
import "./Doctor_Home.css";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

import Web3 from "web3";
import { Client_ABI, Client_ADDRESS } from "../../../config";

function Drugs_History(props) {
  const navigate = useNavigate();

  const location = useLocation();

  const [inputTrack, setInputTrack] = useState(["1"]);

  const [input, setInput] = useState({});
  const [inputDate, setInputDate] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleDateChange(event) {
    const { name, value } = event.target;

    setInputDate((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const drugsNames = Object.values(input);
  const drugsDate = Object.values(inputDate);

  function addClick(event) {
    event.preventDefault();
    console.log("get");
    let t = inputTrack.length + 1;
    console.log(t);
    setInputTrack((prevState) => [...prevState, "" + t]);
  }

  function handleClick(event) {
    event.preventDefault();

    var drugNameStr = JSON.stringify(drugsNames);
    var drugdayStr = JSON.stringify(drugsDate);

    const date = new Date().toLocaleString();
    console.log(date);

    console.log("set");
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const client = new web3.eth.Contract(Client_ABI, Client_ADDRESS);
    console.log(client);

    web3.eth.getAccounts().then(function (accounts) {
      let acc = accounts[0];
      return client.methods
        .setDrugsData(
          props.user.Dfirstname,
          props.user.Dlastname,
          props.user.Docregid,
          props.user.hospitalname,
          drugNameStr,
          drugdayStr,
          date,
          location.state.user.hid
        )
        .send({ from: acc })
        .then((done) => {
          swal({
            title: "Saved successfully!",
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
      <div className="bgdoctor">
        <Doctor_Navbar />

        <div class="container">
          <h1 class="suggheading">
            <span>Drug</span>
            <span>&nbsp;</span>
            <span>History</span>
          </h1>
          <div class="content">
            <form>
              <div class="user-details">
                {inputTrack.map((track) => (
                  <>
                    <div class="blood-input-box">
                      <span class="details">Drug name:</span>
                      <input
                        onChange={handleChange}
                        name={"drug" + track}
                        type="text"
                        placeholder="Enter Drug Name"
                        id={"drug" + track}
                        required
                      />
                    </div>

                    <div class="drug-input-box">
                      <span class="details">Days:</span>
                      <input
                        onChange={handleDateChange}
                        name={"date" + track}
                        type="number"
                        placeholder="Days"
                        id={"date" + track}
                        min="0"
                        required
                      />
                    </div>
                  </>
                ))}
              </div>
              <div class="button">
                <button onClick={addClick} class="addbtn" id="submitBtn">
                  Add more drugs
                </button>
              </div>
              <div class="button">
                <input
                  onClick={handleClick}
                  type="submit"
                  class="btn"
                  value="Update"
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

export default Drugs_History;

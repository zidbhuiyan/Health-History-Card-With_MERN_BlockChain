import React, { useState, useEffect } from "react";
import "../../../App.css";
import Footer from "../../Footer";

import "./Doctor_Home.css";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

import Web3 from "web3";
import { Client_ABI, Client_ADDRESS } from "../../../config";
import Doctor_Navbar from "./Doctor_Navbar";

function Personal_History(props) {
  const navigate = useNavigate();

  const location = useLocation();

  if (!props.user) {
    navigate("/");
    window.location.reload(false);
  }

  console.log(location.state);

  const [input, setInput] = useState({
    problemId: "",
    problem: "",
    type: "",
  });

  var problemId = "",
    problemName = "",
    problemType = [];

  const problemDetails = [
    {
      Id: "0",
      problemName: "Diabetic",
      problemType: ["Type-1", "Type-2", "Gestational diabetes"],
    },
    {
      Id: "1",
      problemName: "Asthma",
      problemType: [
        "Allergic asthma",
        "'Seasonal' asthma",
        "Occupational asthma",
      ],
    },
  ];

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  problemDetails
    .filter((prb) => prb.Id === input.problemId)
    .map((prb) => {
      problemId = prb.Id;
      problemName = prb.problemName;
      problemType = prb.problemType;
    });

  function handleClick(event) {
    event.preventDefault();

    console.log(problemName);
    console.log(input.type);

    const date = new Date().toLocaleString();
    console.log(date);

    console.log("set");
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const client = new web3.eth.Contract(Client_ABI, Client_ADDRESS);
    console.log(client);

    web3.eth.getAccounts().then(function (accounts) {
      let acc = accounts[0];
      return client.methods
        .setPersonalData(
          props.user.Dfirstname,
          props.user.Dlastname,
          props.user.Docregid,
          props.user.hospitalname,
          problemName,
          input.type,
          date,
          location.state.user.hid
        )
        .send({ from: acc })
        .then((done) => {
          swal({
            title: "Updated!",
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
            <span>Personal</span>
            <span>&nbsp;</span>
            <span>History</span>
          </h1>
          <div class="content">
            <form>
              <div class="user-details">
                <div class="blood-input-box">
                  <span class="details">Problem name:</span>
                  <select
                    name="problemId"
                    id="problemId"
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      Selelct problem name
                    </option>
                    {problemDetails.map((problemDetail) => (
                      <option key={problemDetail.Id} value={problemDetail.Id}>
                        {problemDetail.problemName}
                      </option>
                    ))}
                  </select>
                </div>

                <div class="blood-input-box">
                  <span class="details">Problem type:</span>
                  <select name="type" id="type" onChange={handleChange}>
                    <option value="" disabled selected>
                      Selelct problem type
                    </option>
                    {problemType.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
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

export default Personal_History;


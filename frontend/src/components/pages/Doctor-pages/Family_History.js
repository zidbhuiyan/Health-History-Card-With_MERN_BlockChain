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

function Family_History(props) {
  const navigate = useNavigate();

  const location = useLocation();

  console.log(location.state);

  const [input, setInput] = useState({
    disease: "",
    realation: "",
  });

  const disease = [
    "Humington disease",
    "Marfan syndrom",
    "Neurofibromatosis type 1",
    "Congenital deafness",
    "Cystic fibrosis",
    "Beta thalassemia",
    "Spinal muscular atrophy (SMA)",
    "Sickle-cell anemia",
    "Tay-sachs disease",
    "Alzheimer's disease",
    "Arthritis",
    "Cancer",
    "Dementia",
    "Diabetes",
    "Heart disease",
    "High blood pressure",
    "Multiple sclerosis",
    "Parkinson's disease",
    "Spina bifida",
    "Thyroid disorders",
  ];
  const relation = [
    "Father",
    "Mother",
    "Brother",
    "Sister",
    "Grand-Father",
    "Grand-Mother",
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
        .setFamilyDiseaseData(
          props.user.Dfirstname,
          props.user.Dlastname,
          props.user.Docregid,
          props.user.hospitalname,
          input.disease,
          input.realation,
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
            <span>Family</span>
            <span>&nbsp;</span>
            <span>History</span>
          </h1>
          <div class="content">
            <form>
              <div class="user-details">
                <div class="blood-input-box">
                  <span class="details">Disease namwe:</span>
                  <select
                    name="disease"
                    value={input.disease}
                    id="disease"
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      Select disease
                    </option>
                    {disease.map((disease) => (
                      <option key={disease} value={disease}>
                        {disease}
                      </option>
                    ))}
                  </select>
                </div>

                <div class="blood-input-box">
                  <span class="details">Relation type</span>
                  <select
                    name="realation"
                    value={input.realation}
                    id="realation"
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      Select realation
                    </option>
                    {relation.map((relation) => (
                      <option key={relation} value={relation}>
                        {relation}
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

export default Family_History;

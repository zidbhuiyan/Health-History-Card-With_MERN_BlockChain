import React, { useState, useEffect } from "react";
import "../../../App.css";
import Footer from "../../Footer";
import Vaccine_Staff_Navbar from "./Vaccine_Staff_Navbar";
import "./Vaccine_Staff_Home.css";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

import Web3 from "web3";
import { Client_ABI, Client_ADDRESS } from "../../../config";

function Vaccine_History(props) {
  const navigate = useNavigate();

  const location = useLocation();

  console.log(location.state);

  const [input, setInput] = useState({
    vaccineId: "",
    dose: "",
    nextDose: "",
  });

  var Id = "",
    vaccineName = "",
    vaccineDisease = "Disease will apear here";

  const vaccineDetails = [
    { Id: "0", vaccineName: "BCG", vaccineDisease: "Tuberculosis" },
    {
      Id: "1",
      vaccineName: "Pentavalent",
      vaccineDisease:
        "Diphtheria, Pertussis, Tetanus, Hepatitis B, Haemophilus Influenza B",
    },
    { Id: "2", vaccineName: "PCV", vaccineDisease: "Pneumococcal Pneumonia" },
    { Id: "3", vaccineName: "OPV", vaccineDisease: "Poliomyelitis" },
    { Id: "5", vaccineName: "Measles", vaccineDisease: "Measles" },
    { Id: "6", vaccineName: "TT (Tetanus toxoid)", vaccineDisease: "Tetanus" },
    { Id: "7", vaccineName: "Oral Polio ", vaccineDisease: "Polio" },
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

  vaccineDetails
    .filter((vac) => vac.Id === input.vaccineId)
    .map((vac) => {
      Id = vac.Id;
      vaccineName = vac.vaccineName;
      vaccineDisease = vac.vaccineDisease;
    });

  console.log(Id);
  console.log(vaccineName);

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
        .setVaccineData(
          props.user.firstname,
          props.user.lastname,
          props.user.Vregid,
          props.user.hospitalname,
          vaccineName,
          vaccineDisease,
          input.dose,
          date,
          location.state.user.hid
        )
        .send({ from: acc })
        .then((done) => {
          swal({
            title: "Vaccine updated!",
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
      <div className="bgVacStf">
        <Vaccine_Staff_Navbar />

        <div class="container">
          <h1 class="suggheading">
            <span>Vaccine</span>
            <span>&nbsp;</span>
            <span>Record</span>
          </h1>
          <div class="content">
            <form>
              <div class="user-details">
                <div class="blood-input-box">
                  <span class="details">Vaccine name:</span>
                  <select
                    name="vaccineId"
                    id="vaccineId"
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      Selelct vaccine name
                    </option>
                    {vaccineDetails.map((vaccineDetail) => (
                      <option key={vaccineDetail.Id} value={vaccineDetail.Id}>
                        {vaccineDetail.vaccineName}
                      </option>
                    ))}
                  </select>
                </div>

                <div class="blood-input-box">
                  <span class="details">Disease</span>
                  <input placeholder={vaccineDisease} disabled />
                </div>

                <div class="blood-input-box">
                  <span class="details">Dose Number</span>
                  <select
                    name="dose"
                    value={input.dose}
                    id="dose"
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      Select dose number
                    </option>
                    <option value="1st Dose">1st Dose</option>
                    <option value="2nd Dose">2nd Dose</option>
                    <option value="3rd Dose">3rd Dose</option>
                    <option value="4th Dose">4th Dose</option>
                    <option value="5th Dose">5th Dose</option>
                  </select>
                </div>
              </div>

              <div class="button">
                <input
                  onClick={handleClick}
                  type="submit"
                  class="btn"
                  value="Update vaccine"
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

export default Vaccine_History;

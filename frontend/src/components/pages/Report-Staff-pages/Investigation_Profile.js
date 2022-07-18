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
import { ImageUpload, PdfUpload } from "react-ipfs-uploader";

function Investigation_Profile(props) {
  const navigate = useNavigate();

  const location = useLocation();

  console.log(location.state);

  if (!props.user) {
    navigate("/");
    window.location.reload(false);
  }

  const [input, setInput] = useState({});
  const [url, setUrl] = useState("");
  const [imageShow, setImageShow] = useState(false);
  const [pdfShow, setPdfShow] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function ImgShow(event) {
    event.preventDefault();

    console.log("image");
    setImageShow(true);
    setPdfShow(false);
  }

  function PdfShow(event) {
    event.preventDefault();

    console.log("pdf");
    setImageShow(false);
    setPdfShow(true);
  }

  function handleClick(event) {
    event.preventDefault();

    console.log(url);

    const date = new Date().toLocaleString();
    console.log(date);

    console.log("set");
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const client = new web3.eth.Contract(Client_ABI, Client_ADDRESS);
    console.log(client);

    if(url){

      web3.eth.getAccounts().then(function (accounts) {
        let acc = accounts[0];
        return client.methods
          .setInvestigationData(
            props.user.firstname,
            props.user.lastname,
            props.user.Rregid,
            props.user.hospitalname,
            url,
            date,
            location.state.user.hid
          )
          .send({ from: acc })
          .then((done) => {
            swal({
              title: "Report saved!",
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
    else{
      swal({
        title: "Upload file first!",
        icon: "warning",
        button: "Okay",
      })
    }
  }

  return (
    <>
      <div className="bgRepStf">
        <Report_Staff_Navbar />

        <div class="container">
          <h1 class="suggheading">
            <span>Investigation</span>
            <span>&nbsp;</span>
            <span>Profile</span>
          </h1>
          <div class="content">
            <div class="user-details">

              <div class="toggleBtn">

              <button class="tbtn" onClick={ImgShow}> Image Upload </button>
              <button class="tbtn" onClick={PdfShow}> PDF Upload </button>

              </div>
          

              {imageShow ? (
                <div>
                  <div class="blood-input-box">
                    <span class="details">Upload Image here..</span>
                    <ImageUpload setUrl={setUrl} />
                  </div>
                  <div>You must upload the image first to save it</div>
                </div>
              ) : null}

              {pdfShow ? (
                <div>
                  <div class="blood-input-box">
                    <span class="details">Upload Pdf here..</span>
                    <PdfUpload setUrl={setUrl} />
                  </div>
                  <div>You must upload the pdf first to save it</div>
                  <div>
                    
                  </div>
                </div>
              ) : null}
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
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Investigation_Profile;

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
import { ImageUpload, PdfUpload } from "react-ipfs-uploader";

function Prescription(props) {
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
          .setPrescriptionData(
            props.user.Dfirstname,
            props.user.Dlastname,
            props.user.Docregid,
            props.user.hospitalname,
            url,
            date,
            location.state.user.hid
          )
          .send({ from: acc })
          .then((done) => {
            swal({
              title: "Saved!",
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
        title: "Upload the file first!",
        icon: "warning",
        button: "Okay",
      })
    }

    
  }

  return (
    <>
      <div className="bgdoctor">
        <Doctor_Navbar />

        <div class="container">
          <h1 class="suggheading">
            <span>Prescription</span>
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
                    <span class="details">Upload Image Here..</span>
                    <ImageUpload setUrl={setUrl} />
                  </div>
                  <div>You must upload the image first then save it</div>
                </div>
              ) : null}

              {pdfShow ? (
                <div>
                  <div class="blood-input-box">
                    <span class="details">Upload Pdf Here..</span>
                    <PdfUpload setUrl={setUrl} />
                  </div>

                  <div>You must upload the pdf first then save it</div>

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
                value="Save prescription"
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

export default Prescription;
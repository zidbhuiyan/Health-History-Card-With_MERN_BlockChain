import React,{useRef} from 'react';
import { useReactToPrint } from "react-to-print";
import '../../../App.css';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './print_card.css'
import {QRCodeSVG} from 'qrcode.react';

const Print_card = (props) => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


    return (
      <>
      <div class ="bgpc">
        <Navbar
        NavPage='profile'
        page = 'print_card'/>

<div class="container">
  
  <div class="title"></div>
  <div class="content">
      <div ref={componentRef} class="card_container">

      <div class="padding">
                <div class="font">
                    <div class="top">
                        <div class="card_tittle">
                            Medical History Card
                        </div>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/566/937/large_2x/vector-person-icon.jpg" alt='Photo'/>
                    </div>
                    <div class="bottom">
                        <p class="left">Health ID:</p>
                        <p class="left_desi">{props.user.hid}</p>
                        <p class="left">Name:</p>
                        <p class="left_desi">{props.user.firstname} {props.user.lastname}</p>
                        <p class="right">Gender:</p>
                        <p class="right_desi">{props.user.gender}</p>
                        <p class="right">Date of Birth:</p>
                        <p class="right_desi">{props.user.dateofbirth}</p>
                    </div>
                </div> 

            </div>
            <div class="back">
                <h1 class="Details">Information</h1>
                
                <div class="details-info">
                <div class="qr_image">

                  <div class = "img">
                  <QRCodeSVG size={100} 
                             bgColor={"#ffffff"}
                             fgColor={"#000000"}
                             level={"L"} 
                             value= {props.user.hid} />
                  </div>
                        
                    </div>
                        <p class="left">Phone Number:</p>
                        <p class="left_desi">{props.user.phonenumber}</p>
                        <p class="left">Blood Group:</p>
                        <p class="left_desi">{props.user.bloodgroup}</p>
                        <p class="left">Diseases:</p>
                        <p class="left_desi">----</p>
                        <p class="center_desi"><b>Emergency Number</b></p>
                        <p class="center_desi">{props.user.phonenumber}</p>
                    </div>
                </div>
      </div>

      <div class='print_btn'>
          <button onClick={handlePrint} className="print__button">  Print </button> 
          </div>
      
  </div>
</div>
</div>
        <Footer/>
      </>
    );
  }
  
  export default Print_card;
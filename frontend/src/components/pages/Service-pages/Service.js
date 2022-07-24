import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './Service.css'

function Service() {
  return (
    <>
    <Navbar
      NavPage = 'other'/>
      <div class="bgs">
      <section class="services" id="services">
        <h1 class="heading">
          <span>S</span>
          <span>e</span>
          <span>r</span>
          <span>v</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
          <span>s</span>
        </h1>

        <div class="box-container">
          <div class="box">
             <i class="fa fa-sitemap"></i>
              <h3>Decentralized Access</h3>
              <p>Providing a decentralized storage structure to ensure the safety and security of patients information.</p>
          </div>
          <div class="box">
              <i class="fas fa-lock"></i>
              <h3>Privacy of data</h3>
              <p>Only authenticated users can access the data on the blockchain, with the help of the Smart Contract.</p>
          </div>
          <div class="box">
          <i class="fas fa-id-card"></i>
              <h3>Emergency Card</h3>
              <p>The history card would perform as an emergency card containing blood group, emergency contact, and major diseases.</p>
          </div>
          <div class="box">
              <i class="fas fa-database"></i>
              <h3>Efficient access to health records</h3>
              <p>A quick outlook of the history card will give the doctors a clearer idea about the patient’s medical history.</p>
          </div>
          <div class="box">
              <i class="fa fa-search"></i>
              <h3>Transparency of records</h3>
              <p>The Blockchain-based history card put an end to less reliable and faulty data by ensuring the immutability of the data.</p>
          </div>
          <div class="box">
              <i class="fa fa-file"></i>
              <h3>Effective Healthcare management</h3>
              <p>The availability of such a medical history card can successfully ensure effective healthcare management in the long run.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default Service;

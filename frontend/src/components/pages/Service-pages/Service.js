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
          <span>s</span>
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
              <i class="garbage value"></i>
              <h3>garbage value</h3>
              <p>garbage value</p>
          </div>
          <div class="box">
              <i class="garbage value"></i>
              <h3>garbage value</h3>
              <p>garbage value</p>
          </div>
          <div class="box">
          <i class="garbage value"></i>
              <h3>garbage value</h3>
              <p>garbage value</p>
          </div>
          <div class="box">
              <i class="garbage value"></i>
              <h3>garbage value</h3>
              <p>garbage value</p>
          </div>
          <div class="box">
              <i class="garbage value"></i>
              <h3>garbage value</h3>
              <p>garbage value</p>
          </div>
          <div class="box">
              <i class="garbage value"></i>
              <h3>garbage value</h3>
              <p>garbage value </p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default Service;

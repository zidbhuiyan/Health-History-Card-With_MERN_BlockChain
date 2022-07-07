import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import SearchBar from '../../SearchBar';
import Report_Staff_Navbar from './Report_Staff_Navbar';
import'./Report_Staff_Home.css'

function Report_Staff_Home(props) {
  
  return (
    <>
    <div className='bgRepStf'>
      <Report_Staff_Navbar/>
      <SearchBar
      userCat = "reportStaff"
      userCatInfo = {props.user}/>
      <Footer/>
    </div>
    </>
  );
}

export default Report_Staff_Home;
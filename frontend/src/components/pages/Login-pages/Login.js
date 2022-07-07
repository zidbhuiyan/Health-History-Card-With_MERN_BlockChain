import React from 'react';
import '../../../App';
import Footer from '../../Footer';
import Cards from '../../Cards';
import Navbar from '../../Navbar';


function Login() {
  return (
    <>
      <Navbar
      NavPage="Home"/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default Login;
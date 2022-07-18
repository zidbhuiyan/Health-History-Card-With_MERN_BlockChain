import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login-pages/Login';
import Registration from './components/pages/Registration-pages/Registration';
import Contact from './components/pages/Contact-pages/Contact';
import Service from './components/pages/Service-pages/Service';
import Registration_Form from './components/pages/Registration-pages/Registration-Form';
import Registration_Form_Doctor from './components/pages/Registration-pages/Registration-Form-Doctor';
import Registration_Form_Vaccine_Staff from './components/pages/Registration-pages/Registration-Form-Vaccine-Staff';
import Registration_Form_Report_Staff from './components/pages/Registration-pages/Registration-Form-Report-Staff';
import Login_Form_Client from './components/pages/Login-pages/Login-Form-Client';
import Login_Form_Doctor from './components/pages/Login-pages/Login-Form-Doctor';
import Login_Form_Report_Staff from './components/pages/Login-pages/Login-Form-Report-Staff';
import Login_Form_Vaccine_Staff from './components/pages/Login-pages/Login-Form-Vaccine-Staff';
import Doctor_Home from './components/pages/Doctor-pages/Doctor_Home';
import About from './components/pages/About-pages/About';
import Profile from './components/pages/Profile-pages/Profile';
import Print_card from './components/pages/Print-card/print_card';
import Doctor_Profile from './components/pages/Doctor-pages/Doctor_Profile';
import Report_Staff_Home from './components/pages/Report-Staff-pages/Report_Staff_Home';
import Report_Staff_Profile from './components/pages/Report-Staff-pages/Report_Staff_Profile';
import Vaccine_Staff_Home from './components/pages/Vaccine-Staff-pages/Vaccine_Staff_Home';
import Vaccine_Staff_Profile from './components/pages/Vaccine-Staff-pages/Vaccine_Staff_Profile';
import Search_profile from './components/pages/Search-profile/Search_profile';

import Vaccine_History from './components/pages/Vaccine-Staff-pages/Vaccine_History';
import Doctor_Sugestions from './components/pages/Doctor-pages/Doctor_Suggestions';
import Blood_Transfusion from './components/pages/Report-Staff-pages/Blood_Transfusion';
import Drugs_History from './components/pages/Doctor-pages/Drugs_History';
import Family_History from './components/pages/Doctor-pages/Family_History';
import Investigation_Profile from './components/pages/Report-Staff-pages/Investigation_Profile';
import Personal_History from './components/pages/Doctor-pages/Personal_History';
import Prescription from './components/pages/Doctor-pages/Prescription';
import Edit_Profile from './components/pages/Profile-pages/Edit_Profile';


function App() {

  const [ loginUser, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(sessionStorage.getItem("Myuser")))
  }, [])

  const updateUser = (loginUser) => {
    sessionStorage.setItem("Myuser", JSON.stringify(loginUser))
    setLoginUser(loginUser)
  }

  let path =  ''

   if(loginUser && loginUser._id){
    if(loginUser.hid){
      path = '/profile'
    }
    if(loginUser.Docregid){
      path = '/doctor_home'
    }
    if(loginUser.Rregid){
      path = '/report_staff_home'
    }
    if(loginUser.Vregid){
      path = '/vaccine_staff_home'
    }
   }


  return (
    <>
      
      <Router>
        <Routes>
        <Route path='/' exact element={loginUser && loginUser._id ? <Navigate to = {path} replace/> : <Home/>}/>
        <Route path='/login' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<Login/>}/>
        <Route path='/registration' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<Registration/>}/>
        <Route path='/about' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<About/>}/>
        <Route path='/contact' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<Contact/>}/>
        <Route path='/service' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<Service/>}/>
        <Route path='/login_form_client' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<Login_Form_Client updateUser={updateUser}  />}/>
        <Route path='/login_form_doctor' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<Login_Form_Doctor updateUser={updateUser}  />}/>
        <Route path='/login_form_report_staff' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<Login_Form_Report_Staff updateUser={updateUser}  />}/>
        <Route path='/login_form_vaccine_staff' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<Login_Form_Vaccine_Staff updateUser={updateUser}  />}/>
        <Route path='/Register_form' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<Registration_Form/>}/>
        <Route path='/Register_form_doctor' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<Registration_Form_Doctor/>}/>
        <Route path='/Register_form_vaccine_staff' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<Registration_Form_Vaccine_Staff/>}/>
        <Route path='/Register_form_report_staff' element={loginUser && loginUser._id ? <Navigate to = {path} replace/> :<Registration_Form_Report_Staff/>}/>

        <Route path='/doctor_home' element={loginUser && loginUser._id && loginUser.Docregid ? <Doctor_Home user = {loginUser}/> : <Navigate to ='/' replace/>}/>
        <Route path='/doctor_profile' element={ <Doctor_Profile user = {loginUser}/> }/>
        <Route path='/doctor_suggestion' element={ <Doctor_Sugestions user = {loginUser}/> }/>
        <Route path='/drugs_history' element={ <Drugs_History user = {loginUser}/> }/>
        <Route path='/family_history' element={ <Family_History user = {loginUser}/> }/>
        <Route path='/personal_history' element={ <Personal_History user = {loginUser}/> }/>
        <Route path='/prescription' element={ <Prescription user = {loginUser}/> }/>

        <Route path='/report_staff_home' element={loginUser && loginUser._id && loginUser.Rregid ? <Report_Staff_Home user = {loginUser}/> : <Navigate to ='/' replace/>}/>
        <Route path='/report_staff_profile' element={ <Report_Staff_Profile user = {loginUser}/>}/>
        <Route path='/blood_transfusion' element={ <Blood_Transfusion user = {loginUser}/>}/>
        <Route path='/investigation_profile' element={ <Investigation_Profile user = {loginUser}/>}/>

        <Route path='/vaccine_staff_home' element={ loginUser && loginUser._id && loginUser.Vregid ? <Vaccine_Staff_Home user = {loginUser}/> : <Navigate to ='/' replace/>}/>
        <Route path='/vaccine_staff_profile' element={<Vaccine_Staff_Profile user = {loginUser}/>}/>
        <Route path='/vaccine_history' element={ <Vaccine_History user = {loginUser}/>}/>

        
        <Route path='/profile' element={loginUser && loginUser._id && loginUser.hid ? <Profile user = {loginUser} /> : <Navigate to ='/' replace/>}/>
        <Route path='/print_card' element={ <Print_card user = {loginUser}/>}/>
        <Route path='/edit_profile' element={ <Edit_Profile user = {loginUser}/>}/>

        <Route path='/search_profile' element={ <Search_profile user = {loginUser}/> }/>

        </Routes>
      </Router>
  
    </>
  );
}

export default App;
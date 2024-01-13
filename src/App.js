import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

import Header from "./MyComponents/Header";
import Feedback from "./MyComponents/Feedback";
import ContactUs from "./MyComponents/Heading/ContactUs"
import SlidingInfo from "./MyComponents/SlidingInfo";
import Review from "./MyComponents/Review";
import intern_img from './images/intern.webp';
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/Heading/About";
import React, { useState, useEffect } from "react";
// import {ContactUs} from "./MyComponents/Heading/ContactUs" ;
import {Home} from "./MyComponents/Heading/Home";
import {Services } from "./MyComponents/Heading/Services";
import {Team } from "./MyComponents/Heading/Team";
import {  LoginSignup } from "./MyComponents/Heading/Login-SignUp";
import Internships from "./MyComponents/Internships";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 

function App() {

  const pageStyle = {
    backgroundColor: '#e0e0e0', // Replace with your desired background color
    minHeight: '100vh', // Ensure the background color covers the entire viewport height
  };
  return (
    <div className="pageStyle">
        
       {/* For Navbar */}
       <Router>
        
        <Header/>
         
        <Routes>
        <Route exact path="/" element={ <Home />} >
          </Route>

          <Route exact path="/about" element={ <About />} >
          </Route>
          
 
          <Route exact path="/services" element={ < Services />} >
          </Route>

          <Route exact path="/team" element={ < Team />} >
          </Route>

          <Route exact path="/login-signup" element={ < LoginSignup />} >
          </Route>
        </Routes>

           
        <SlidingInfo/>
        
        <Footer/>


      </Router>

      
      
      </div>
  );
}

export default App;

 
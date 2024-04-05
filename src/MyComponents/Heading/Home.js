import React from 'react'
import Internships from "../Internships";
import intern_img from './../../images/background2.jpg';
import Feedback from '../Feedback';
import ContactUs from './ContactUs';
import Review from '../Review';
import './style.css'

export const Home = () => {
  return (
    <div className='home'>
                 
      <div className='home-child'>
          <img className="bcc-img" src={intern_img} alt="" />
          <div className= "home-text">
          <h1 className='text'>Welcome to Internworld</h1>
          </div>
        </div>
    
      <hr />
      <h2>Internship Section</h2>
      <Internships/>
      <Feedback/>
      <Review />
      <ContactUs/>
    </div>
  )
}

 

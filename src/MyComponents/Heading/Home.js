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
          <h1>Welcome to Internworld</h1>
          <p className='home-para'>Internship transforms novices into skilled professionals, unlocking career milestones triumphantly.</p>
          <div className='search-parent'>
          <input
                type="text"
                className="search"
                placeholder="Search"
              
            />
            <button className="search-btn">🔍</button>
            </div>
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

 

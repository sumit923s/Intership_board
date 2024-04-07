import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Footer.css';
import fb from './../images/icon/fb.png'
import insta from './../images/icon/insta.png'
import tt from './../images/icon/tt.png'
import ytube from './../images/icon/ytube.png'
import linkedin from './../images/icon/linkedin.png'
import phone from './../images/icon/phone.png'
import email from './../images/icon/email.png'
 

export const Footer = () => { 
    return (
        <footer>
      <div className="footer-container">
        <div className="left-col">
          <div className="logo"></div>
          <div className="social-media flex ">
            <a href="#"><img src={fb} alt="Facebook" /></a>
            <a href="#"><img src= {insta} alt="Instagram" /></a>
            <a href="#"><img src={tt} alt="Twitter" /></a>
            <a href="#"><img src={ytube} alt="YouTube" /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
          </div>
          <br /><br />
          <p className="rights-text">Copyright © 2024 Created By Sumit Kumar All Rights Reserved.</p>
          <br />
          <p>
              Arya College of Engineering and I.T<br />
            Jaipur, Rajasthan 302028
          </p>
          <br />
          <p>
            <img src={phone} alt="Phone" /> +91-9351870445<br />
            <img src={email} alt="Email" /> ssingh7296003817@gmail.com
          </p>
        </div>
        <div className="right-col">
          <h1 style={{ color: '#fff' }}>Our Newsletter</h1>
          <div className="border"></div>
          <br />
          <p>Enter Your Email to get our News and updates.</p>
          <form className="newsletter-form">
            <input className="txtb" type="email" placeholder="Enter Your Email" />
            <input className="btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </footer>
    )
}
 
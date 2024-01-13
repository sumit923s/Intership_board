import React from 'react';
import './../../CSS/Contactus.css'; // Import your CSS file if needed

export default function ContactUs() {
  return (
    <div className="diffSection" id="contactus_section">
      <p className="contactTitle">Contact Us</p>
      <div className="csec"></div>
      <div className="back-contact">
        <div className="cc">
          <form action="mailto:ssingh7296003817@gmail.com" method="post" encType="text/plain">
            <div className="nameInput">
              <label className='FirstNameLabel'>First Name <span className="imp">*</span></label>
              <label className="lastNameLabel">Last Name <span className="imp">*</span></label>
              <div className="nameInputsContainer">
                <input type="text" name="" className="firstNameInput" style={{ marginRight: '10px', width: '175px' }} required="required" />
                <input type="text" name="lname" className="lastNameInput" style={{ width: '175px' }} required="required" />
              </div>
            </div>
            <label>Email <span className="imp">*</span></label><br />
            <input type="email" name="mail" className="emailInput" style={{ width: '100%' }} required="required" /><br />
            <label>Message <span className="imp">*</span></label><br />
            <input type="text" name="message" className="messageInput" style={{ width: '100%' }} required="required" /><br />
            <label>Additional Details</label><br />
            <textarea name="additional" className="additionalTextarea"></textarea><br />
            <button type="submit" className="csubmit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

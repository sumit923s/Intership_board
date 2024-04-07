import React from 'react';
import '../CSS/Feedback.css';

export default function Feedback() {
  return (
    <> 
      <div className="title2 flex justify-center" id="feedBACK">
        <span>Feedback Section</span>
      </div>
      <div className="feedbox flex justify-center">
        <div className="feed ">
          <form action="mailto:ssingh7296003817@gmail.com" method="post" encType="text/plain">
            <label>Your Name</label><br />
            <input type="text" name="" className="fname " required="required" /><br />
            <label>Email</label><br />
            <input type="email" name="mail" required="required" className="fname "/><br />
            <label>Additional Details</label><br />
            <textarea name="additional"></textarea><br />
            <button type="submit" id="csubmit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

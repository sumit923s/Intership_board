import React from 'react';
import star from './../images/icon/star.png';
import person from './../images/person.jpeg';
import mitful from './../images/icon/makeitfull.png';
import './../CSS/Review.css';

export default function Review() {
  return (
    <>
      <div id="makeitfull">
        <a href="#review_section"><img src={mitful} alt="Make It Full" /></a>
      </div>
      <div className="review">
        <div className="diffSection" id="review_section">
          <p className="review-heading">What the Students Say About Us?</p>
        </div>
        <div className="rev-container">
          <div className="rev-card">
            <div className="identity">
              <img src={person} alt="Person" /><p>Sophie Daniel</p>
              <div className="rating">
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
              </div>
            </div>
            <div className="rev-cont">
              <p id="title">Review:</p>
              <p id="content">
              Using this internship board was a game-changer for my career. The platform offers a diverse range of opportunities, making it easy to find internships tailored to my skills. The user-friendly interface and regular updates kept me engaged. The application process was seamless, and I secured a fantastic internship that aligned perfectly with my career.
              </p>
            </div>
          </div>

          <div className="rev-card">
            <div className="identity">
              <img src={person} alt="Person" /><p>Clayton Clair</p>
              <div className="rating">
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
              </div>
            </div>
            <div className="rev-cont">
              <p id="title">Review:</p>
              <p id="content">
              This internship platform is a must for any student seeking hands-on experience. The variety of listings in different industries is impressive. The detailed job descriptions and easy application process streamlined my search. The personalized dashboard and email alerts ensured I never missed a relevant opportunity.
              </p>
            </div>
          </div>

          <div className="rev-card">
            <div className="identity">
              <img src={person} alt="Person" /><p>Devyn Sethi</p>
              <div className="rating">
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
              </div>
            </div>
            <div className="rev-cont">
              <p id="title">Review:</p>
              <p id="content">
              I couldn't be happier with the internship opportunities I found on this platform. The well-curated listings and filters made it effortless to discover roles matching my interests. The platform's commitment to quality ensured each internship was legitimate and valuable. 
              </p>
            </div>
          </div>
          {/* Repeat the above structure for other review cards */}
        </div>
      </div>
    </>
  );
}

import React from 'react';
import './../CSS/SlidingInfo.css'; // Create a CSS file for styling

export default function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”
        “Your attitude, not your aptitude, will determine your altitude.”
        “If you think education is expensive, try ignorance.”
        “The only person who is educated is the one who has learned how to learn …and change.”
      </div>
    </div>
  );
}

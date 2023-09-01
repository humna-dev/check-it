import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Home() {
  return (
    <div className="homepage">
      <div className="image-container">
        <div className="flip-container">
          <div className="flip-card">
            <div className="front">
              <img className='topimage' src="src/images/BLAHOM+Logo.png" alt="Front Image"  />
            </div>
            <div className="back">  
              <img className='topimage' src="src/images/BLAHOM+Logo.png" alt="Back Image"  />
            </div>
          </div>
        </div>
        </div>

        <img
          className="centered-image"
          src="src/images/Blahom_logo_Final01@3x.png"
          alt="Centered Image"
        />
        
        <div className="background">
          <Link to="/login" className="custom-button">
            LET ME IN
          </Link>
        </div>
     
    </div>
  );
}

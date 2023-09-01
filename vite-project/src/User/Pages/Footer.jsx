import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';


const footerStyle = {
  backgroundColor: 'black',
  padding: '40px 0',
  color: '#CD7F32',
  
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const contentStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '30px',
};

const sectionStyle = {
  marginBottom: '30px',
};

const headingStyle = {
  fontSize: '30px',
  marginBottom: '10px',
  color: '#ff9800',
};

const textStyle = {
  lineHeight: '1.5',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

const listItemStyle = {
  marginBottom: '10px',
};

const linkStyle = {
  color: '#ff9800',
  textDecoration: 'none',
};

const iconStyle = {
  marginRight: '30px',
};

const socialIconStyle = {
  fontSize: '26px',
  marginRight: '35px',
  color: '#CD7F32',
  marginTop: '10px',
};




const bottomStyle = {
  marginTop: '30px',
  textAlign: 'center',
  borderTop: '1px solid #ccc',
  paddingTop: '20px',
};



const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={sectionStyle}>
           <img src="src/images/BLAHOM+Logo.png" alt="" width="120" height="130" />
          </div>

          <div style={sectionStyle}>
            <h3 style={headingStyle}>About Us</h3>
            <p style={textStyle}>Welcome to BLAHOM! We are dedicated to bringing you engaging stories that will captivate your imagination and take you on incredible journeys.
                       </p>
         
          </div>


          <div style={sectionStyle}>
            <h3 style={headingStyle}>Contact Us</h3>
            <p style={textStyle}>
              <FaEnvelope style={iconStyle} />
             blahom@info.com
            </p>
            <p style={textStyle}>
    <FaPhone style={iconStyle} />
    123-456-7890
</p>
          </div>


          <div style={sectionStyle}>
            <h3 style={headingStyle}>JOIN CLUB</h3>
            <ul style={listStyle}>
              
             
             
        <a href="https://www.instagram.com/blahomofficial" style={socialIconStyle} ><FaInstagram /></a>
        <a href="#https://www.facebook.com/people/Blahom/100067095764032/" style={socialIconStyle}><FaFacebook /></a>
        <a href="https://www.tiktok.com/@blahomofficial" style={socialIconStyle}><FaTwitter /></a>

  
            
            </ul>
          </div>
         
        
        </div>
        <hr />
        <div className="footer-bottom">
                <p>BLAHOM | All rights reserved &copy; 2023</p>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
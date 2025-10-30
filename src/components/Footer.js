import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Quick Links */}
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
             <li><Link to="/privacy-policy">Privacy Policy</Link></li>
  <li><Link to="/terms-of-service">Terms of Service</Link></li>
  <li><Link to="/refund-policy">Refund Policy</Link></li>
  <li><Link to="/contact">Contact Information</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <div className="footer-logo">
          <img 
            src={process.env.PUBLIC_URL + "/images/logo.png"} 
            alt="Jill's Cafe Logo"
          />
        </div>
      </div>

      {/* Social Media */}
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/images/facebook.png"} alt="Facebook"/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/images/instagram.png"} alt="Instagram"/>
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/images/pinterest.png"} alt="Pinterest"/>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/images/youtube.png"} alt="YouTube"/>
        </a>
      </div>

      <p className="footer-bottom">© {new Date().getFullYear()} Jill's Cafe. All rights reserved.</p>
    </footer>
  );
}

export default Footer;








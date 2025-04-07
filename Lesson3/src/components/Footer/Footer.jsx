import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h3>eNno</h3>
          <p>A108 Adam Street<br/>
            New York, NY 535022<br/>
            <b>Phone:</b> +1 5589 55488 55<br/>
            <b>Email:</b> info@example.com
          </p>
        </div>
        <div className="footer-center">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
          </ul>
        </div>
        <div className="footer-center">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Follow Us</h4>
          <p>Cres fermentum odio eu feugiat lide par naso tierra videa magna dalerita valies</p>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright: <strong>eNno</strong>. All Rights Reserved</p>
        <p>Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></p>
      </div>
    </footer>
  );
}

export default Footer;
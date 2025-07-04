import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/awakglo.png';

function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt='Awakening Empire Logo' />
                <h3>Awakening Empire & Associates</h3>
              </div>
              
              <p className="footer-tagline">
                Inspiring Generations, Creating Opportunities, and Building a Sustainable Future Together
              </p>
              {/* <div className="footer-social">
                <a target="_blank" rel="noreferrer" href="https://web.facebook.com/awakening.empire.group" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/awakeningempgrp" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/awakening-empire-group/" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div> */}
            </div>
            
            <div className="footer-links">
              <div className="footer-links-column">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <Link spy={true} smooth={true} duration={1000} to="headerbg">
                      <i className="fas fa-chevron-right"></i> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="services" spy={true} smooth={true} duration={1000}>
                      <i className="fas fa-chevron-right"></i> Services
                    </Link>
                  </li>
                  <li>
                    <Link to="about-scroll" spy={true} smooth={true} duration={1000}>
                      <i className="fas fa-chevron-right"></i> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="prescripzone" spy={true} smooth={true} duration={1000}>
                      <i className="fas fa-chevron-right"></i> PrescripZone
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="footer-links-column">
                <h4>Contact Us</h4>
                <ul className="footer-contact-info">
                  <li>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:info@awakeningempire.org">admin@awakeningempire.org</a>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Accra, Ghana, West Africa</span>
                  </li>
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    <a href="tel:+233556037427">+233556037427</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Awakening Empire and Associates. All Rights Reserved.</p>
        </div>
      </div>
      
      <button onClick={() => scroll.scrollToTop(2500)} className="gotop">
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  );
}
export default Footer;

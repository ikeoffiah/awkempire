import React from "react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">We'd love to hear from you</p>
        </div>
        <div className="contact-container modern-contact-container">
          <div className="contact-info modern-contact-info">
            <div className="contact-info-item modern-contact-info-item">
              <div className="contact-info-icon modern-contact-info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-info-content modern-contact-info-content">
                <h3>Our Location</h3>
                <p>123 Business Avenue, Accra, Ghana</p>
              </div>
            </div>
            <div className="contact-info-item modern-contact-info-item">
              <div className="contact-info-icon modern-contact-info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-info-content modern-contact-info-content">
                <h3>Phone Number</h3>
                <p>+233 20 123 4567</p>
              </div>
            </div>
            <div className="contact-info-item modern-contact-info-item">
              <div className="contact-info-icon modern-contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-content modern-contact-info-content">
                <h3>Email Address</h3>
                <p>info@awakeningempire.com</p>
              </div>
            </div>
            <div className="contact-social modern-contact-social">
              <a href="#" aria-label="Facebook" className="contact-social-icon modern-contact-social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="contact-social-icon modern-contact-social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="contact-social-icon modern-contact-social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="contact-social-icon modern-contact-social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="contact-form-container modern-contact-form-container">
            <form action="https://formspree.io/f/xbjepeaa" method="POST" className="contact-form modern-contact-form">
              <div className="form-group modern-form-group">
                <label htmlFor="name" className="form-label modern-form-label">Your Name</label>
                <input type="text" name="name" id="name" className="form-control contact-input modern-contact-input" placeholder="Enter your name" required />
              </div>
              <div className="form-group modern-form-group">
                <label htmlFor="email" className="form-label modern-form-label">Your Email</label>
                <input type="email" name="email" id="email" className="form-control contact-input modern-contact-input" placeholder="Enter your email" required />
              </div>
              <div className="form-group modern-form-group">
                <label htmlFor="subject" className="form-label modern-form-label">Subject</label>
                <input type="text" name="subject" id="subject" className="form-control contact-input modern-contact-input" placeholder="Subject" />
              </div>
              <div className="form-group modern-form-group">
                <label htmlFor="message" className="form-label modern-form-label">Your Message</label>
                <textarea name="message" id="message" className="form-control contact-textarea modern-contact-textarea" placeholder="Type your message..." rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button form-btn modern-form-btn">
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
  
  
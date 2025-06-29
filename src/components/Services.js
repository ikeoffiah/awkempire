import React from "react";
import health from "../assets/health.jpg";
import leadership from "../assets/leadership.jpg";
import study from "../assets/study.jpg";

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Empowering you in every aspect of life</p>
        </div>
        <div className="services-grid modern-services-grid">
          {/* Healthcare Card */}
          <div className="service-card modern-service-card">
            <div className="service-image modern-service-image">
              <img src={health} alt="Healthcare" />
              <div className="service-overlay modern-service-overlay">
                <div className="service-icon modern-service-icon">
                  <i className="fas fa-heartbeat"></i>
                </div>
              </div>
            </div>
            <div className="service-content modern-service-content">
              <h3 className="service-title">Healthcare</h3>
              <p className="service-description">PRESCRIPZONE is a health resource app for checking health, accessing health tips, newsletters, and talking to medical personnel.</p>
              <a href="#" className="service-link modern-service-link">
                <span>Learn More</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* Leadership Card */}
          <div className="service-card modern-service-card">
            <div className="service-image modern-service-image">
              <img src={leadership} alt="Leadership" />
              <div className="service-overlay modern-service-overlay">
                <div className="service-icon modern-service-icon">
                  <i className="fas fa-users-cog"></i>
                </div>
              </div>
            </div>
            <div className="service-content modern-service-content">
              <h3 className="service-title">Leadership</h3>
              <p className="service-description">The ElevateNow Leadership Program empowers aspiring leaders to develop the skills, mindset, and strategies necessary to make a positive impact.</p>
              <a href="#" className="service-link modern-service-link">
                <span>Learn More</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* Education Card */}
          <div className="service-card modern-service-card">
            <div className="service-image modern-service-image">
              <img src={study} alt="Education" />
              <div className="service-overlay modern-service-overlay">
                <div className="service-icon modern-service-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
              </div>
            </div>
            <div className="service-content modern-service-content">
              <h3 className="service-title">Education</h3>
              <p className="service-description">SKILLMAX is the ultimate education app to unlock your potential and gain new skills anytime, anywhere.</p>
              <a href="#" className="service-link modern-service-link">
                <span>Learn More</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

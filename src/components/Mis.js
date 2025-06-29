import React from 'react'
import mis from '../assets/mis.jpg'

function Mis() {
  return (
    <>
    <div
      style={{ marginTop: "15rem", width: "100%", height: "10px" }}
      className="about-scroll"
    ></div>

    <section className="mission-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">What drives us every day</p>
        </div>
        
        <div className="mission-content">
          <div className="mission-text">
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Inspire & Innovate</h3>
                <p>Continually strive to inspire, innovate and motivate to impact generations.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3>Value Creation</h3>
                <p>Achieve our vision through value creation in career development, leadership and transformation services.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h3>Job Creation</h3>
                <p>Set up institutions that provide employment avenues for people, fulfilling our job creation mandate.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-globe-americas"></i>
                </div>
                <h3>Multi-Cultural Environment</h3>
                <p>Provide a multi-cultural environment for people to thrive as a business and corporate organization.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>Global Partnerships</h3>
                <p>Partner with people and environment-focused organizations in the global market.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3>Sustainable Development</h3>
                <p>Satisfy the Sustainable Development Goals (SDGs) as an organization.</p>
              </div>
            </div>
          </div>
          
          <div className="mission-image">
            <img alt="Mission" src={mis} className="mission-img" />
            <div className="image-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Mis
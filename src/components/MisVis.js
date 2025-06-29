import React from "react";
import vis from "../assets/vis.jpg";

function MisVis() {
  return (
    <>
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <section className="vision-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Vision</h2>
            <p className="section-subtitle">Guiding our path forward</p>
          </div>
          
          <div className="vision-content">
            <div className="vision-image">
              <img alt="Vision" src={vis} className="vision-img" />
              <div className="image-overlay"></div>
            </div>
            
            <div className="vision-text">
              <div className="vision-card">
                <div className="vision-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="vision-item">
                  <h3>Creating Purposeful Communities</h3>
                  <p>Awakening Empire and Associates exists to create a world and build communities where everyone can have a sense of purpose.</p>
                </div>
              </div>
              
              <div className="vision-card">
                <div className="vision-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="vision-item">
                  <h3>Leaving a Lasting Legacy</h3>
                  <p>We aim to leave a legacy of practical benefits and give the world an insightful experience that will make the world a better place.</p>
                </div>
              </div>
              
              <div className="vision-card">
                <div className="vision-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="vision-item">
                  <h3>Global Leadership</h3>
                  <p>We strive to be a leading socio-corporate institution across the globe through initiatives and projects that span every sphere of human existence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MisVis;

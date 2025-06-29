import React from 'react';
import mockup from '../assets/mockup.png';
import QRCode from 'react-qr-code';

function Mockup() {
  return (
    <>
      <div id="prescripzone" className="prescripzone-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">PrescripZone</h2>
            <p className="section-subtitle">Your Complete Health Companion</p>
          </div>
          
          <div className="prescripzone-content">
            <div className="prescripzone-info">
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Telemedicine</h3>
                    <p>Chat with professional doctors and medical professionals</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-book-medical"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Health Resources</h3>
                    <p>Find information on diseases, symptoms, and diagnosis</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-pills"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Track Prescriptions</h3>
                    <p>Track your drug prescriptions easily</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-newspaper"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Health Newsletter</h3>
                    <p>Get latest information on health</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-clipboard-list"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Manage Health Data</h3>
                    <p>Manage your allergies and medications</p>
                  </div>
                </div>
              </div>
              
              <div className="download-section">
                <h3>Download the App</h3>
                <p>Scan the QR code to download PrescripZone</p>
                <div className="qr-container">
                  <QRCode 
                    value="https://apkpure.com/prescripzone/org.awakeningempire.prescr" 
                    size={150} 
                    level="H"
                    className="qr-code"
                  />
                </div>
                <a 
                  href="https://apkpure.com/prescripzone/org.awakeningempire.prescr" 
                  className="download-button" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download Now
                </a>
              </div>
            </div>
            
            <div className="prescripzone-mockup">
              <img src={mockup} alt="PrescripZone App" className="mockup-image" />
              <div className="mockup-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mockup;

import React from 'react';
import mockup from '../assets/mockup.png';


function Mockup({ images }) {
  return (
    <>
    <div
      style={{ marginTop: "15rem", width: "100%", height: "10px" }}
      className="about-scroll"
    ></div>

    <div className="container about">
      <div className="raw">
        <div className="col-md-6">
          <h2 className="main-title about-h2 miss">Prescripzone</h2>
          <p className="main-p">
            <ul>
                <li>Telemedicine: Chat with professional doctors and medical professionals. </li>
                <li>Health resource: Find information on diseases, symptoms, and diagnosis. </li>
                <li>Track prescription: Track your drug prescriptions. </li>
                <li>Health Newsletter: Get latest information on health.</li>
                <li>Manage allergy and medications: Manage your allegies and medications. </li>
            </ul>
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img alt="about" src={mockup} className='presc-image' />
        </div>
      </div>
    </div>
  </>
  );
}

export default Mockup;

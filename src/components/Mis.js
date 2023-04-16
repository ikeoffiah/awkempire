import React from 'react'
import mis from '../assets/mis.jpg'

function Mis() {
  return (
    <>
    <div
      style={{ marginTop: "15rem", width: "100%", height: "10px" }}
      className="about-scroll"
    ></div>

    <div className="container about">
      <div className="raw">
      <div className="col-md-6 text-center">
          <img alt="about" src={mis} style={{ height:'400px', width:'600px',marginRight:'40px', borderRadius:'10px'}} />
        </div>
        <div className="col-md-6">
          <h2 className="main-title about-h2">Mission</h2>
          <p className="main-p">
            <ul>
                <li>Awakening Empire and Associates will continually strive to inspire ,innovate and motivate to impact generations</li>
                <li>Awakening Empire and Associates seek to achieve its vision through through value creation in the form of career development,leadership and transformation services </li>
                <li>Awakening Empire and Associates will gear towards setting up institutions that provides employment avenues for people thereby fulfilling our job creation mandate </li>
                <li>Awakening Empire and Associates will strive to provide a multi-culture environment (Hospitality) for people to thrive as a business  and a corporate organisation</li>
                <li>Awakening Empire and Associates will commit to partner with people and environment focused organisations in the global market </li>
                <li>Awakening Empire and Associates is an organisation or group will satisfy the Sustainable Development Goals (SDGs)</li>
            </ul>
          </p>
        </div>
        
      </div>
    </div>
  </>
  )
}

export default Mis
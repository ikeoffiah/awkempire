import React from 'react'
import vis from '../assets/vis.jpg'

function MisVis() {
  return (
    <>
    <div
      style={{ marginTop: "15rem", width: "100%", height: "10px" }}
      className="about-scroll"
    ></div>

    <div className="container about">
      <div className="raw">
        
        <div className="col-md-6">
          <h2 className="main-title about-h2">Vision</h2>
          <p className="main-c">
            <ul>
                <li>Awakening Empire and Associates (Awakening empire group) exist to create a world and build communities where everyone can have a sense of purpose</li>
                <li>Awakening empire and associates aims to leave a legacy that of a more a practical benefits and to give the world an insightful experience and will go a long way to make the world a better place </li>
                <li>Awakening Empire and Associates aims to be a leading socio-corporate institution across the globe through our initiatives and projects cutting across every sphere of the human existence</li>
            </ul>
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img alt="about" src={vis} style={{ height:'400px', width:'600px',marginRight:'40px', borderRadius:'10px'}} />
        </div>
      </div>
    </div>
  </>
  )
}

export default MisVis
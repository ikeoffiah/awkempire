import React from "react";
import kirch from "../assets/kirch.jpeg";
import far from "../assets/farouk.jpeg";
import christ from "../assets/christ.jpeg";
import emma from "../assets/emma.jpeg";
import prince from '../assets/prince.jpeg'
import bridget from '../assets/bridget.jpeg'
import pius from '../assets/pius.jpeg'

function Team() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">Team</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row team">
            <div className="col-md-4 mb-2">
              <div>
                <img
                  src={kirch}
                  alt="img"
                  style={{ height: "400px", width: "400px" }}
                />
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div>
                <img
                  src={far}
                  alt="img"
                  style={{ height: "400px", width: "400px" }}
                />
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div>
                <img
                  src={christ}
                  alt="img"
                  style={{ height: "400px", width: "400px" }}
                />
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div>
                <img
                  src={emma}
                  alt="img"
                  style={{ height: "400px", width: "400px" }}
                />
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div>
                <img
                  src={prince}
                  alt="img"
                  style={{ height: "400px", width: "400px" }}
                />
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div>
                <img
                  src={bridget}
                  alt="img"
                  style={{ height: "400px", width: "400px" }}
                />
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div>
                <img
                  src={pius}
                  alt="img"
                  style={{ height: "400px", width: "400px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

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
      <div className="">
        <div className="">
          <div className=" team">
            <div className="ind mb-2">
              <div>
                <img
                  src={kirch}
                  alt="img"
                  className='klm'
                />
              </div>
            </div>
            <div className="ind mb-2">
              <div>
                <img
                  src={far}
                  alt="img"
                  className='klm'
                />
              </div>
            </div>
            <div className="ind mb-2">
              <div>
                <img
                  src={christ}
                  alt="img"
                  className='klm'
                />
              </div>
            </div>
            <div className="ind mb-2">
              <div>
                <img
                  src={emma}
                  alt="img"
                  className='klm'
                />
              </div>
            </div>

            <div className="ind mb-2">
              <div>
                <img
                  src={prince}
                  alt="img"
                  className='klm'
                />
              </div>
            </div>

            <div className="ind mb-2">
              <div>
                <img
                  src={bridget}
                  alt="img"
                  className='klm'
                />
              </div>
            </div>

            <div className="ind mb-2">
              <div>
                <img
                  src={pius}
                  alt="img"
                  className='klm'
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

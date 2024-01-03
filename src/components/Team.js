import React from "react";
import kirch from "../assets/pic10.jpeg";
import far from "../assets/pic2.jpeg";
import christ from "../assets/pic3.jpeg";
import emma from "../assets/pic4.jpeg";
import prince from '../assets/pic5.jpeg';
import bridget from '../assets/pic6.jpeg';
import pius from '../assets/pic7.jpeg';
import pic8 from '../assets/pic8.jpeg';
import pic9 from '../assets/pic9.jpeg';
import pic10 from '../assets/pic1.jpeg';

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
                  src={pic8}
                  alt="img"
                  className='klm'
                />
              </div>
            </div>

            <div className="ind mb-2">
              <div>
                <img
                  src={pic9}
                  alt="img"
                  className='klm'
                />
              </div>
            </div>

            <div className="ind mb-2">
              <div>
                <img
                  src={pic10}
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

import { Link } from "react-scroll";
import logo from '../assets/awakglo.png'
import {useState} from 'react'


function Navbar() {
  const [vas, setVas] = useState(true)
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });
  function openBar() {
    const bar = document.querySelector(".bar");

    console.log(bar)
    setVas(false)
    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link
          spy={true}
          smooth={true}
          duration={1000}
          to="headerbg"
          style={{ cursor: "pointer", display:'flex', alignItems:'center' }}
        >
          <img src={logo} alt='' className="log"/>
          <div style={{fontSize:'20px', fontWeight:'700'}}>
            <div>Awakening Empire</div>
            <div>and Associates</div>
          </div>
        </Link>
      
        <ul className={vas?'vac':'bar' }>
          <li>
            <Link
              onClick={openBar}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              to="headerbg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={openBar}
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              onClick={openBar}
              to="about-scroll"
              spy={true}
              smooth={true}
              duration={1000}
              activeClass="active"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={openBar}
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="button" onClick={openBar}>
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

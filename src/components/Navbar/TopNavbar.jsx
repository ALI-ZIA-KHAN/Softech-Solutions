import React from "react";
import { Link } from "react-scroll";
import logo from "../../images/logo.png";
const TopNavbar = () => {
  const opengithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <nav>
        <Link to="main" className="logo" smooth={true} duration={2000}>
          <img src={logo} alt="" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="main" className="active" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={1000}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={1000}>
              Services
            </Link>
          </li>
          <li>
            <Link to="subscribe" smooth={true} duration={1000}>
              Subscribe
            </Link>
          </li>
          <li>
            <Link to="#" smooth={true} duration={1000}>
              Contact Us
            </Link>
          </li>
        </ul>
        <span
          onClick={() => opengithub("https://github.com/ALI-ZIA-KHAN")}
          className="hey"
        >
          GitHub
        </span>
      </nav>
    </div>
  );
};

export default TopNavbar;

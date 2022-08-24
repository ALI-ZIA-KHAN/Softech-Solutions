import React from "react";
import { Link } from "react-scroll";
import TopNavbar from "../Navbar/TopNavbar";
const Header = () => {
  const opengithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div id="main">
      <TopNavbar />
      <div className="name">
        <h1>
          Softech <span>Solutions</span> Limited
        </h1>
        <p className="details">
        We try our best, and we make sure we deliver the best
         Expanding possibilities of better tomorrow
        </p>
        <div className="header-btns">
          <Link className="cv-btn">Get in touch with us!</Link>
          {/* <span
            onClick={() => opengithub("https://github.com/irtaza9")}
            className="cv-btn1"
          >
            GitHub
          </span> */}
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  );
};

export default Header;

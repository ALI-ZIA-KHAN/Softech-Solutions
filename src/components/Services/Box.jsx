import React from "react";
import { Link } from "react-scroll";

export const Box1 = (props) => {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="s-b-text">
        <p className="details">
          We have dedicated resources which caters of modern web developmemnt
          dealing in MERN, MEAN and WordPress Stack 
        </p>
        <Link to="#" className="cv-btn">
          {props.button}
        </Link>
      </div>
    </div>
  );
};


export const Box2 = (props) => {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="s-b-text">
        <p className="details">
          Our vista also enculcates the latest and trendy User Interfaces
          and User Resources provision for attracting the users
        </p>
        <Link to="#" className="cv-btn">
          {props.button}
        </Link>
      </div>
    </div>
  );
};


export const Box3 = (props) => {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="s-b-text">
        <p className="details">
          We here provides Search Engine Optimization,Social Media 
          Marketing, AdsSense Services under domain of Digital Marketing
        </p>
        <Link to="#" className="cv-btn">
          {props.button}
        </Link>
      </div>
    </div>
  );
};





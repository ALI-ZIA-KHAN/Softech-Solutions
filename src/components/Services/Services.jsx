import React from "react";
import {Box1,Box2,Box3} from "./Box";
import image1 from "../../images/s1.png"
import image2 from "../../images/s2.png"

const Services = () => {
  return (
    
    <div id="services">
      <div className="s-heading">
        <h1>Services</h1>
        <p>Here are some services we Provide</p>
      </div>
      <div className="b-container">
        <Box1 image={image1} alt="image1" button="Web Development"/>
        <Box2 image={image2} alt="image2" button="UI/UX"/>
        <Box3 image={image1} alt="image1" button="Digital Marketing"/>
      </div>
    </div>
  );
};

export default Services;

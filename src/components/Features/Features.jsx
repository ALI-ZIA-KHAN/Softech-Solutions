import React from "react";
import featureImg from "../../images/Frame 19.png";
const Features = () => {
  return (
    <>  

      <div className="f-heading">
        <h1>Connect with us</h1>
        <p>To reshape your realm </p>
      </div>
      <div id="features">
        <div className="features-model">
          <img src={featureImg} alt="" />
        </div>
        <div className="features-text">
          <h2>Who we are? </h2>
          <h3>
            Little <span>About </span> Us!!!
          </h3>
          <p>

          Since our company's inception in 2016, we have aimed to be the
          industry leader in accomplishing principled inventions and 
          transforming them into cost-effective IT solutions that support 
          our clients' businesses. By abiding by fundamental principles,
          we work to enrich and improve our services so that we can deliver 
          real value to our clients.
          </p>
          {/* <button>View More Features</button> */}
        </div>
      </div>
    </>
  );
};

export default Features;

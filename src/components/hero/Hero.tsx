import React from "react";
import "./Hero.css";
import leaves1 from "../../assets/leaves1.png";
import leaves2 from "../../assets/leaves2.png";
import leaves3 from "../../assets/leaves3.png";
const Hero: React.FC = () => {
  return (
    <div className="container">
      <div className="b">
        <img className="b3" src={leaves3} alt="" />
        <img src={leaves2} alt="" />
        <div className="b1">
          <h1>Who we are and what we do</h1>
          <p>
            Here you can find a lot of interesting and useful information that
            you need in gardening and creating a beautiful garden
          </p>
        </div>
        <img className="b2" src={leaves1} alt="" />
      </div>
    </div>
  );
};

export default Hero;

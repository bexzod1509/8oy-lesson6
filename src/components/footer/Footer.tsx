import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="e">
          <div className="e1">
            <p>ALL PRODUCTS</p>
            <p>ABOUT SEEDRA</p>
            <p>OUR BLOG</p>
          </div>
          <img src={logo} alt="" />
          <div className="e1">
            <p>Terms&Conditions</p>
            <p style={{ border: "none" }}>Privacy Policy</p>
          </div>
        </div>
        <div className="e2">
          <div className="e3">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
          </div>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

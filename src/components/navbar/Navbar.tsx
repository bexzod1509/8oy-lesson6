import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import links from "../../assets/links.png";
import search from "../../assets/search.png";
import cart from "../../assets/cart.png";
const Navbar: React.FC = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
          <div className="a">
            <NavLink to={"/"}>ALL PRODUCTS</NavLink>
            <NavLink to={"/"}>ABOUT SEEDRA</NavLink>
            <NavLink to={"/"}>OUR BLOG</NavLink>
            <NavLink to={"/contact"}>CONTACTS</NavLink>
          </div>
          <div className="a1">
            <img src={links} alt="" />
            <div className="a2">
              <img src={search} alt="" />
              <input type="search" placeholder="Search" name="" id="" />
            </div>
            <img src={cart} alt="" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assests/travel.jpg";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About Us</a>
    </p>
    <p>
      <a href="#vision">Our Vision</a>
    </p>
    <p>
      <a href="#partners">Our Partners</a>
    </p>
    <p>
      <a href="#ticket">Book Your Ticket</a>
    </p>
    <p>
      <a href="#footer">Contact Us</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="trave__navbar">
      <div className="trave__navbar-links">
        <div className="trave__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="trave__navbar-links_container">
          <Menu />
        </div>
        
      </div>

      <div className="trave__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="trave__navbar-menu_container scale-up-center">
            <div className="trave__navbar-menu_conatiner-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

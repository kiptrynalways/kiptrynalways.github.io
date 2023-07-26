import React from "react";
import "./header.css";

import hero from "../../assests/hero.mp4";

const Header = () => {
  return (
    <div className="trave__header section__padding" id="home">
      <div className="trave__header-image">
        <video src={hero} type="video/mp4">
          {" "}
        </video>
      </div>
      <div className="travel__header">
        <div>
          <h3> WELCOME TO TRAVE. </h3>
        </div>
        <div>
          <h4>
            Nigeria’s leading transportation platform. A more reliable, unified,<br></br> easy to use platform that works for every traveller.
            Making everyday better.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { Fragment } from "react";
import {Link} from "react-router-dom"
import ReactDom from "react-dom";
import "./sideMenu.css";

//svg images

import altitude from "../assets/altitude.svg";
import animals from "../assets/animals.svg";
import elephant from "../assets/elephant.svg";
import graduate from "../assets/graduate.svg";
import health from "../assets/healthcare-and-medical.svg";
import holidays from "../assets/holidays.svg";
import clapperCard from "../assets/social-media.svg";
import lantern from "../assets/lantern.svg";
import people from "../assets/people.svg";
import Taj from "../assets/taj-mahal.svg";

export default function SideMenu() {
  return (
<Fragment>
<div className="sideMiniMenu">
  <Link to="#">
    <center>
      <div className="svgImage1"></div>{" "}
    </center>
  </Link>
  <Link to="#">
    <center>
      <div className="svgImage2"></div>{" "}
    </center>
  </Link>
  <Link to="#">
    <center>
      <div className="svgImage3">
        <img src={animals} alt="" width="35px" height="35px" />
      </div>{" "}
    </center>
  </Link>
  <Link to="#">
    <center>
      <div className="svgImage4">
        <img src={clapperCard} alt="" width="40px" height="40px" />
      </div>{" "}
    </center>
  </Link>
  <Link to="#">
    <center>
      <div className="svgImage5">
        <img src={health} alt="" width="35px" height="35px" />
      </div>{" "}
    </center>{" "}
  </Link>
  <Link to="#">
    <center>
      <div className="svgImage6">
        <img src={graduate} alt="" width="40px" height="40px" />
      </div>{" "}
    </center>
  </Link>
  <Link to="#">
    <center>
      <div className="svgImage7">
        <img src={Taj} alt="" width="40px" height="40px" />
      </div>{" "}
    </center>
  </Link>
  <Link to="#">
    <center>
      <div className="svgImage8">
        <img src={people} alt="" width="40px" height="40px" />
      </div>{" "}
    </center>
  </Link>
  <Link to="#">
    <center>
      <div className="svgImage9">
        <img src={elephant} alt="" width="40px" height="40px" />
      </div>{" "}
    </center>{" "}
  </Link>
  <Link to="#">
    <center>
      <div className="last-child">
        <img src={lantern} alt="" width="40px" height="40px" />
      </div>{" "}
    </center>{" "}
  </Link>
</div>
</Fragment>
)
};
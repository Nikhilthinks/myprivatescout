import React, {Fragment}from 'react'
import {Link} from 'react-router-dom'
import instagram from "../assets/instagram.png"
import scoutout from "../assets/scoutout.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"

export default function Footer() {
    return (
        <Fragment>
            <div className="footer">
        <ul className="list-group list-group-horizontal">
          <li style={{ marginLeft: "10px", marginTop: "5px"}}>
            <Link to="#" style = {{color: 'inherit', textDecoration: 'inherit'}}> About Us</Link>
          </li>
          <li style={{ marginLeft: "10px", marginTop: "5px" }}>
          <Link to="#" style = {{color: 'inherit', textDecoration: 'inherit'}}>Terms & Conditions</Link>
          </li>
          <li style={{ marginLeft: "10px", marginTop: "5px" }}>
          <Link to="#" style = {{color: 'inherit', textDecoration: 'inherit'}}>Social Network</Link>
          </li>
          <li style={{ marginLeft: "10px", marginTop: "5px" }}>
          <Link to="#" style = {{color: 'inherit', textDecoration: 'inherit'}}> Partner with us</Link>
          </li>
          <li style={{ marginLeft: "10px", marginTop: "5px" }}>
          <Link to="#" style = {{color: 'inherit', textDecoration: 'inherit'}}> Grievance policy</Link>
          </li>
          <li className = "socialFooter" style={{ marginLeft: "50%", marginTop: "5px" }}>
          <Link to="#" style = {{color: 'inherit', textDecoration: 'inherit'}}><img src = {instagram} width='20px' /></Link>
          </li>
          <li className = "socialFooter" style={{ marginLeft: "10px", marginTop: "5px" }}>
          <Link to="#" style = {{color: 'inherit', textDecoration: 'inherit'}}><img src = {scoutout} width='20px' /></Link>
          </li>
          <li className = "socialFooter" style={{ marginLeft: "5px", marginTop: "5px" }}>
          <Link to="#" style = {{color: 'inherit', textDecoration: 'inherit'}}><img src = {facebook} width='20px' /></Link>
          </li>
          <li className = "socialFooter" style={{ marginLeft: "5px", marginTop: "5px" }}>
          <Link to="#" style = {{color: 'inherit', textDecoration: 'inherit'}}><img src = {twitter} width='20px' /></Link>
          </li>
        </ul>
      </div>
        </Fragment>
    )
}

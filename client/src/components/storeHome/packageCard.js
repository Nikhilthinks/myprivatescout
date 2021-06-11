import React from "react";
import ReactDom from "react-dom"
import packageImage from "../../assets/kochi.jpg"

function PackageCard () {

    return(
        <div className = "pkgCardDiv">
        <div className = "pkgHead">
            <div className = "avatarPackage"><div className = "avatarImage">N</div>
        </div>
        </div>
        <div className = "pkgBody">
            < img src = {packageImage} alt="" width = {254} height = {228} />
        </div>
        <div className = "pkgInfo">
            <h5>Hover Here</h5>
            <div className = "hoverText">
            <p id="CardText">Some Random Text Some Random Text Some Random Text Some Random Text</p>
            </div>
        </div>
        </div>

    )
}

export default PackageCard;
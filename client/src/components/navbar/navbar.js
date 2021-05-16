import React from "react"
import ReactDOM from "react-dom"
import Search from "./search"
import logo from "../../assets/logo.png"
function NavbarApp (){
    return (
        <div className = "MainNav" >
        <div className = "navbarBox">
        <div className = "search-box"><Search /></div>
        <div className = "navbar-menu">
            <ul className = "list-group list-group-horizontal">
                <li style = {{marginLeft:"10px"}}>Account</li>
                <li style = {{marginLeft:"10px"}}>Cart</li>
                <li style = {{marginLeft:"10px"}}>Settings</li>
            </ul>
            </div>
            <div className = "logo-box">
               <a href = "/"> <img src ={logo} alt = "logo" style = {{width: "40px", height: "50px", paddingBottom: "10px"}} /></a>
            </div>
        </div>
        </div>
    )
}

export default NavbarApp;
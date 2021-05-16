import React, { Fragment, useState } from "react";
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import "../css/authform.css";
import {setAlert} from '../actions/alert'
import PropTypes from 'prop-types'
import {register} from '../actions/auth'
import { profile_url } from "gravatar";
import {login} from "../actions/auth"
import instagram from "../assets/instagram.png"
import scoutout from "../assets/scoutout.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import Footer from './footer'

function AuthForm (props) {
    var [state, setState] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    })

    const {name, email, password, password2} = formData

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            props.setAlert('Passwords do not match', 'danger')
        }
        else {
          props.register({name, email, password})
      }
    }

    const{ loginEmail, loginPassword } = loginData

    const onCredChange = e => setLoginData({...loginData, [e.target.name]: e.target.value})

    const login = e => {
        e.preventDefault();
        props.login(loginEmail, loginPassword)
    }

    return (
      <Fragment>
        <div className = "formBody" >
        <div classsName = "authForm">
        <div
          className={
            state ? "right-panel-active container" : "container"
          }
          id="container"
        >
          <div className="form-container sign-up-container">
            <form
            onSubmit={(e) => onSubmit(e)}
             >
              <h1>Create Account</h1>
              <span>
                We are glad to have you with us
                <span className="heart-emoji">❤</span>
              </span>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                required
                minLength="6"
              />
              <input
                type="password"
                placeholder=" Re-enter Password"
                name="password2"
                value={password2}
                onChange={(e) => onChange(e)}
                required
              />
              <input type="submit" value="Sign Up" className="button" />
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form
             onSubmit={(e) => login(e)}
            >
              <h1>Sign In</h1>
              <span>
                let's explore new locations together{" "}
                <span className="emoji">🧳</span>{" "}
              </span>
              <input
                type="email"
                placeholder="Email"
                name="loginEmail"
                value = {loginEmail}
                onChange={(e) => onCredChange(e)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="loginPassword"
                value = {loginPassword}
                onChange={(e) => onCredChange(e)}
                required
              />
              <a href="#">Forgot your password?</a>
              <input type="submit" value="Login" className="button" />
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Sign In</h1>
                <p>
                  We missed you a lot since your last visit, Sign In here and
                  let's catch up
                </p>
                <button
                  onClick={() => setState(false)}
                  className="changeForm"
                  id="signIn"
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hey, there!</h1>
                <p>
                  Join us, and let us bring you the world's best travel
                  experience at your finger tips
                </p>
                <button
                   onClick={() => setState(true)}
                  className="changeForm"
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className = "footerAuth">
        <Footer />
      </div>
      </Fragment>
    );
        }

AuthForm.propTypes = {
    setAlert:PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, {setAlert, register, login})(AuthForm);

import React, { Fragment } from "react";
import axios from "axios";
import {Redirect} from "react-router-dom"

import "../css/authform.css";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.login = this.login.bind(this);
    this.pageState = this.pageState.bind(this)
    this.state = {
      active: false,
      name: "",
      email: "",
      password: "",
      password2: "",
      token: localStorage.getItem('token'),
      isAuthenticated : null,
      loading: true,
      user: null
    };
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  export pageState() {
    const state = this.state
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  async onSubmit(e) {
    e.preventDefault();
    const { password, password2, name, email } = this.state;
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      const newUser = { name, email, password };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = newUser;
        const res = await axios.post(
          "http://localhost:5500/api/users",
          body,
          config
        );
        console.log(res);
      } catch (err) {
        console.log("Crashed!");
      }
    }
  }

  async login(e) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const loginUser = { email, password };
      const config = {
        headers: {
          "Content-Type": "application/json",
        }
      };
      const body = loginUser;
      const res = await axios.post(
        "http://localhost:5500/api/auth",
        body,
        config
      );
      this.setState({
        token: res.data.token,
        isAuthenticated: true,
        loading: false
      })
      console.log(res)
      console.log(this.state)


      if(this.state.isAuthenticated) {
       window.location.href = '/dashboard'
      }
    } catch (err) {
      console.log(err.message);
      this.setState({
        token: localStorage.removeItem('token')
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div
          className={
            this.state.active ? "right-panel-active container" : "container"
          }
          id="container"
        >
          <div className="form-container sign-up-container">
            <form onSubmit={(e) => this.onSubmit(e)}>
              <h1>Create Account</h1>
              <span>
                We are glad to have you with us
                <span className="heart-emoji">❤</span>
              </span>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => this.onChange(e)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => this.onChange(e)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => this.onChange(e)}
                required
                minLength="6"
              />
              <input
                type="password"
                placeholder=" Re-enter Password"
                name="password2"
                onChange={(e) => this.onChange(e)}
                required
              />
              <input type="submit" value="Sign Up" className="button" />
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={(e) => this.login(e)}>
              <h1>Sign In</h1>
              <span>
                let's explore new locations together{" "}
                <span className="emoji">🧳</span>{" "}
              </span>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => this.onChange(e)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => this.onChange(e)}
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
                  onClick={this.toggleClass}
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
                  onClick={this.toggleClass}
                  className="changeForm"
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AuthForm;

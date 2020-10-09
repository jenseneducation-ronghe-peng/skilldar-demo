import React, { Component } from "react";
import "../css/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="text">
          <h1 className="hash">#</h1>
          <h4>Browse Skills</h4>
        </div>
        <div className="contact">
          <div className="instagram"></div>
          <div className="twitter"></div>
          <div className="loginDiv">
            <h3 className="loginText" style={{ color: "#85b0bd" }}>
              Login
            </h3>
            <div className="login"></div>
          </div>
        </div>
      </div>
    );
  }
}

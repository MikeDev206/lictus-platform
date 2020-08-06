import React, { Component } from "react";
import logo from '../../assets/SVG/Logos/L-white.svg'
import welcome from "../../assets/SVG/Icons/bienvenido.svg";

class LoginWrapper extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <img src={logo} alt="logo" />
        <img id="welcome" src={welcome} alt="welcome" />
      </div>
    );
  }
}

export default LoginWrapper;

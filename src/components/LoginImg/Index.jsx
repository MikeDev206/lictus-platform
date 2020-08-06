import React, { Component } from "react";
import completeLogo from "../../assets/Images/complete-white-logo.png";

class LoginImg extends Component {
  render() {
    return (
      <div className="login-img">
        <div className="filter">
          <img
            className="complete-logo"
            src={completeLogo}
            alt="complete-logo"
          />
        </div>
      </div>
    );
  }
}

export default LoginImg;

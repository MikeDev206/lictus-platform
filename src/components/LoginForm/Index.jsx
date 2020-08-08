import React, { Component } from "react";
import LoginWrapper from "../LoginWrapper/Index";
import ToggleAccountButton from "../ToggleAccountButton/Index";
import Login from "./Login/Index";
import Register from "./Register/Index";

class LoginForm extends Component {
 

  render() {
    return (
      <div>
        <ToggleAccountButton />
        <div className="wrapper toggle">
          <LoginWrapper />
          <Login />
          <Register/>
        </div>
      </div>
    );
  }
}

export default LoginForm;

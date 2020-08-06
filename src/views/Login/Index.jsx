import React from "react";
import LoginForm from "../../components/LoginForm/Index";
import LoginImg from "../../components/LoginImg/Index";

function Login() {
  return (
    <div className="container">
      <div>
        <LoginForm />
      </div>
      <div>
        <LoginImg />
      </div>
    </div>
  );
}

export default Login;

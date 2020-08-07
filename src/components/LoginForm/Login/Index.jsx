import React, { Component } from "react";
import user from "../../../assets/SVG/Icons/user.svg";
import password from "../../../assets/SVG/Icons/password.svg";

class Login extends Component {
  render() {
    return (
      <div class="form">
        <h3>Iniciar Sesión</h3>
        <form action="#">
          <div className="user-name welcome-icons">
            <img src={user} alt="user" />
            <input type="text" placeholder="Usuario" name="usuario" />
          </div>
          <div className="password welcome-icons">
            <img src={password} alt="psswd" />
            <input type="password" name="contraseña" placeholder="Contraseña" />
          </div>
        </form>
        <span className="reset-passwd">¿Olvidaste tu contraseña?</span>
        <input type="submit" value="Iniciar Sesión" />
      </div>
    );
  }
}

export default Login;

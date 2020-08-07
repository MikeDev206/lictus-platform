import React, { Component } from "react";
import user from "../../../assets/SVG/Icons/user.svg";
import password from "../../../assets/SVG/Icons/password.svg";
import mail from "../../../assets/SVG/Icons/mail.svg";

class Register extends Component {
  render() {
    return (
      <div class="form">
        <h3>Registrarse</h3>
        <form>
          <div className="user-name welcome-icons">
            <img src={user} alt="user" />
            <input
              type="text"
              placeholder="Nombre de usuario * "
              name="usuario"
            />
          </div>
          <div className="e-mail welcome-icons">
            <img src={mail} alt="email" />
            <input
              type="email"
              placeholder="Correo electrónico * "
              name="email"
            />
          </div>
          <div className="e-mail welcome-icons">
            <img src={mail} alt="email" />
            <input
              type="email"
              placeholder="Confirmar correo * "
              name="confirm-email"
            />
          </div>
          <div className="password welcome-icons">
            <img src={password} alt="psswd" />
            <input
              type="password"
              placeholder="Contraseña * "
              name="contraseña"
            />
          </div>
          <div className="password welcome-icons">
            <img src={password} alt="psswd" />
            <input
              type="password"
              placeholder="Confirmar contraseña * "
              name="contraseña"
            />
          </div>
        </form>
        <input type="submit" value="Registrarse" />
      </div>
    );
  }
}

export default Register;

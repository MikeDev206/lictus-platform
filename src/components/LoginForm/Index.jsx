import React, { Component } from "react";
import user from "../../assets/SVG/Icons/user.svg";
import mail from "../../assets/SVG/Icons/mail.svg";
import password from "../../assets/SVG/Icons/password.svg";
import LoginWrapper from "../LoginWrapper/Index";

class LoginForm extends Component {
  render() {
    return (
      <div className="wrapper">
        <div class="toggle">
          <span> Crea tu cuenta </span>
        </div>
        <div className="">
          <LoginWrapper />
        </div>
        <div class="form">
          <h3>Iniciar Sesión</h3>
          <form action="#">
            <div className="user-name welcome-icons">
              <img src={user} alt="user" />
              <input
                type="text"
                placeholder="Usuario"
                name="Usuario"
                required
              />
            </div>
            <div className="password welcome-icons">
              <img src={password} alt="psswd" />
              <input type="password" placeholder="Contraseña" required />
            </div>
          </form>
          <span className="reset-passwd">¿Olvidaste tu contraseña?</span>
          <button>Iniciar Sesión</button>
        </div>

        <div class="form">
          <h3>Registrarse</h3>
          <form action="./php/registro-backend.php" method="post">
            <div className="user-name welcome-icons">
              <img src={user} alt="user" />
              <input
                type="text"
                placeholder="Nombre de usuario * "
                name="name"
                required
              />
            </div>
            <div className="e-mail welcome-icons">
              <img src={mail} alt="email" />
              <input
                type="email"
                placeholder="Correo electrónico * "
                name="email"
                required
              />
            </div>
            <div className="e-mail welcome-icons">
              <img src={mail} alt="email" />
              <input
                type="email"
                placeholder="Confirmar correo * "
                name="confirm-email"
                required
              />
            </div>
            <div className="password welcome-icons">
              <img src={password} alt="psswd" />
              <input
                type="password"
                placeholder="Contraseña * "
                name="password"
                required
              />
            </div>
            <div className="password welcome-icons">
              <img src={password} alt="psswd" />
              <input
                type="password"
                placeholder="Confirmar contraseña * "
                name="password"
                required
              />
            </div>
          </form>
          <button>Registrarse</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;

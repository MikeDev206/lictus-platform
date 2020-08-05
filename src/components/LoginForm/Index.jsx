import React, { Component } from "react";
import logo from "../../assets/SVG/Logos/L-white.svg";
import welcome from "../../assets/SVG/Icons/bienvenido.svg";
import user from "../../assets/SVG/Icons/user.svg";
import mail from "../../assets/Icons/mail-icon.png";
import password from "../../assets/Icons/psswd-icon.png";

class LoginForm extends Component {
  render() {
    return (
      <div className="container">
        <img src={logo} alt="logo" />
        <img src={welcome} alt="welcome" />
        <div class="toggle">
          <span> Crea tu cuenta </span>
        </div>
        {/* <!--formulario de inicio de sesión--> */}
        <div class="form">
          <h2>Iniciar Sesión</h2>
          <form action="#">
            <div className="user-name">
              <img src={user} alt="user" />
              <input
                type="text"
                placeholder="Usuario"
                name="Usuario"
                required
              />
            </div>
            <div className="password">
              <img src={password} alt="psswd" />
              <input type="password" placeholder="Contraseña" required />
            </div>
          </form>
          <button>Iniciar Sesión</button>
        </div>

        {/* <!--formulario de inicio de sesión-->

      <!--formulario de registro--> */}

        <div class="form">
          <h2>Registrarse</h2>
          <form action="./php/registro-backend.php" method="post">
            <div className="user-name">
              <img src={user} alt="user" />
              <input
                type="text"
                placeholder="Nombre de usuario * "
                name="name"
                required
              />
            </div>
            <div className="e-mail">
              <img src={mail} alt="email" />
              <input
                type="email"
                placeholder="Correo electrónico * "
                name="email"
                required
              />
            </div>
            <div className="e-mail">
              <img src={mail} alt="email" />
              <input
                type="email"
                placeholder="Confirmar correo * "
                name="confirm-email"
                required
              />
            </div>
            <div className="password">
              <img src={password} alt="psswd" />
              <input
                type="password"
                placeholder="Contraseña * "
                name="password"
                required
              />
            </div>

            <div className="password">
              <img src={password} alt="psswd" />
              <input
                type="password"
                placeholder="Confirmar contraseña * "
                name="password"
                required
              />
            </div>
            <button>Registrarse</button>
          </form>
        </div>

        {/* <!--formulario de registro--> */}

        <div class="reset-passwd">
          <h3> ¿Olvidaste tu contraseña?</h3>
        </div>
      </div>
    );
  }
}

export default LoginForm;

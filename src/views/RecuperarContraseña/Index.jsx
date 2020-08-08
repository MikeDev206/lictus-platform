import React, { Component } from "react";
import logoRed from "../../assets/Images/lictus-navlogo-red.png";
import email from "../../assets/Icons/mail-icon.png";
import FormInput from "../../components/Input/Index";

class RecuperarContraseña extends Component {
  render() {
    return (
      // unsend form
      <div className="container">
        <div className="navigation-warning">
          <nav className="navitem">Recuperar Contraseña</nav>
        </div>
        <div className="section">
          <img id="logo-passwd" src={logoRed} alt="logo-red" />
          <section>
            <h2>¿Olvidaste tu contraseña?</h2>
            <div className="instructions">
              <p>
                Introduce el mail con el que accedes a tu área de trabajo. En
                unos minutos recibirás, en ésta misma cuenta de correo,
                instrucciones para recuperar tus claves de acceso.
              </p>
            </div>
            <div className="reset-mail">
              <img src={email} alt="user" />
              <FormInput
                id="user"
                type="text"
                description="text help"
                placeholder="Usuario"
              />
            </div>
            <button>Enviar Instrucciones</button>
          </section>
        </div>

        {/* sent form */}

        <div className="section">
          <img id="logo-passwd" src={logoRed} alt="logo-red" />
          <section>
            <h2>¡Hemos enviado instrucciones!</h2>
            <div className="instructions">
              <p>
                Revisa en tu cuenta de correo y recuerda que en ocasiones cuando
                el remitente es poco frecuente el correo puede encontrarse en la
                bandeja de "Spam" o "Correo no deseado".
              </p>
            </div>
            <button>Vovler a inicio</button>
          </section>
        </div>
      </div>
    );
  }
}

export default RecuperarContraseña;

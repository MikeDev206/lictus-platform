import React, { Component } from "react";
import LogoRed from "../../components/LogoRed/Index";
import email from "../../assets/Icons/mail-icon.png";

class RecuperarContraseña extends Component {
  render() {
    return (
      // unsend form
      <div className="container">
        <div className="head-title">
          <h1>Recuperar Contraseña</h1>
        </div>
        <div className="section">
          <LogoRed />
          <section>
            <div className="instructions">
              <h2>¿Olvidaste tu contraseña?</h2>
              <p>
                Introduce el mail con el que accedes a tu área de trabajo. En
                unos minutos recibirás, en ésta misma cuenta de correo,
                instrucciones para recuperar tus claves de acceso.
              </p>
            </div>
            <div className="email">
              <img src={email} alt="email" />
              <input type="email" placeholder="Escribe tu email" />
            </div>
            <button>Enviar Instrucciones</button>
          </section>
        </div>
        {/* sent form */}
        <div className="head-title">
          <h1>Recuperar Contraseña</h1>
        </div>
        <div className="section">
          <LogoRed />
          <section>
            <div className="instructions">
              <h2>¡Hemos enviado instrucciones!</h2>
              <p>
                Revisa en tu cuenta de correo y recuerda que en ocasiones cuando
                el remitente es poco frecuente el correo puede encontrarse en la
                bandeja de "Spam" o "Correo no deseado".
              </p>
            </div>
            <div className="email">
              <img src={email} alt="email" />
              <input type="email" placeholder="Escribe tu email" />
            </div>
            <button>Vovler a inicio</button>
          </section>
        </div>
      </div>
    );
  }
}

export default RecuperarContraseña;

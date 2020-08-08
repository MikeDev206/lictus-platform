import React, { Component } from "react";
import user from "../../../assets/SVG/Icons/user.svg";
import password from "../../../assets/SVG/Icons/password.svg";
import mail from "../../../assets/SVG/Icons/mail.svg";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    let value = event.target.value;
    let inputName = event.target.name;
    console.log([inputName]);
    this.setState({ [inputName]: value });
    console.log(value);
  }

  onSubmitHandler() {
    let name = this.state.name;
    let email = this.state.email;
    let confirmEmail = this.state.confirmEmail;
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;

    let registerObject = {
      name,
      email,
      confirmEmail,
      password,
      confirmPassword,
    };

    console.log(registerObject);
  }

  render() {
    return (
      <div class="form">
        <h3>Registrarse</h3>
        <form>
          <div className="welcome-icons">
            <img src={user} alt="user" />
            <input
              type="text"
              name="name"
              placeholder="Nombre de usuario * "
              onChange={this.onChangeHandler}
              value={this.state.name}
            />
          </div>
          <div className="welcome-icons">
            <img src={mail} alt="email" />
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico * "
              onChange={this.onChangeHandler}
              value={this.state.email}
            />
          </div>
          <div className="welcome-icons">
            <img src={mail} alt="email" />
            <input
              name="confirmEmail"
              type="email"
              placeholder="Confirmar correo * "
              onChange={this.onChangeHandler}
              value={this.state.confirmEmail}
            />
          </div>
          <div className="welcome-icons">
            <img src={password} alt="psswd" />
            <input
              name="password"
              type="password"
              placeholder="Contraseña * "
              onChange={this.onChangeHandler}
              value={this.state.password}
            />
          </div>
          <div className="welcome-icons">
            <img src={password} alt="psswd" />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirmar contraseña * "
              onChange={this.onChangeHandler}
              value={this.state.confirmPassword}
            />
          </div>
        </form>
        <input
          type="submit"
          value="Registrarse"
          onClick={this.onSubmitHandler}
        />
      </div>
    );
  }
}

export default Register;

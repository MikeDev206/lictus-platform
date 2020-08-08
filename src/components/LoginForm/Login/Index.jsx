import React, { Component } from "react";
import user from "../../../assets/SVG/Icons/user.svg";
import password from "../../../assets/SVG/Icons/password.svg";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      password: ""
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
    let user = this.state.user;
    let password = this.state.password;

    let registerObject = {
      user,
      password
    };

    console.log(registerObject);
  }

  render() {
    return (
      <div class="form">
        <h3>Iniciar Sesión</h3>
        <form action="#">
          <div className="welcome-icons">
            <img src={user} alt="user" />
            <input
            id={this.props.id}
            name="user"
            type={this.props.type} 
            aria-describedby={this.props.description}
            placeholder={this.props.placeholder} 
            onChange={this.onChangeHandler}
            value={this.state.user}
             />
          </div>
          <div className="welcome-icons">
            <img src={password} alt="psswd" />
            <input 
            name="password"
            type="password" 
            placeholder="Contraseña"
            onChange={this.onChangeHandler}
              value={this.state.password}
           />
          </div>
        </form>
        <span className="reset-passwd">¿Olvidaste tu contraseña?</span>
        <input 
        type="submit"
        value="Iniciar Sesión"
        onClick={this.onSubmitHandler}        
        />
      </div>
    );
  }
}

export default Login;

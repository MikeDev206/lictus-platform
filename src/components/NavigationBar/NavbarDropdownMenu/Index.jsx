import React, { Component } from "react";
import avatar from "../../../assets/SVG/Icons/avatar-icon.svg";

class NavbarDropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  toggleActive() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const dropdownClasses = ["dropdown-content"];
    if (this.state.active) dropdownClasses.push('show');

    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={this.toggleActive.bind(this)}>
          <img id="img-avatar" src={avatar} alt="avatar" />
          <p className="text-avatar">
            Más opciones
          </p>
        </button>
        <div className={dropdownClasses.join(' ')}>
          <a href="/">Chat en vivo </a>
          <a href="/">Configuración de mi cuenta</a>
          <a href="/">Cerrar Sesión</a>
        </div>
      </div>
    );
  }
}

export default NavbarDropdownMenu;

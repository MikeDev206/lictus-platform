import React, { Component } from "react";
import avatar from '../../../assets/SVG/Icons/avatar-icon.svg'

class DropdownMenu extends Component {
  render() {
    return (
      <div class="dropdown">
        <button class="dropbtn">
        <img src={avatar} alt="avatar"/>
        </button>
        <div class="dropdown-content">
          <a href="/">Chat en vivo</a>
          <a href="/">Configuración de mi cuenta</a>
          <a href="/">Cerrar Sesión</a>
        </div>
      </div>
    );
  }
}

export default DropdownMenu;

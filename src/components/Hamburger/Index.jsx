import React, { Component } from "react";
import DropdownMenu from "../NavigationBar/DropdownMenu/Index";

class HamburgerMenu extends Component {
  render() {
    return (
      <div className="hamburger-dropdown">
        <button className="hamburger-dropbtn">
          <div className="hamburger-dropline" />
          <div className="hamburger-dropline" />
          <div className="hamburger-dropline" />
        </button>
        <div className="hamburger-dropdown-content">
          <a href="/">Compañía</a>
          <a href="/">Notifiaciones</a>
          <a href="/">Mensajes</a>
          <a href="/">
            <DropdownMenu />
          </a>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;

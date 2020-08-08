import React, { Component } from "react";
import NavbarDropdownMenu from "../NavigationBar/NavbarDropdownMenu/Index";

class HamburgerMenu extends Component {
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
    const hamburgerClasses = ["hamburger-dropdown-content"];
    if (this.state.active) hamburgerClasses.push('show');

    return (
      <div className="hamburger-dropdown">
        <button className="hamburger-dropbtn" onClick={this.toggleActive.bind(this)}>
          <div className="hamburger-dropline" />
          <div className="hamburger-dropline" />
          <div className="hamburger-dropline" />
        </button>
        <div className={hamburgerClasses.join(' ')}>
          <a href="/">Compañía</a>
          <a href="/">Notifiaciones</a>
          <a href="/">Mensajes</a>
          <li href="/">
            <NavbarDropdownMenu />
          </li>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;

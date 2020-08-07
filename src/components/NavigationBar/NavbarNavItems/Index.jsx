import React, { Component } from "react";
import SearchButton from "../SearchButton/Index";
import DropdownMenu from "../DropdownMenu/Index";
import company from "../../../assets/Images/L-rounded-red.png";
import notifications from "../../../assets/SVG/Icons/notifications-icon.svg";
import messages from "../../../assets/SVG/Icons/chat-icon.svg";

class NavbarNavItems extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Compañía</a>
            <img src={company} alt="logo-empresa-redondeado" />
          </li>
          <li>
            <SearchButton />
          </li>
          <li>
            <a href="/">Notificaciones</a>
            <img src={notifications} alt="notifications-btn" />
          </li>
          <li>
            <a href="/">Mensajes</a>
            <img src={messages} alt="chat-icon" />
          </li>
          <li>
            <a href="/">Jorge Pérez García</a>
            <DropdownMenu />
          </li>
        </ul>
      </div>
    );
  }
}

export default NavbarNavItems;

import React from "react";
import DrawerToggleButton from "../DrawerToggleButton/Index";
import company from "../../assets/Images/L-rounded-red.png";
import notifications from "../../assets/SVG/Icons/notifications-icon.svg";
import messages from "../../assets/SVG/Icons/chat-icon.svg";
import DropdownMenu from "../DropdownMenu/Index";
import SearchButton from "../SearchButton/Index";
import HamburgerButton from "../Hamburger/Index";

const NavigationBar = (props) => (
  <div className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-logo">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar-nav-items">
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
    </nav>
    <div className="hamburger">
      <HamburgerButton />
    </div>
  </div>
);

export default NavigationBar;

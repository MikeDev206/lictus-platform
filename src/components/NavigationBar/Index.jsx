import React from "react";
import DrawerToggleButton from "../DrawerToggleButton/Index";
import NavbarNavItems from "./NavbarNavItems/Index";
import HamburgerMenu from "../Hamburger/Index";


const NavigationBar = (props) => (
  <div className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-logo">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar-nav-items">
        <NavbarNavItems />
      </div>
      <div className="hamburger">
        <HamburgerMenu />
      </div>
    </nav>
  </div>
);

export default NavigationBar;

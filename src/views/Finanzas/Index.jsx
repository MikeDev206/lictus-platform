import React, { Component } from "react";
import NavigationBar from "../../components/NavigationBar/Index";
import SideDrawer from "../../components/SideDrawer/Index";
import Backdrop from "../../components/Backdrop/Index";
import { Avatar } from "antd";

class Finanzas extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevSate) => {
      return { sideDrawerOpen: !prevSate.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="wrapper-container">
        <NavigationBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className="general-wrapper">
          <div className="status-wrapper">
            <div className="things">
              <Avatar size={64} icon="user" />
              Lalala
            </div>
          </div>
          <div className="info-wrapper">
            <div className="things">
              <Avatar size={64} icon="user" />
              Lelele
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Finanzas;

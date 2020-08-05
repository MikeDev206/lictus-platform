import React, { Component } from "react";
import NavigationBar from "../../components/NavigationBar/Index";
// import SidebarMenu from "../../components/SidebarMenu/Index";
import SideDrawer from "../../components/SideDrawer/Index";
import Backdrop from "../../components/Backdrop/Index";

class Usuario extends Component {

  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevSate) => {
      return {sideDrawerOpen: !prevSate.sideDrawerOpen};
    });
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div className="container" >
        <NavigationBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        {/* <SidebarMenu /> */}
      </div>
    );
  }
}

export default Usuario;
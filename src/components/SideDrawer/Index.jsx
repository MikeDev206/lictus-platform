import React, { Component } from "react";
import AnchorsList from "./AnchorsList/Index";
import ImgesList from "./ImgesList/Index";


class SideDrawer extends Component {
  render() {
    let drawerClasses = ["side-drawer"];
    if (this.props.show) {
      drawerClasses = ["side-drawer", "open"];
    }
    return (
      <div className={drawerClasses.join(" ")}>
        <AnchorsList />
        <ImgesList />
      </div>
    );
  }
}

export default SideDrawer;

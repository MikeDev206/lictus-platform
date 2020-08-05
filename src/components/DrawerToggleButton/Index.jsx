import React, { Component } from 'react';
import Logo from '../../assets/SVG/Logos/L-red.svg'


class DrawerToggleButton extends Component {
  render() {
    return(
      <button className="toogle-button" onClick={this.props.click}>
        <img src={Logo} alt="sidebar-logo"/>
      </button>
    )
  }
}

export default DrawerToggleButton;

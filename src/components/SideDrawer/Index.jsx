import React, { Component } from "react";
import gralStatus from "../../assets/SVG/Icons/profile-icon.svg";
import norms from "../../assets/SVG/Icons/norms-icon.svg";
import stadistics from "../../assets/SVG/Icons/stadistics.svg";
import info from "../../assets/SVG/Icons/info-icon.svg";
import status from "../../assets/SVG/Icons/status-icon.svg";
import catalog from "../../assets/SVG/Icons/catalog-icon.svg";

class SideDrawer extends Component {
  render() {

    let drawerClasses = ['side-drawer'];
    if (this.props.show) {
      drawerClasses = ['side-drawer','open'];
    }
    return (
      <div className={drawerClasses.join(' ')}>
        <ul>
          <li>
            <a href="/">Estatus Gral.</a>
            <img src={gralStatus} alt="gral-status" />
          </li>
          <li>
            <a href="/">Mis Normas</a>
            <img src={norms} alt="norms" />
          </li>
          <li>
            <a href="/">Estadísticas</a>
            <img src={stadistics} alt="stadistics" />
          </li>
          <li>
            <a href="/">Información Empresa</a>
            <img src={info} alt="information" />
          </li>
          <li>
            <a href="/">Estatus</a>
            <img src={status} alt="status-norms" />
          </li>
          <li>
            <a href="/">Catálogo de Normas</a>
            <img src={catalog} alt="catalog" />
          </li>
        </ul>
      </div>
    );
  }
}

export default SideDrawer;

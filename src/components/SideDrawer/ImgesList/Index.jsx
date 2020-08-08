import React, { Component } from "react";
import gralStatus from "../../../assets/SVG/Icons/profile-icon.svg";
import norms from "../../../assets/SVG/Icons/norms-icon.svg";
import stadistics from "../../../assets/SVG/Icons/stadistics.svg";
import info from "../../../assets/SVG/Icons/info-icon.svg";
import status from "../../../assets/SVG/Icons/status-icon.svg";
import catalog from "../../../assets/SVG/Icons/catalog-icon.svg";

class ImgesList extends Component {
  render() {
    return (
      <ul className="imges-list">
        <li>
          <img src={gralStatus} alt="gral-status" />
        </li>
        <li>
          <img src={norms} alt="norms" />
        </li>
        <li>
          <img src={stadistics} alt="stadistics" />
        </li>
        <li>
          <img src={info} alt="information" />
        </li>
        <li>
          <img src={status} alt="status-norms" />
        </li>
        <li>
          <img src={catalog} alt="catalog" />
        </li>
      </ul>
    );
  }
}

export default ImgesList;
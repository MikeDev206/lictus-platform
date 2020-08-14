import React, { Component } from "react";

class AnchorsList extends Component {
  render() {
    return (
      <ul className="anchors-list">
        <li>
          <a href="/">Estatus Gral.</a>
        </li>
        <li>
          <a href="/">Mis Normas</a>
        </li>
        <li>
          <a href="/">Estadísticas</a>
        </li>
        <li>
          <a href="/">Información Empresa</a>
        </li>
        <li>
          <a href="/">Estatus</a>
        </li>
        <li>
          <a href="/">Catálogo de Normas</a>
        </li>
      </ul>
    );
  }
}

export default AnchorsList;

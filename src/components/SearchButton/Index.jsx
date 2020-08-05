import React, { Component } from "react";
import search from "../../assets/SVG/Icons/search.svg";

class SearchButton extends Component {
  render() {
    return (
      <div className="search-button">
        <input type="search" placeholder="  Buscar Norma " />
        <img className="search-icon" src={search} alt="search-btn" />
      </div>
    );
  }
}

export default SearchButton;
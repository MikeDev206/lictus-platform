import React, { Component } from "react";
import Example from "./NewsCarousel/Index";


class NewsNomsSection extends Component {
  render() {
    return (
      <div className="info-wrapper">
        <div className="news-section">
          <div className="news-carousel">
            <Example />
          </div>
          <div className="catalog-caorusel">
          <Example />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsNomsSection;

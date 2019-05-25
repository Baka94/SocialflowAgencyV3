import React, { Component } from "react";
import Crystal from "./Crystal.js";
import "./banner.css";

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="bannerContainer">
        <div className="bannerContent">
          <h2 className="wordPrinterBack" />
          <div className="bannerTitle">
            <h3>We are the</h3>
            <h2 className="wordPrinter" />
            <h1>element.</h1>
          </div>
          <div className="bannerInfo">
            <p>
              Socialflow is an advertising and content creation agency with a
              CEO born in this millennia. The medium age of our team is 21 and
              we just like to make good stuff to build and promote your digital
              presence.
            </p>
          </div>
          <div className="crystalPosition">
            <Crystal />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;

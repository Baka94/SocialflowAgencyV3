import React, { Component } from "react";
import Artists from "./Artists.js";
import Footer from "./Footer.js";
import { ContactMenu } from "./Footer.js";
import { CSSTransition } from "react-transition-group";
import "./hashtagBanner.css";

class HashtagBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="hashtagBanner">
        <div
          className={
            this.props.homepageOpen
              ? "hashtagTitle"
              : "hashtagTitle titleClosed"
          }
        >
          <h1>
            {" "}
            <span> we create </span> TSUNAMIS!{" "}
          </h1>
          <h3> We create a genuine social flow for your brand</h3>
          <button className="mediumButton"> Get Started </button>
        </div>
      </div>
    );
  }
}

export default HashtagBanner;

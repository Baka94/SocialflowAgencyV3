import React, { Component } from "react";
import "./crystal.css";

class Crystal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="crystalContainer">
        <div class="crystalContent">
          <div class="crystalShadow" />
          <div class="crystalMain" />
          <div class="crystalFragments" />
          <div class="crystalGlow" />
        </div>
      </div>
    );
  }
}

export default Crystal;

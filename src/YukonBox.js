import React, { Component } from "react";
import "./yukonBox.css";

class YukonBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="yukonBoxContainer">
        <div class="yukonBoxContent">
          <div class="yukonBoxImage" />
          <div class="yukonBoxInfo">
            <h4> Latest campaign: </h4>
            <p>
              {" "}
              Advertising campaign for the movie: Five Feet Apart, on the social
              media: TikTiok{" "}
            </p>
            <h4>Total Reach:</h4>
            <h2>
              12M<span class="secodnaryColor">+</span>
            </h2>
          </div>

          <div
            class="yukonBoxButton"
            onClick={e => this.props.changePage("works")}
          >
            <i class="fas fa-angle-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default YukonBox;

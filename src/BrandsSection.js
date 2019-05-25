import React, { Component } from "react";
import "./brandsSection.css";

class BrandsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="sectionContainer">
        <div class="sectionContent">
          <div class="sectionTitle">
            <h3>Brands we helped and work with:</h3>
          </div>

          <div class="brandsList">
            <img src="https://socialflowagency.com/wp-content/uploads/2019/03/notorious-pictures.png" />
            <img src="https://socialflowagency.com/wp-content/uploads/2019/03/ubilogo_h-1.png" />
            <img src="https://socialflowagency.com/wp-content/uploads/2019/03/Subdued.png" />
            <img src="https://socialflowagency.com/wp-content/uploads/2019/03/LiuJo-1.png" />
            <img src="https://socialflowagency.com/wp-content/uploads/2019/03/ItaliasGotTalent-1.png" />
            <img src="https://socialflowagency.com/wp-content/uploads/2019/05/GameStop.png" />
            <img src="https://socialflowagency.com/wp-content/uploads/2019/05/LeoneFilm.png" />
            <img src="https://socialflowagency.com/wp-content/uploads/2019/03/ItaliasGotTalent-1.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default BrandsSection;

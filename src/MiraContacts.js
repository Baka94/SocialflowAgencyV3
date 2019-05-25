import React, { Component } from "react";
import "./pastelFalco.css";

class MiraContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="miraContainer">
        <div class="miraContent">
          <div class="miraBox">
            <div class="miraImageBox">
              <div class="miraContactBox">
                <h3> Birmingham </h3>
                <h4> 29A Mason Street </h4>
                <h4> B70 9NL </h4>
              </div>
            </div>
          </div>
          <div class="miraBox">
            <div class="miraContactBox">
              <h3> Say Hello </h3>
              <h4> info@socialflowagency.com </h4>
              <h4> +44 7761444058 </h4>
            </div>

            <div class="miraContactBox">
              <h3> Salutaci: </h3>
              <h4> info@socialflowagency.com </h4>
              <h4> +39 3664910701 </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MiraContacts;

import React, { Component } from "react";
import "./gaiaSystem.css";
import artistsData from "./artistsData.js";
import worksData from "./worksData.js";
import PastelFalco from "./PastelFalco.js";

import { millionRounder, toggleBackgrounFix } from "./functions.js";

class GaiaSystem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="gaiaContainer">
        <div className="gaiaContent">
          <GetData data={this.props.data} />
        </div>
      </div>
    );
  }
}

export default GaiaSystem;

function GetData(props) {
  if (props.data === "artists") {
    const artists = artistsData.map(item => (
      <GaiaBox key={item.id} item={item} />
    ));
    return artists;
  } else {
    if (props.data === "works") {
      const artists = worksData.map(item => (
        <GaiaBox key={item.id} item={item} />
      ));
      return artists;
    }
  }
}

/*---  Clas for displaying single artists  ---*/

class GaiaBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gaiaExtraOpen: false
    };

    this.openGaiaExtra = this.openGaiaExtra.bind(this);
    this.closeGaiaExtra = this.closeGaiaExtra.bind(this);
  }

  openGaiaExtra() {
    if (this.state.gaiaExtraOpen !== true) {
      this.setState({
        gaiaExtraOpen: true
      });
    } else {
      return null;
    }
  }

  closeGaiaExtra() {
    this.setState({
      gaiaExtraOpen: false
    });
  }

  render() {
    const urlImg = {
      backgroundImage: "url(" + this.props.item.image1.url + ")"
    };

    return (
      <div className="gaiaBox" style={urlImg} onClick={this.openGaiaExtra}>
        <div className="gaiaBoxTop">
          <h3>{this.props.item.card.title}</h3>
        </div>

        <BoxBottom item={this.props.item} />

        {this.state.gaiaExtraOpen ? (
          <GaiaExtra
            item={this.props.item}
            closeGaiaExtra={this.closeGaiaExtra.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

function BoxBottom(props) {
  if (props.item.logo.url !== null) {
    return (
      <div className="gaiaBoxBottom">
        <img className="gaiaBoxLogo" src={props.item.logo.url} />
      </div>
    );
  } else {
    if (props.item.card.number != null) {
      return (
        <div className="gaiaBoxBottom">
          <h4> {props.item.card.text} </h4>
          <h2> {millionRounder(props.item.card.number)} </h2>
        </div>
      );
    } else {
      return <h2> WAT THE FUCK! </h2>;
    }
  }
}

/*---  Clas for displaying extra info about artist  ---*/

class GaiaExtra extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gaiaExtraOpen: true
    };
  }

  render() {
    return (
      <div className="gaiaExtraContainer">
        <div className="gaiaExtraContent">
          <PastelFalco
            item={this.props.item}
            closeGaiaExtra={this.props.closeGaiaExtra.bind(this)}
          />
        </div>
      </div>
    );
  }
}

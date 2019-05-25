import React, { Component } from "react";
import "./pastelFalco.css";

import { millionRounder, toggleBackgrounFix } from "./functions.js";

class PastelFalco extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  pastelStats(stats) {
    return (
      <div class="pastelBox pastelBoxFull">
        <div class="falcoContainer">
          <div class="falcoTitle">
            <h2> {stats.title} </h2>
          </div>
          <div class="falcoContent">
            <a href={stats.url1} class="falcoSocialBox">
              <h4> {stats.social1} </h4>
              <h2> {millionRounder(stats.number1)} </h2>
              <h5> {stats.tag1} </h5>
            </a>
            <a href={stats.url2} class="falcoSocialBox">
              <h4> {stats.social2} </h4>
              <h2> {millionRounder(stats.number2)} </h2>
              <h5> {stats.tag2} </h5>
            </a>
            <a href={stats.url3} class="falcoSocialBox">
              <h4> {stats.social3} </h4>
              <h2> {millionRounder(stats.number3)} </h2>
              <h5> {stats.tag3} </h5>
            </a>
            <a href={stats.url4} class="falcoSocialBox">
              <h4> {stats.social4} </h4>
              <h2> {millionRounder(stats.number4)} </h2>
              <h5> {stats.tag4} </h5>
            </a>
            <a href={stats.url5} class="falcoSocialBox">
              <h4> {stats.social5} </h4>
              <h2> {millionRounder(stats.number5)} </h2>
              <h5> {stats.tag5} </h5>
            </a>
            <a href={stats.url6} class="falcoSocialBox">
              <h4> {stats.social6} </h4>
              <h2> {millionRounder(stats.number6)} </h2>
              <h5> {stats.tag6} </h5>
            </a>
          </div>
        </div>
      </div>
    );
  }

  pastelWorks(works) {
    return (
      <div class="pastelBox pastelBoxFull">
        <div class="falcoContainer">
          <div class="falcoTitle">
            <h2> Recent Works: </h2>
          </div>
          <div class="falcoContent">
            <img src={works.url1} />
            <img src={works.url2} />
            <img src={works.url3} />
            <img src={works.url4} />
            <img src={works.url5} />
            <img src={works.url6} />
          </div>
        </div>
      </div>
    );
  }

  pastelImage(image) {
    const style = {
      backgroundImage: "url(" + image.url + ")"
    };

    return <div class="pastelBox" style={style} />;
  }

  pastelInfo(info, tags) {
    return (
      <div class="pastelBox">
        <div class="pastelInfo">
          <h2>{info.title}</h2>
          {tags ? (
            <div class="pastelInfoTags">
              <h5> {tags.tag1} </h5>
              <h5> {tags.tag2} </h5>
              <h5> {tags.tag3} </h5>
              <h5> {tags.tag4} </h5>
              <h5> {tags.tag5} </h5>
            </div>
          ) : null}
          <p>{info.text}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div class="pastelContainer">
        <button class="pastelReturn" onClick={this.props.closeGaiaExtra}>
          <h3> X </h3>
        </button>

        <div class="pastelContent">
          {this.props.item.image1.url
            ? this.pastelImage(this.props.item.image1)
            : null}
          {this.props.item.info1.title
            ? this.pastelInfo(this.props.item.info1, this.props.item.tags)
            : null}
          {this.props.item.info2.title
            ? this.pastelInfo(this.props.item.info2, null)
            : null}
          {this.props.item.logo.url
            ? this.pastelImage(this.props.item.logo)
            : null}

          {this.props.item.stats1.title
            ? this.pastelStats(this.props.item.stats1)
            : null}
        </div>
      </div>
    );
  }
}

export default PastelFalco;

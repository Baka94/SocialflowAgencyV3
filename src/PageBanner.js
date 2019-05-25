import React, { Component } from "react";
import "./pageBanner.css";

class PageBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.showPageBanner = this.showPageBanner.bind(this);
  }

  showPageBanner(pageName) {
    if (pageName === "influencers") {
      return (
        <div className="pageBanner">
          <div className="pageTitle">
            <h1>
              Great artists <span>make great content.</span>
            </h1>
          </div>
          <div className="pageDescriptionBox">
            <p>
              We only work with influencers, artists and creators that are
              passionate in what they do and will deliver an advertising
              campaign in the same way they deliver their passion.
            </p>
            <button
              className="mediumButton"
              onClick={e => this.props.changePage("aboutus")}
            >
              {" "}
              Know more{" "}
            </button>
          </div>
        </div>
      );
    }
    if (pageName === "services") {
      return (
        <div className="pageBanner">
          <div className="pageTitle">
            <h1>
              We create <span> tsunamis!</span>
            </h1>
          </div>
          <div className="pageDescriptionBox">
            <p>
              We work to reach the maximum reach and quality possible within the
              limits of your budget. Sometimes this can create some real social
              and creative tsunamis as you can see from our work.
            </p>
            <button
              className="mediumButton"
              onClick={e => this.props.changePage("works")}
            >
              {" "}
              See works{" "}
            </button>
          </div>
        </div>
      );
    }
    if (pageName === "works") {
      return (
        <div className="pageBanner">
          <div className="pageTitle">
            <h1>
              This is only <span> 5% of our work. </span>
            </h1>
          </div>
          <div className="pageDescriptionBox">
            <p>
              When one of your passion is to impress, you don't just limit
              yourself to just give a 100%, you go beyond!
            </p>
            <button
              className="mediumButton"
              onClick={e => this.props.changePage("aboutus")}
            >
              {" "}
              Ask us anything{" "}
            </button>
          </div>
        </div>
      );
    }
    if (pageName === "aboutus") {
      return (
        <div className="pageBanner">
          <div className="pageTitle">
            <h1>
              We are <span> Socialflow. </span>
            </h1>
          </div>
          <div className="pageDescriptionBox">
            <p>
              We may look like highly-professional people from our work but we
              are just a bunch of hard working monkeys, so feel free to tell us
              what you need in wathever way you want.
            </p>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="pageWrapper">
        {this.showPageBanner(this.props.pageName)}
      </div>
    );
  }
}

export default PageBanner;

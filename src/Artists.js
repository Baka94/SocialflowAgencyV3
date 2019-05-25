import React, { Component } from "react";
import artistsData from "./artistsData.js";
import "./artists.css";

import {
  millionRounder,
  socialIconSelector,
  socialButtonColorSelector,
  toggleBackgrounFix
} from "./functions.js";

class Artists extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const artists = artistsData.map(item => (
      <ArtistBox key={item.id} item={item} />
    ));

    return <div className="artistsContainer">{artists}</div>;
  }
}

/*---  Clas for displaying single artists  ---*/

class ArtistBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.openBox = this.openBox.bind(this);
    this.closeBox = this.closeBox.bind(this);
  }

  openBox() {
    this.setState({
      open: true
    });
    toggleBackgrounFix(true);
  }

  closeBox() {
    this.setState({
      open: false
    });
    toggleBackgrounFix(false);
  }

  render() {
    const reach = millionRounder(this.props.item.totalReach);
    const urlImg = {
      backgroundImage: "url(" + this.props.item.urlBanner + ")"
    };

    return (
      <div className="artist">
        <div className="artistCard" style={urlImg} /*onClick={this.openBox}*/>
          <div className="artistName">
            <h3>{this.props.item.name}</h3>
            <h3>{this.props.item.surname}</h3>
          </div>
          <div className="artistInfo">
            <p>Total followers:</p>
            <h2>{reach}</h2>
            <p>Socials:</p>
            <div className="artistInfoSocials">
              <SocialIconPrinter
                tag={this.props.item.tagYoutube}
                social="Youtube"
              />
              <SocialIconPrinter
                tag={this.props.item.tagInstagram}
                social="Instagram"
              />
              <SocialIconPrinter
                tag={this.props.item.tagFacebook}
                social="Facebook"
              />
              <SocialIconPrinter
                tag={this.props.item.tagTikTok}
                social="TikTok"
              />
              <SocialIconPrinter
                tag={this.props.item.tagTwitter}
                social="Twitter"
              />
            </div>
          </div>
        </div>
        <ArtistPage
          open={this.state.open}
          item={this.props.item}
          closeBox={this.closeBox.bind(this)}
        />
      </div>
    );
  }
}

class ArtistPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open
    };
    this.close = this.close.bind(this);
  }

  componentDidUpdate() {}

  close() {
    this.props.closeBox();
  }

  render() {
    return (
      <div className={this.props.open ? "artistPageOpen" : "artistPage"}>
        <div className="artistPageTopbar">
          <h3 className="returnButton" onClick={this.close}>
            +
          </h3>
        </div>
        <div className="artistPageContent">
          <div className="artistPageIntro">
            <div className="artistPageImage">
              <img src={this.props.item.urlBanner} />
            </div>
            <div className="artistPageSnippet">
              <div className="artistPageName">
                <h3>{this.props.item.name}</h3>
                <h3>{this.props.item.surname}</h3>
              </div>
              <div className="artistPageTags">
                <h4 className="Tag">Fashion</h4>
                <h4 className="Tag">Vlogs</h4>
              </div>
              <div className="artistPageDescription">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="artistPageTab">
            <div className="dragger" />
            <ArtistPageTabs item={this.props.item} />
          </div>
        </div>
      </div>
    );
  }
}

function SocialIconPrinter(props) {
  if (props.tag !== "none") {
    return (
      <img className="socialIcon" src={socialIconSelector(props.social)} />
    );
  } else {
    return null;
  }
}

function SocialBoxesPrinter(props) {
  /*const colors = {
    backgroundColor: socialButtonColorSelector(props.social),
    boxShadow: "1px 1px 8px 1px " + socialButtonColorSelector(props.social)
  };*/

  if (props.name !== "none") {
    return (
      <a href="" className="socialBox">
        <div className="socialIconBox">
          <img className="socialIcon" src={socialIconSelector(props.social)} />
        </div>
        <div className="socialButton">
          <h2>732K</h2>
          <h5>@{props.name}</h5>
        </div>
      </a>
    );
  } else {
    return null;
  }
}

class ArtistPageTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePageSocials: true,
      activePageWorks: false,
      activePageStats: false
    };

    this.updateActiveTab = this.updateActiveTab.bind(this);
  }

  updateActiveTab(tabName) {
    if (tabName === "socials") {
      this.setState({
        activePageSocials: true,
        activePageWorks: false,
        activePageStats: false
      });
    }
    if (tabName === "works") {
      this.setState({
        activePageSocials: false,
        activePageWorks: true,
        activePageStats: false
      });
    }
    if (tabName === "stats") {
      this.setState({
        activePageSocials: false,
        activePageWorks: false,
        activePageStats: true
      });
    }
  }

  setActiveTab() {}

  render() {
    return (
      <div className="tabs">
        <div className="tabsMenu">
          <div
            className={
              this.state.activePageSocials
                ? "tabTitle tabTitleActive"
                : "tabTitle"
            }
            onClick={e => this.updateActiveTab("socials")}
          >
            <h4>Socials</h4>
          </div>
          <div
            className={
              this.state.activePageWorks
                ? "tabTitle tabTitleActive"
                : "tabTitle"
            }
            onClick={e => this.updateActiveTab("works")}
          >
            <h4>Works</h4>
          </div>
          <div
            className={
              this.state.activePageStats
                ? "tabTitle tabTitleActive"
                : "tabTitle"
            }
            onClick={e => this.updateActiveTab("stats")}
          >
            <h4>Stats</h4>
          </div>
        </div>
        <div
          className={
            this.state.activePageSocials
              ? "tabSingle tabSingleActive"
              : "tabSingle"
          }
        >
          <div className="socialBoxes">
            <SocialBoxesPrinter
              name={this.props.item.nameYoutube}
              social="Youtube"
            />
            <SocialBoxesPrinter
              name={this.props.item.tagInstagram}
              social="Instagram"
            />
            <SocialBoxesPrinter
              name={this.props.item.nameFacebook}
              social="Facebook"
            />
          </div>
        </div>
        <div
          className={
            this.state.activePageWorks
              ? "tabSingle tabSingleActive"
              : "tabSingle"
          }
        >
          <h3>COMING SOON!</h3>
        </div>
        <div
          className={
            this.state.activePageStats
              ? "tabSingle tabSingleActive"
              : "tabSingle"
          }
        >
          <h3>COMING SOON!</h3>
        </div>
      </div>
    );
  }
}

export default Artists;

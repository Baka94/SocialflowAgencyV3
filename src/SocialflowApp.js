import React, { Component } from "react";
import Artists from "./Artists.js";
import Footer from "./Footer.js";
import TopBarMenu from "./TopBarMenu.js";
import BrandsSection from "./BrandsSection.js";
import Banner from "./Banner.js";
import YukonBox from "./YukonBox.js";
import TitanBox from "./TitanBox.js";
import ServicesSection from "./ServicesSection.js";
import PageBanner from "./PageBanner.js";
import GaiaSystem from "./GaiaSystem.js";
import MiraContacts from "./MiraContacts.js";
import "./styles.css";

/*--- HOMEPAGE MAIN COMPONENT ---*/

class SocialflowApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: "homepage",
      toggleAnimation: true
    };
  }

  changePage(pageName) {
    this.setState({
      activePage: pageName,
      toggleAnimation: !this.state.toggleAnimation
    });
  }

  render() {
    return (
      <div className="siteContainer">
        <TopBarMenu changePage={this.changePage.bind(this)} />
        <div className="siteContent">
          <div
            className={
              this.state.toggleAnimation
                ? "pageContainer pageAnimation1"
                : "pageContainer pageAnimation2"
            }
          >
            <div className="pageContent">
              <div
                class="logoWrapper hideOnDesktop"
                onClick={e => this.showPage("homepage")}
              >
                <img src="https://svgshare.com/i/DAT.svg" />
                <h4> Socialflow</h4>
              </div>
              <ShowPage
                pageName={this.state.activePage}
                changePage={this.changePage.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*--- PAGE MAIN COMPONENT ---*/

class ShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addAnimation: false
    };

    this.showPage = this.showPage.bind(this);
  }

  showPage(pageName) {
    if (pageName === "homepage") {
      return (
        <div className="pageWrapperContent">
          <Banner />
          <BrandsSection />
          <TitanBox />
          <div class="sectionTitle latestWorkTitle">
            <h3>Take a look at our latest works:</h3>
          </div>
          <div className="yukonBoxPosition">
            <YukonBox changePage={this.props.changePage.bind(this)} />
          </div>
          <Footer changePage={this.props.changePage.bind(this)} />
        </div>
      );
    }
    if (pageName === "influencers") {
      return (
        <div className="pageWrapperContent">
          <PageBanner
            pageName="influencers"
            changePage={this.props.changePage.bind(this)}
          />
          <GaiaSystem data={"artists"} />
          <Footer changePage={this.props.changePage.bind(this)} />
        </div>
      );
    }
    if (pageName === "aboutus") {
      return (
        <div className="pageWrapperContent">
          <PageBanner
            pageName="aboutus"
            changePage={this.props.changePage.bind(this)}
          />
          <MiraContacts />
          <Footer changePage={this.props.changePage.bind(this)} />
        </div>
      );
    }
    if (pageName === "services") {
      return (
        <div className="pageWrapperContent">
          <PageBanner
            pageName="services"
            changePage={this.props.changePage.bind(this)}
          />
          <ServicesSection />
          <Footer changePage={this.props.changePage.bind(this)} />
        </div>
      );
    }
    if (pageName === "works") {
      return (
        <div className="pageWrapperContent">
          <PageBanner
            pageName="works"
            changePage={this.props.changePage.bind(this)}
          />
          <GaiaSystem data={"works"} />
          <Footer changePage={this.props.changePage.bind(this)} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="pageWrapper">{this.showPage(this.props.pageName)}</div>
    );
  }
}

export default SocialflowApp;

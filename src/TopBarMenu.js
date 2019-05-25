import React, { Component } from "react";
import "./topBarMenu.css";

class TopBarMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "homepage",
      mobileMenuActive: false
    };

    this.showPage = this.showPage.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  showPage(pageName) {
    this.setState({
      page: pageName,
      mobileMenuActive: false
    });
    this.props.changePage(pageName);
  }

  toggleMenu() {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive
    });
  }

  render() {
    return (
      <div class="topBarContainer">
        <div class="topBarContent">
          <div
            onClick={this.toggleMenu}
            class={
              this.state.mobileMenuActive
                ? "hamburger hamburgerActive"
                : "hamburger"
            }
          >
            <div class="line1"> </div>
            <div class="line2"> </div>
            <div class="line3"> </div>
          </div>

          <div
            onClick={this.toggleMenu}
            class={
              this.state.mobileMenuActive
                ? "menuContainer menuOpen"
                : "menuContainer"
            }
          >
            <div class="colorBarMenu" />

            <div class="menuContent">
              <div class="logoWrapper" onClick={e => this.showPage("homepage")}>
                <img src="https://svgshare.com/i/DAT.svg" />
                <h4> Socialflow</h4>
              </div>

              <div class="menuItems">
                <h5 onClick={e => this.showPage("services")}> Services </h5>
                <h5 onClick={e => this.showPage("works")}> Case History </h5>
                <h5 onClick={e => this.showPage("influencers")}>
                  {" "}
                  Influencers{" "}
                </h5>
                <h5 onClick={e => this.showPage("aboutus")}> About Us </h5>
                <button
                  className="mediumButton"
                  onClick={e => this.showPage("aboutus")}
                >
                  {" "}
                  Get a Quote{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBarMenu;

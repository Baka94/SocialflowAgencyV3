import React, { Component } from "react";

import "./footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <ContactMenu changePage={this.props.changePage} />
        <div className="footerSocials">
          <a href="https://www.instagram.com/socialflowagency/?hl=it">
            <img src="https://socialflowagency.com/wp-content/uploads/2019/05/150-Instagram-Icon.png" />
          </a>
          <a href="https://www.instagram.com/socialflowagency/?hl=it">
            <img src="https://socialflowagency.com/wp-content/uploads/2019/05/150-TikTok-Icon.png" />
          </a>
        </div>
        <div className="footerCopyrightNotice">
          <p> Copyright © Forever Socialflow. All Rights Reserved </p>
        </div>
      </div>
    );
  }
}

/*--- CONTACT MENU ---*/

class ContactMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="contactMenuContainer">
        <h2>Let's Have a Chat</h2>
        <p>Tell us what you are looking for</p>
        <div class="contactMenu">
          <a
            class="contactMenuItem"
            onClick={e => this.props.changePage("aboutus")}
          >
            <h3>Connect &#8227;</h3>
            <p>Help you connect to your audience.</p>
          </a>
          <a
            class="contactMenuItem"
            onClick={e => this.props.changePage("aboutus")}
          >
            <h3>Create &#8227;</h3>
            <p>Co-incubate an idea and create content together.</p>
          </a>
          <a
            class="contactMenuItem"
            onClick={e => this.props.changePage("aboutus")}
          >
            <h3>Advertise &#8227;</h3>
            <p>Put your Brand/Product out there.</p>
          </a>
          <a
            class="contactMenuItem"
            onClick={e => this.props.changePage("aboutus")}
          >
            <h3>Manage &#8227;</h3>
            <p>Manage and create content for your socials.</p>
          </a>
        </div>
      </div>
    );
  }
}

export { ContactMenu };
export default Footer;

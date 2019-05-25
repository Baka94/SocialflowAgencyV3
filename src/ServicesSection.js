import React, { Component } from "react";
import "./junoGrid.css";

class ServicesSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="sectionContainer">
        <div class="sectionContent">
          <div class="sectionTitle">
            <h3>What we con do for your business</h3>
          </div>

          <div class="junoContainer">
            <div class="junoContent">
              <div class="junoCard">
                <div class="junoCardImage">
                  <img src="https://svgshare.com/i/D6x.svg" />
                </div>
                <div class="junoCardInfo">
                  <h4> Influencer Marketing </h4>
                  <p>
                    {" "}
                    We create a tailormade advertising campaign suited to your
                    brand's needs, objectives, goals and the message you want to
                    get trough. We take care of every detail including an
                    appropriate delivery trough our influencers.{" "}
                  </p>
                </div>
              </div>

              <div class="junoCard">
                <div class="junoCardImage" />
                <div class="junoCardInfo">
                  <h4> Creative Design </h4>
                  <p>
                    {" "}
                    We design and craft, impactfull, creative, artistic,
                    innovative and pixel perfect content for your digital needs.
                    This could be: artworks, advertising content, digital
                    interfaces, digital designs, billboards and much more.{" "}
                  </p>
                </div>
              </div>

              <div class="junoCard">
                <div class="junoCardImage" />
                <div class="junoCardInfo">
                  <h4> Social Profile Managing </h4>
                  <p>
                    {" "}
                    We manage, grow and create quality, genuine and creative
                    content for your brand's social profile. We analyse social
                    trends and let your brand REALLY be part of the "internet".
                    Our approach make's your brand stand out in the noise.{" "}
                  </p>
                </div>
              </div>

              <div class="junoCard">
                <div class="junoCardImage" />
                <div class="junoCardInfo">
                  <h4> Web Development </h4>
                  <p>
                    {" "}
                    Our design expertise combined with our iterative approach to
                    concepts lets us craft beautiful web platforms with a
                    top-of-the-game user experience and effective value
                    comunication.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesSection;

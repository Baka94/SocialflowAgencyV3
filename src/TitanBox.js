import React, { Component } from "react";
import "./titanBox.css";

class TitanBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="sectionContainer">
        <div class="sectionContent">
          <div class="sectionTitle">
            <h3>Here is why we make the best shit</h3>
          </div>
          <div class="titanBoxContainer">
            <div class="titanBoxContent">
              <div class="titanBoxImage titanBoxIl1" />
              <div class="titanBoxInfo">
                <h2>
                  Strong <span class="secodnaryColor"> Engagement </span>{" "}
                </h2>
                <p>
                  We believe that high quality engagement is the result of a
                  well thought and well planned digital social media strategy
                  and high quality branded content. We watch out for trends on
                  different social medias to produce a sentiment analysis for
                  your brand. Every single aspect of the campaign is planned and
                  thought out. ( Insights, Brand positioning, Trends, Content
                  strategy, Timing )
                </p>
              </div>

              <div class="titanBoxInfo">
                <h2>
                  High Quality <span class="secodnaryColor"> Content </span>{" "}
                </h2>
                <p>
                  Here at Socialflow, we do not settle for the acceptable, our
                  passionate team is dedicated to reach the maximum result
                  possible, that’s why our work has a high-end production value.
                  We work with you to inject your brand’s DNA into the design of
                  our creations.
                </p>
              </div>
              <div class="titanBoxImage titanBoxIl3" />

              <div class="titanBoxImage titanBoxIl3" />
              <div class="titanBoxInfo">
                <h2>
                  Effective <span class="secodnaryColor"> Delivery </span>{" "}
                </h2>
                <p>
                  Strategy, Creativity and high-end production comes together to
                  deliver a complete final product throughout our roster of web
                  talents and celebs, which are carefully selected for the
                  campaign and the message you want to get trough.
                </p>
              </div>
              <div class="titanBoxBackground"> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitanBox;

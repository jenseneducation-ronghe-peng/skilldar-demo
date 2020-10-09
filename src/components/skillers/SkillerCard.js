import React, { Component } from "react";
import "../../css/SkillerCard.css";
export default class SkillerCard extends Component {
  /*constructor(props) {
    super(props);
  }*/
  render() {
    const {
      id,
      name,
      intro,
      location,
      blueScore,
      redScore,
      skills,
      pic,
    } = this.props;
    const source = (src) => {
      return require(`../../image/${src}.png`);
    };
    const blue = (score) => {
      return ((score / 200) * 100).toFixed(2) + "%";
    };
    const red = (score) => {
      return ((score / 1000) * 100).toFixed(2) + "%";
    };
    return (
      <div className="SkillerCard">
        <div className="upperSection">
          <div
            className="skillPic"
            style={{
              backgroundImage: `url(${source(pic)})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="skillInfo">
            <div className="baseInfo">
              <h3 className={id} style={{ color: "#ffffff" }}>
                {name}
              </h3>
              <p style={{ color: "#ffffff" }}>{intro}</p>
            </div>
            <div className="score">
              <div className="chart">
                <div
                  style={{
                    backgroundColor: "gray",
                    width: "100%",
                    height: "13px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "blue",
                      width: `${blue(blueScore)}`,
                      height: "100%",
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "gray",
                    width: "100%",
                    height: "13px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "red",
                      width: `${red(redScore)}`,
                      height: "100%",
                    }}
                  />
                </div>
              </div>
              <p className="redscore">{redScore}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="keyInfo">
            <div className="skillText">
              <h3 className="hashtag">#</h3>
              <h4 style={{ color: "#ffffff" }}>{skills}</h4>
            </div>
            <div className="locationInfo">
              <div className="locationPic"></div>
              <p style={{ color: "#ffffff", fontSize: "12px" }}>{location}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

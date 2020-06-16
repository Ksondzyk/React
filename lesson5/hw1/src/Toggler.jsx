import React, { Component } from "react";

const RED = "#f00";
const GREEN = "#0f0";
const BLUE = "#00f";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnSwith: "off",
    };
  }

  setBodyColor = (color, e) => {
    // console.log(e);
    document.body.style.backgroundColor = color;

    console.log(React.textContent);

    if (e.target.textContent === "off") {
      this.setState({
        btnSwith: (this.state.btnSwith = "On"),
      });
    }

    // console.log(btnSwith);
  };
  render() {
    return (
      <div className="toggler">
        <div
          className="toggler__button"
          style={{ backgroundColor: RED }}
          onClick={this.setBodyColor.bind(this, RED)}
        >
          off
        </div>
        <div
          className="toggler__button"
          style={{ backgroundColor: GREEN }}
          onClick={this.setBodyColor.bind(this, GREEN)}
        >
          off
        </div>
        <div
          className="toggler__button"
          style={{ backgroundColor: BLUE }}
          onClick={this.setBodyColor.bind(this, BLUE)}
          value={"of"}
        >
          off
        </div>
      </div>
    );
  }
}

export default Toggler;

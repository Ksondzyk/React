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
    console.log(e);
    document.body.style.backgroundColor = color;
    e.target.textContent = "On";
    this.setState({
      btnSwith: "On",
    });
    // console.log(btnSwith);
  };
  render() {
    return (
      <div className="colors">
        <div
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={this.setBodyColor.bind(this, RED)}
        >
          {this.state.btnSwith}
        </div>
        <div
          className="colors__button"
          style={{ backgroundColor: GREEN }}
          onClick={this.setBodyColor.bind(this, GREEN)}
        >
          {this.state.btnSwith}
        </div>
        <div
          className="colors__button"
          style={{ backgroundColor: BLUE }}
          onClick={this.setBodyColor.bind(this, BLUE)}
        >
          {this.state.btnSwith}
        </div>
      </div>
    );
  }
}

export default Toggler;

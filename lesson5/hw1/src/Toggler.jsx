import React, { Component } from "react";

const RED = "#f00";
const GREEN = "#0f0";
const BLUE = "#00f";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swithBtn: "off",
    };
  }

  setBodyColor = (e) => {
    // document.body.style.backgroundColor = color;
    console.log(e.target.className);
    if (e.target.className) {
      e.target.textContent = "On";
    }
  };
  render() {
    return (
      <div className="toggler">
        <div
          className="toggler__button_one"
          // style={{ backgroundColor: RED }}
          onClick={this.setBodyColor.bind(this)}
        >
          Off
        </div>
        <div
          className="toggler__button_two"
          // style={{ backgroundColor: GREEN }}
          onClick={this.setBodyColor.bind(this)}
        >
          {this.state.swithBtn}
        </div>
        <div
          className="toggler__button_three"
          // style={{ backgroundColor: BLUE }}
          onClick={this.setBodyColor.bind(this)}
        >
          {this.state.swithBtn}
        </div>
      </div>
    );
  }
}

export default Toggler;

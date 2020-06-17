import React, { Component } from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swithBtn: "Off",
    };
  }

  stateBtn = () => {
    if (this.state.swithBtn === "Off") {
      this.setState({ swithBtn: (this.state.swithBtn = "On") });
    } else if (this.state.swithBtn === "On") {
      this.setState({ swithBtn: (this.state.swithBtn = "Off") });
    }
  };

  render() {
    return (
      <div className="toggler">
        <div className="toggler__button" onClick={() => this.stateBtn()}>
          {this.state.swithBtn}
        </div>
      </div>
    );
  }
}

export default Toggler;

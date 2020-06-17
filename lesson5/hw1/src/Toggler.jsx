import React, { Component } from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swithBtn: "off",
    };
  }

  stateBtn = () => {
    this.setState({ swithBtn: (this.state.swithBtn = "On") });
  };

  render() {
    return (
      <div className="toggler">
        <div className="toggler__button" onClick={this.stateBtn.bind(this)}>
          {this.state.swithBtn}
        </div>
      </div>
    );
  }
}

export default Toggler;

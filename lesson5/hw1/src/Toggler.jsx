import React, { Component } from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }
  handleClick() {
    this.setState(() => ({
      isToggleOn: !this.state.isToggleOn,
    }));
  }

  render() {
    return (
      <div className="toggler">
        <div className="toggler__button" onClick={() => this.handleClick()}>
          {this.state.isToggleOn ? "Off" : "On"}
        </div>
      </div>
    );
  }
}

export default Toggler;

import React, { Component } from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <div className="toggler">
        <div className="toggler__button" onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </div>
      </div>
    );
  }
}

export default Toggler;

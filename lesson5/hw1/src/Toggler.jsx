import React, { Component } from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }
  toggle = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <div className="toggler">
        <div className="toggler__button" onClick={() => this.toggle()}>
          {this.state.active ? "Off" : "On"}
        </div>
      </div>
    );
  }
}

export default Toggler;

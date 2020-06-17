import React, { Component } from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  toggle = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <div className="toggler" onClick={() => this.toggle()}>
        {this.state.active ? "On" : "Off"}
      </div>
    );
  }
}

export default Toggler;

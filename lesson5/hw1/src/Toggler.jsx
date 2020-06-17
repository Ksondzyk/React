import React, { Component } from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  // toggle = () => {
  //   this.setState({
  //     swithBtn: !this.state.swithBtn,
  //   });
  // };

  // stateBtn = () => {
  //   if (this.state.swithBtn === "Off") {
  //     this.setState({ swithBtn: (this.state.swithBtn = "On") });
  //   } else if (this.state.swithBtn === "On") {
  //     this.setState({ swithBtn: (this.state.swithBtn = "Off") });
  //   }
  // };

  render() {
    return (
      <div className="toggler">
        <div className="toggler__button" onClick={() => this.handleClick()}>
          {this.state.isToggleOn ? "On" : "Off"}
        </div>
      </div>
    );
  }
}

export default Toggler;

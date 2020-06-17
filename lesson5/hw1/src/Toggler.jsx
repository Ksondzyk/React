import React, { Component } from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swithBtn: "Off",
    };
  }

  // stateBtn = () => {
  //   this.setState((prevState) => ({ swithBtn: (prevState.swithBtn = "On") }));
  //   toggle = () => {
  //     this.setState({
  //       active: !this.state.active,
  //     });
  //   };
  // };

  toggle = () => {
    this.setState({
      swithBtn: !this.state.swithBtn,
    });
  };

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
        <div className="toggler__button" onClick={() => this.toggle()}>
          {this.state.swithBtn}
        </div>
      </div>
    );
  }
}

export default Toggler;

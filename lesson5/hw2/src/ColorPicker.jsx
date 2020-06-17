import React, { Component } from "react";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: true };
  }

  onMouseCoral = (e) => {
    console.log("onMouseleave");
    this.setState({ color: (this.state.color = "Coral") });
  };
  onMouseAqua = () => {
    console.log("onMouseleave");
    this.setState({ color: (this.state.color = "Aqua") });
  };
  onMouseAqua = () => {
    console.log("onMouseleave");
    this.setState({ color: (this.state.color = "Aqua") });
  };
  onMouseBisque = () => {
    console.log("onMouseleave");
    this.setState({ color: (this.state.color = "Bisque") });
  };
  onMouseout = () => {
    console.log("mousover");
    this.setState({ color: !this.state.color });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div className="out" onMouseOut={() => this.onMouseout()}>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.onMouseCoral()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.onMouseAqua()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.onMouseBisque()}
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;

//

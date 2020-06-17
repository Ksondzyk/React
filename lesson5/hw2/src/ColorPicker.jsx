import React, { Component } from "react";
class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: null };
  }
  onMouse = (arg) => {
    this.setState({ color: (this.state.color = arg) });
  };
  onMouseout = () => {
    this.setState({ color: (this.state.color = null) });
    console.log(this.state.color);
  };
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div className="out" onMouseOut={() => this.onMouseout()}>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.onMouse("Coral")}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.onMouse("Aqua")}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.onMouse("Bisque")}
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;

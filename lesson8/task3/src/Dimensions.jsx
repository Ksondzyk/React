import React, { Component } from "react";

class Dimensions extends Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    // this.state = {
    //   width: innerWidth,
    //   height: innerHeight,
    // };
    const { innerWidth, innerHeight } = window;
    // document.title = `${innerWidth} x ${innerHeight}`;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillMount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });

    document.title = `${innerWidth} x ${innerHeight}`;
  };
  render() {
    return (
      <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>
    );
  }
}

export default Dimensions;

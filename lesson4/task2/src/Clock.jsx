import React, { Component } from "react";
import "./clock.scss";

import moment from "moment";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () =>
        this.setState({
          time: this.state.time.getTimezoneOffset(),
        }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  // toOffsetDate(offset) {
  //   var d = new Date(new Date().getTime() + 3600 * 1000);
  //   var hrs = d.getUTCHours();
  //   var mins = d.getUTCMinutes();
  //   var secs = d.getUTCSeconds();
  //   return `${hrs}:${mins}:${secs}`;
  // }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">
          {this.state.time.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

export default Clock;

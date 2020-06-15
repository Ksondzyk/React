import React, { Component } from "react";
import "./clock.scss";
import getTimeWithOffset from "./getTimeWithOffset.js";
import moment from "moment";

const formatDate = (date) => moment(date).format("h:mm:ss A");
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: getTimeWithOffset(props.offset),
    };
    console.log(this.state);
    // do not this way
    setInterval(() => {
      this.setState({
        time: this.state.time,
      });
      console.log(time);
    }, 100);
    console.log(formatDate(this.state.time));
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{formatDate(this.state.time)}</div>
      </div>
    );
  }
}
export default Clock;

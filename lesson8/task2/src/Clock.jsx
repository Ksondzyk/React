import React, { Component } from "react";
import "./clock.scss";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;

    // <div className="clock">
    //   <div className="clock__location">{this.props.location}</div>
    //   <div className="clock__time">{this.state.time}</div>
    // </div>
  }
}

export default Clock;

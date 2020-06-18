import React, { Component } from "react";
import Online from "./Online";
import Offline from "./Offline";

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
    };
  }
  // setText = () => {
  //   this.setState({ isOnline: !this.state.isOnline });
  // };
  render() {
    return (
      <div className="status">
        {this.props.isOnline ? (
          <Online text={"All good!"} />
        ) : (
          <Offline text={"Offline"} />
        )}

        <button className="status__btn">Reconnect</button>
      </div>
    );
  }
}
export default Status;

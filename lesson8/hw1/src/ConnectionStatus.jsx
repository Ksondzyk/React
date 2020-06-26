import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };

  componentDidMount() {
    window.addEventListener("offline", this.statusConnection);

    console.log(window.status);

    const { offline } = window;

    this.setStatus(offline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.statusConnection);
  }
  statusConnection = (e) => {
    const { offline } = e.target;
    this.setStatus(offline);
  };

  setStatus = () => {
    this.setState({
      status: (this.state.status = "offline"),
    });
  };
  render() {
    return (
      <div className="status status_offline">
        {this.state.status === "offline" ? "offline" : "online"}
      </div>
    );
  }
}
export default ConnectionStatus;

import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };

  componentDidMount() {
    window.addEventListener("online", this.statusConnection);

    const { online } = window;

    this.setStatus(online);
  }

  componentWillUnmount() {
    window.removeEventListener("offline", this.statusConnection);
  }
  statusConnection = (e) => {
    const { status } = e.target;
    console.log(status);
    this.setStatus(status);
  };

  setStatus = () => {
    this.setState({
      status: (this.state.status = "online"),
    });
  };

  render() {
    const statusVisible =
      this.state.status === "offline" ? "offline" : "online";
    const isRender = this.state.status === "offline" ? true : false;
    return (
      <div className={`status ${isRender ? "status_offline" : ""}`}>
        {statusVisible}
      </div>
    );
  }
}
export default ConnectionStatus;

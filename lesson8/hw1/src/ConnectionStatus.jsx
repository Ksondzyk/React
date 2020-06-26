import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: null,
  };

  componentDidMount() {
    window.addEventListener("online", this.statusConnection);

    const { status } = window;

    this.setStatus(status);
  }

  componentWillUnmount() {
    window.removeEventListener("offline", this.statusConnection);
  }
  statusConnection = (e) => {
    const { status } = e.target;
    this.setStatus(status);
  };

  setStatus = () => {
    this.setState({
      status: (this.state.status = "offline"),
    });
  };

  render() {
    const statusVisible = this.state.status === "offline" ? "online" : "online";
    const isRender = this.state.status === "offline" ? true : false;
    return (
      <div className={`status ${isRender ? "status_offline" : ""}`}>
        {statusVisible}
      </div>
    );
  }
}
export default ConnectionStatus;

import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    online: null,
    offline: null,
  };

  componentDidMount() {
    window.addEventListener("online", this.statusConnection);
    window.addEventListener("offline", this.statusConnection);

    const { online, offline } = window;

    this.setStatus(online, offline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.statusConnection);
    window.removeEventListener("offline", this.statusConnection);
  }
  statusConnection = (e) => {
    const { status } = e.target;
    console.log(status);
    this.setStatus(status);
  };

  setStatus = () => {
    this.setState({
      online: (this.state.online = "online"),
      offline: (this.state.online = "offline"),
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

import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: true,
  };

  componentDidMount() {
    window.addEventListener("online", this.setStatusOnline);
    window.addEventListener("offline", this.setStatusOffline);

    if (window.navigator.onLine) {
      this.setStatusOnline(true);
    } else {
      this.setStatusOffline(false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.setStatusOnline);
    window.removeEventListener("offline", this.setStatusOffline);
  }

  setStatusOnline = () => {
    this.setState({
      status: window.navigator.onLine,
    });
  };
  setStatusOffline = () => {
    this.setState({
      status: window.navigator.onLine,
    });
  };

  render() {
    const statusVisible = this.state.status === false ? "offline" : "online";
    const isRender = !this.state.status ? true : false;
    return (
      <div className={`status ${isRender ? "status_offline" : ""}`}>
        {statusVisible}
      </div>
    );
  }
}
export default ConnectionStatus;

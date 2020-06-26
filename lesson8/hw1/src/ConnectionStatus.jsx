import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: null,
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
      status: (this.state.status = false),
    });
  };
  setStatusOffline = () => {
    this.setState({
      status: (this.state.status = false),
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

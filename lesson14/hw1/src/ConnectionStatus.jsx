import React, { useState, useEffect } from "react";
const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));

    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.addEventListener("offline", () => setIsOnline(false));
    };
  }, []);

  const statusVisible = isOnline ? "online" : "offline";
  const isRender = !isOnline;
  return (
    <div className={`status ${isRender ? "status_offline" : null}`}>
      {statusVisible}
    </div>
  );
};

// class ConnectionStatus extends Component {
//   state = {
//     status: true,
//   };
//   //
//   componentDidMount() {
//     window.addEventListener("online", this.setStatusOnline);
//     window.addEventListener("offline", this.setStatusOffline);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("online", this.setStatusOnline);
//     window.removeEventListener("offline", this.setStatusOffline);
//   }

//   setStatusOnline = () => {
//     this.setState({
//       status: true,
//     });
//   };
//   setStatusOffline = () => {
//     this.setState({
//       status: false,
//     });
//   };

//   render() {
//     const statusVisible = this.state.status ? "online" : "offline";
//     const isRender = !this.state.status;
//     return (
//       <div className={`status ${isRender ? "status_offline" : null}`}>
//         {statusVisible}
//       </div>
//     );
//   }
// }
export default ConnectionStatus;

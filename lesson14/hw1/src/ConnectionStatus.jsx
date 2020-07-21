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

export default ConnectionStatus;

import React from "react";

const Logout = ({ onLogout, text }) => (
  <button className="login btn" onClick={onLogout}>
    {text}
  </button>
);
export default Logout;

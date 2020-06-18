import React from "react";

const Login = ({ onLogin, text }) => {
  return (
    <button className="login btn" onClick={onLogin}>
      {text}
    </button>
  );
};
export default Login;

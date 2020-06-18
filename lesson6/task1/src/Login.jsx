import React from "react";

const Login = ({ onLogin }) => {
  console.log(onLogin);
  return (
    <button className="login btn" onClick={onLogin}>
      Login
    </button>
  );
};
export default Login;

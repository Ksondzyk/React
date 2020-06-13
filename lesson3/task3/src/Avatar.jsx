import React from "react";

const Avatar = (props) => {
  console.log(props);
  return <img className="avatar" src={props.user} alt={props.user} />;
};
export default Avatar;

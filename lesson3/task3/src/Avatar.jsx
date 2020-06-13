import React from "react";

const Avatar = (props) => {
  console.log(props);
  return (
    <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
};
export default Avatar;

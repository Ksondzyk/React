import React from "react";

const Avatar = (props) => {
  console.log(props);
  return (
    <img className="avatar" src={props.user.avatarUrl} alt={props.name.name} />
  );
};
export default Avatar;

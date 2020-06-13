import React from "react";

const UserAvatar = (props) => {
  return (
    <img
      className="avatar"
      src={"https://avatars3.githubusercontent.com/u10001"}
      alt={props.name}
    />
  );
};
export default UserAvatar;

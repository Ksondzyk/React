import React from "react";
import Avatar from "./Avatar";

const UserInfo = (props) => {
  console.log(props);
  return (
    <div className="user-info">
      <Avatar avatarUrl={props.user.avatarUrl} name={props.name} />
      <div className="user-info__name">{props.avatar}</div>
    </div>
  );
};
export default UserInfo;

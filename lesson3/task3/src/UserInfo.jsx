import React from "react";
import UserAvatar from "./UserAvatar";
const UserInfo = (props) => {
  return (
    <div className="user-info">
      <UserAvatar avatarUser={props.user.avatarUser} name={props.user.name} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};
export default UserInfo;

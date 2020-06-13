import React from "react";

const ProfileName = (props) => {
  console.log(props);
  return (
    <div className="profile__name">
      {`${props.firstName} ${props.lastName}`}
    </div>
  );
};
export default ProfileName;

import React from "react";
import ReactDOM from "react-dom";
import ProfileName from "./ProfileName";
import ProfileBirth from "./ProfileBirth";

const Profile = (props) => {
  console.log(props);
  return (
    <div className="profile">
      <ProfileName
        firstName={props.userData.firstName}
        lastName={props.userData.lastName}
      />
      <ProfileBirth
        date={props.userData.birthDate}
        city={props.userData.birthPlace}
      />
    </div>
  );
};

export default Profile;

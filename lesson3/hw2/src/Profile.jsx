import React from "react";
import ReactDOM from "react-dom";
import ProfileName from "./ProfileName";
import ProfileBirth from "./ProfileBirth";

const Profile = (props) => {
  console.log(props);
  return (
    <div className="profile">
      <ProfileName
        firstName={props.user.firstName}
        lastName={props.user.lastName}
      />
      <ProfileBirth date={props.user.birthDate} city={props.user.birthPlace} />
    </div>
  );
};

export default Profile;
{
  /* <b>Was born 17 Jan 91 in London</b>; */
}
// LondonformatDate(props.date)

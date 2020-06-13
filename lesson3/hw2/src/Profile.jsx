import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import ProfileName from "./ProfileName";

const formatDate = (date) => moment(date).format("DD MMM YY");
const Profile = (props) => {
  console.log(props);
  return (
    <div className="profile">
      {`Was born ${formatDate(props.user.birthDate)} in ${
        props.user.birthPlace
      }`}
      <ProfileName
        firstName={props.user.firstName}
        lastName={props.user.lastName}
      />
    </div>
  );
};

export default Profile;
{
  /* <b>Was born 17 Jan 91 in London</b>; */
}
// LondonformatDate(props.date)

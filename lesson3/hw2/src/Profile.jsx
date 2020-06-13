import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

const formatDate = (date) => moment(date).format("DD MMM YY");
const Profile = (props) => {
  return (
    <div className="profile">
      {`Was born ${formatDate(props.user.birthDate)} in ${
        props.user.birthPlace
      }`}
      <div className="profile__name">{`${props.user.firstName} ${props.user.lastName}`}</div>
      {/* <div className="comment__date">{`Was born ${formatDate(
        props.user.birthDate
      )} in ${props.user.birthPlace}`}</div> */}
    </div>
  );
};

export default Profile;
<b>Was born 17 Jan 91 in London</b>;
// LondonformatDate(props.date)

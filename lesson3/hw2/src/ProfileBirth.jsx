import React from "react";
import moment from "moment";

const formatDate = (date) => moment(date).format("DD MMM YY");
const BrofileBirth = (props) => {
  console.log(props);
  return (
    <div className="profile__birth">
      {`Was born ${formatDate(props.date)} in ${props.city}`}
    </div>
  );
};
export default BrofileBirth;

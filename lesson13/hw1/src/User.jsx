import React, { useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { companyName } = useParams();
  const [user, setDates] = useState([]);

  const getDate = fetch(`https://api.github.com/users/${companyName}`).then(
    (response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    }
  );
  getDate.then(({ avatar_url, name, location }) =>
    user.push(avatar_url, name, location)
  );

  console.log(user);

  return (
    <div className="user">
      <img alt="User Avatar" src={user[0]} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{user[1]}</span>
        <span className="user__location">{user[2]}</span>
      </div>
    </div>
  );
};
export default User;

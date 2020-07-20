import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { companyName } = useParams();
  console.log(companyName);
  const getDate = fetch(
    `https://api.github.com/users/${companyName}`
  ).then((response) => response.json());
  const name = getDate.then(({ name, location }) => name);
  console.log(name);
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src="https://avatars1.githubusercontent.com/u/9919?v=4"
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{name.then((res) => res)}</span>
        <span className="user__location">{}</span>
      </div>
    </div>
  );
};
export default User;

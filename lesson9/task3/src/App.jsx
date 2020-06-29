import React from "react";

import UserForm from "./UserForm";

// const createUser = (props) => {
//   // event.preventDefault();
//   const formData = Object.fromEntries([...new FormData(props)]);
//   console.log(formData);
// };

const App = ({ user }) => {
  console.log(user);
  const createUser = (props) => {
    const formData = Object.fromEntries([...new FormData(props)]);
  };
  return <UserForm createUser={() => createUser} />;
};

export default App;

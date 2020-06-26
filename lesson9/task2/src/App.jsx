import React from "react";

import UserForm from "./UserForm";

const createUser = ({ user }) => {
  console.log(user);
};
const App = () => {
  return <UserForm onSubmit={createUser} />;
};

export default App;

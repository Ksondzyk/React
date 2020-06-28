import React from "react";

import UserForm from "./UserForm";

const createUser = (props) => {
  console.log(props);
};

const App = () => {
  return <UserForm onSubmit={createUser} />;
};

export default App;

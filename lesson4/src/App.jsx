import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <Counter start={5} interval={1000} />
      <Counter start={12} interval={500} />
      <Counter start={-50} interval={100} />
    </>
  );
};

export default App;

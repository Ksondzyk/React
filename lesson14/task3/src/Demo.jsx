import React, { useState } from "react";
import Dimensions from "./Dimensions";

const Demo = () => {
  const [isVusiable, setIsVisiable] = useState(true);
  return (
    <div>
      <div>
        <button className="btn" onClick={() => setIsVisiable(true)}>
          Show
        </button>
        <button className="btn" onClick={() => setIsVisiable(false)}>
          Hide
        </button>
      </div>
      {isVusiable && <Dimensions />}
    </div>
  );
};
export default Demo;

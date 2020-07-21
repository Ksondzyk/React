import React, { useEffect, useState } from "react";
import moment from "moment";
import getTimeWithOffset from "./getTimeWithOffset.js";

const Clock = ({ offset, location }) => {
  const [time, setTime] = useState(
    moment(getTimeWithOffset(offset)).format("h:mm:ss A")
  );
  useEffect(() => {
    const intervalID = setInterval(
      () => setTime(moment(getTimeWithOffset(offset)).format("h:mm:ss A")),
      1000
    );
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;

import React, { useEffect, useState } from "react";

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    heigth: null,
  });
  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const handleResize = (e) => {
      const { innerHeight, innerWidth } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { width, height } = dimensions;
  return <div className="dimentions">{`${width}px - ${height}px`}</div>;
};
export default Dimensions;

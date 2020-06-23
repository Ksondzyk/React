import React from "react";

const Pagination = ({ currentPage, goNext, goPrev, totalItems }) => {
  console.log(currentPage, goNext, goPrev, totalItems);
  let isPrevPageAvailable = "←";
  let isNextPageAvailable = "→";
  let disabledNext = false;
  let disabledPrev = false;
  if (totalItems === 3) {
    disabledNext = true;
    isNextPageAvailable = "";
  } else {
    disabledNext = false;
    isNextPageAvailable = "→";
  }

  if (totalItems !== 3) {
    disabledPrev = true;
    isPrevPageAvailable = "";
  } else {
    disabledPrev = false;
    isPrevPageAvailable = "←";
  }
  return (
    <div className="pagination">
      <button className="btn" disabled={disabledPrev} onClick={goPrev}>
        {isPrevPageAvailable}
      </button>
      <span className="pagination__page">{currentPage || "1"}</span>

      <button className="btn" disabled={disabledNext} onClick={goNext}>
        {isNextPageAvailable}
      </button>
    </div>
  );
};
export default Pagination;
// disabled = { disabledNext };

import React from "react";

const Pagination = ({ currentPage, goNext, goPrev, totalItems }) => {
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

  if (totalItems === 1) {
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
      <span className="pagination__page">{currentPage}</span>

      <button className="btn" onClick={goNext}>
        {isNextPageAvailable}
      </button>
    </div>
  );
};
export default Pagination;
// disabled = { disabledNext };

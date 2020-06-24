import React from "react";

const Pagination = ({
  currentPage,
  goNext,
  goPrev,
  totalItems,
  itemsPerPage,
}) => {
  console.log(currentPage, goNext, goPrev, totalItems, itemsPerPage);
  let isPrevPageAvailable = "←";

  let isNextPageAvailable = "→";
  let disabledNext = false;
  let disabledPrev = false;
  currentPage === totalItems ? disabledPrev === true : disabledPrev;
  if (currentPage === 3) {
    disabledNext = true;
    isNextPageAvailable = "";
  } else {
    disabledNext = false;
    isNextPageAvailable = "→";
  }

  if (currentPage === 1) {
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

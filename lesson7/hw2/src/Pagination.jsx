import React from "react";

const Pagination = ({
  currentPage,
  goNext,
  goPrev,
  totalItems,
  itemsPerPage,
}) => {
  console.log(totalItems);
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable =
    currentPage < Math.ceil(totalItems / itemsPerPage) - 1;

  return (
    <div className="pagination">
      <button className="btn" disabled={isPrevPageAvailable} onClick={goPrev}>
        {isPrevPageAvailable ? "" : "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" disabled={isNextPageAvailable} onClick={goNext}>
        {isNextPageAvailable ? "" : "→"}
      </button>
    </div>
  );
};
export default Pagination;

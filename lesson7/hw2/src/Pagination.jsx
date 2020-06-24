import React from "react";

const Pagination = ({
  currentPage,
  goNext,
  goPrev,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevPageAvailable = !!(
    currentPage === 0 && currentPage !== totalItems
  );

  const isNextPageAvailable = currentPage === totalItems;

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

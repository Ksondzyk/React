import React from "react";

const Pagination = ({
  currentPage,
  goNext,
  goPrev,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevPageAvailable = "";

  const isNextPageAvailable = "";

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev}>
        {"→"}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext}>
        {"→"}
      </button>
    </div>
  );
};
export default Pagination;

import React from "react";

const Pagination = ({
  currentPage,
  goNext,
  goPrev,
  totalItems,
  itemsPerPage,
}) => {
  console.log(currentPage, totalItems, itemsPerPage);
  const isPrevPageAvailable = "";

  // const isNextPageAvailable = currentPage === totalItems ?;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev}>
        {"→"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext}>
        {"→"}
      </button>
    </div>
  );
};
export default Pagination;

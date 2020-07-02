import React from "react";

const SearchBar = ({
  handleFilterTextChange,
  filterText,
  inStockOnly,
  handleInStockChange,
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockChange}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;

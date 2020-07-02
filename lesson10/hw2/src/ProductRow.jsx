import React from "react";

const ProductRow = ({ product }) => {
  const { name, price, stocked } = product;
  const nameCaregory = stocked ? (
    name
  ) : (
    <span style={{ color: "red" }}>{name}</span>
  );

  return (
    <tr>
      <td>{nameCaregory}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;

import React from "react";

const Product = ({ image, title }) => {
  return (
    <>
      <img src={image} alt="product image" />
      <h3>{title}</h3>
    </>
  );
};

export default Product;

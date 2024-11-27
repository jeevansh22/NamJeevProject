import React from "react";
import Product from "./Product";

const OurProducts = () => {
  const productImages = [
    "Products/millingseparator.jpg",
    "Products/millingseparator.jpg",
    "Products/millingseparator.jpg",
    "Products/millingseparator.jpg",
    "Products/millingseparator.jpg",
    "Products/millingseparator.jpg",
    "Products/millingseparator.jpg",
    "Products/millingseparator.jpg",
    "Products/millingseparator.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h2 className="text-center font-bold text-3xl mt-8">Our Products</h2>
      {/* <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-6 p-6 max-w-screen-lg w-full">
          {productImages.map((image, index) => (
            <div key={index} className="w-full">
              <Product image={image} title={"Milling Separator"} />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default OurProducts;

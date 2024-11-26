import React from "react";
import Carousel from "./Carousel";
import Text from "./Text";
import OurProducts from "./OurProducts";
import NewsLetter from "./NewsLetter";
import Details from "../Machinery/Details"
const Homepage = () => {
  return (
    <>
      <Carousel />
      <Text />
      <Details/>
      <NewsLetter />
    </>
  );
};

export default Homepage;

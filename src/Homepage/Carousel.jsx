import React, { useState } from "react";
import slide1 from "/Slides/slide1.jpg";
import slide2 from "/Slides/slide2.jpg";
import slide3 from "/Slides/slide3.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [slide1, slide2, slide3];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-auto">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-[2500px] h-[490px] object-cover"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-blue-900 p-2 rounded-full shadow-lg"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-blue-900 p-2 rounded-full shadow-lg"
      >
        &#8594;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index
                ? "bg-blue-900"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

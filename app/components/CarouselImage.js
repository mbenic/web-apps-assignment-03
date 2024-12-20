import React from "react";
import Image from "react-bootstrap/Image";

// the carousel image and text
function CarouselImage({ text }) {
  // the encoding returns https://via.placeholder.com/800x400.png?text=First%20slide
  return (
    <Image
      src={`https://via.placeholder.com/1920x768.png?text=${encodeURIComponent(
        text
      )}`}
      alt={text}
      fluid
    />
  );
}

export default CarouselImage;

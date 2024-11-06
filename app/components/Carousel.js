"use client";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
// https://react-bootstrap.github.io/docs/components/carousel

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <CarouselImage text="Breathtaking views" />
        <Carousel.Caption>
          <h3> Relaxation in the Bay of Belfast</h3>
          <a href="/" className="caption sfb btn btn-default btn-lg">
            Learn More
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="The simple life" />
        <Carousel.Caption>
          <h3> Lush gardens in Mordor</h3>
          <a href="/" className="caption sfb btn btn-default btn-lg">
            Learn More
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

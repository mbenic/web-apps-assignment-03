"use client";
import Link from "next/link";

import React from "react";
import { useState } from "react";
import { properties } from "../data/properties";
import Image from "next/image";

// get the useTheme function from ThemeContext component
import { useTheme } from "../context/ThemeContext";

// import necessary components
import Header from "../components/Header";
import Footer from "../components/Footer";

import Container from "../components/Container";

const Property = () => {
  const [index, setIndex] = useState(0);

  function handleClickReverse() {
    setIndex((index - 1 + properties.length) % properties.length);
  }

  function handleClick() {
    setIndex((index + 1) % properties.length);
  }

  const property = properties[index];

  return (
    <div className="main col-sm-12">
      <h1 className="section-title">Properties</h1>
      <div className="row grid-style1">
        <div className="col-md-6 item ">
          <div className="image">
            <img
              src={property.link}
              alt={property.title}
              className="img-fluid rounded "
            />
          </div>
          <div className="tag">
            <i className="fa fa-file-text"></i>
          </div>
        </div>
        <div className="col-md-6">
          <h2>{property.title}</h2>
          <p>{property.description} </p>

          {/* <a
            href={property.link}
            className="btn btn-primary"
            target="_blank"
           
          >
            View More
          </a> */}
          <h3>
            ({index + 1} of {properties.length})
          </h3>

          <div className="mt-3">
            <button
              className="btn btn-secondary me-2"
              onClick={handleClickReverse}
            >
              Previous
            </button>
            <button className="btn btn-secondary" onClick={handleClick}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Gallery() {
  const { theme } = useTheme();
  return (
    <main
      className={`${
        theme == "light" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <Header />
      <Container>
        <Property />
      </Container>
      <Footer />
    </main>
  );
}

export default Gallery;

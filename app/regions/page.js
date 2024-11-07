"use client";

import Link from "next/link";
// import necessary components
import Header from "../components/Header";
import Footer from "../components/Footer";

import Container from "../components/Container";

// get the useTheme function from ThemeContext component
import { useTheme } from "../context/ThemeContext";

// an array of objects representing different regions in Australia.
const regions = [
  {
    id: "1",
    capital: "Sydney",
    state: "New South Wales",
    imgUrl: "https://placehold.it/760x670",
  },
  {
    id: "2",
    capital: "Melbourne",
    state: "Victoria",
    imgUrl: "https://placehold.it/760x670",
  },
  {
    id: "3",
    capital: "Brisbane",
    state: "Queensland",
    imgUrl: "https://placehold.it/760x670",
  },
  {
    id: "4",
    capital: "Perth",
    state: "Western Australia",
    imgUrl: "https://placehold.it/760x670",
  },
  {
    id: "5",
    capital: "Adelaide",
    state: "South Australia",
    imgUrl: "https://placehold.it/760x670",
  },
  {
    id: "6",
    capital: "Hobart",
    state: "Tasmania",
    imgUrl: "https://placehold.it/760x670",
  },
];

// takes a regions prop and uses the map function to generate list items for each region in the array
function ListRegions({ regions }) {
  // uses map function on array
  const listItems = regions.map((region) => (
    <div className="item col-md-4" key={region.id}>
      <div className="image">
        <Link href="/">
          <h3>{region.capital}</h3>
          <span className="location">{region.state}</span>
        </Link>
        <img src={region.imgUrl} alt="" />
      </div>
    </div>
  ));

  return <div className="row">{listItems}</div>;
}

//  wraps the layout for displaying the list of regions
const Regions = () => {
  //pull the theme variable from the context
  const { theme } = useTheme();
  return (
    <main
      //Adjust the colors according to the theme
      className={`${
        theme == "light" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <Header />
      <Container>
        <div className="main col-sm-12">
          <h1 className="section-title">Regions in Australia</h1>
          <div className="grid-style1 clearfix">
            <ListRegions regions={regions} />
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default Regions;

"use client";
//import necessary components
import Header from "../components/Header";
import Footer from "../components/Footer";

import LatestNews from "../components/LatestNews";
import Container from "../components/Container";

// get the useTheme function from ThemeContext component
import { useTheme } from "../context/ThemeContext";

// put the components together and render the complete page
const News = () => {
  //pull the theme variable from the context
  const { theme } = useTheme();
  return (
    <main
      // Adjust the colors according to the theme
      className={`${
        theme == "light" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <Header />
      {/* The Container component wraps the LatestNews component */}
      <Container>
        <LatestNews />
      </Container>
      <Footer />
    </main>
  );
};

export default News;

"use client";
//import necessary components
import Header from "../components/Header";
import Footer from "../components/Footer";

import LatestNews from "../components/LatestNews";
import Container from "../components/Container";
import { useTheme } from "../context/ThemeContext";

// put the components together and render the complete page
const News = () => {
  const { theme } = useTheme();
  return (
    <main
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

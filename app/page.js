"use client";
//import all the necessary components making up the layout
import Header from "./components/Header";
import FooterHome from "./components/FooterHome";

import ControlledCarousel from "./components/Carousel";
import Search from "./components/Search";
import MainHome from "./components/MainHome";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";

// get the useTheme function from ThemeContext component
import { useTheme } from "./context/ThemeContext";

const HomePage = () => {
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

      <ControlledCarousel />
      <Search />
      {/* The Container component wraps two components, MainHome and Sidebar */}
      <Container>
        <MainHome />
        <Sidebar />
      </Container>
      <FooterHome />
    </main>
  );
};

export default HomePage;

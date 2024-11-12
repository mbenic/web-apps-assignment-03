"use client";

// https://www.geeksforgeeks.org/how-to-perform-form-validation-in-react/

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Container from "../components/Container";

// get the useTheme function from ThemeContext component
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
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
          <h1 className="section-title">Contact Us</h1>
          <ContactForm />
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default Contact;

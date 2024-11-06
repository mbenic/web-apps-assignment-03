"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Container from "../components/Container";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <main
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

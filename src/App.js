import React, {useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos"

function App() {

  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1800,
    });
  });

  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

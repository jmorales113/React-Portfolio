import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1800,
    });
  });

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <NavBar open={open} setOpen={setOpen} />
        <NavMenu open={open} setOpen={setOpen} />
      </div>
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

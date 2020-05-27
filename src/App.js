import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Education />
      <Contact />
    </div>
  );
}

export default App;

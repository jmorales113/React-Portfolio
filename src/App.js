import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;

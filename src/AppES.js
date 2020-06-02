import React from "react";
import "./styles.css";
import NavBar from "./components/navBarES.jsx";
import Home from "./components/HomeES.jsx";
import About from "./components/AboutES";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

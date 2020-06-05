import React from "react";
import "./styles.css";
import NavBar from "./components/navBarES.jsx";
import Home from "./components/HomeES.jsx";
import About from "./components/AboutES";
import Features from "./components/FeaturesES";
import Location from "./components/LocationES";
import Galery from "./components/Galery";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Features />
      <Location />
      <Galery />
    </div>
  );
}

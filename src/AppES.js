import React from "react";
import "./styles.css";
import NavBar from "./components/navBarES.jsx";
import Home from "./components/HomeES.jsx";
import About from "./components/AboutES";
import Features from "./components/FeaturesES";
import Location from "./components/LocationES";
import Galery from "./components/Galery";
import Tarifas from "./components/TarifasES";
import Contactos from "./components/ContactosES";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

export default function App() {
  return (
    <div className="App">
      <ScrollUpButton
        style={{ backgroundColor: "transparent", bottom: "3rem" }}
        AnimationDuration={1000}
      />
      <NavBar />
      <Home />
      <About />
      <Features />
      <Location />
      <Galery />
      <Tarifas />
      <Contactos />
    </div>
  );
}

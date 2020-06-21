import React, { useState } from "react";
import "./styles.css";
/** Español */
import NavBar from "./components/navBarES.jsx";
import Home from "./components/HomeES.jsx";
import About from "./components/AboutES";
import Features from "./components/FeaturesES";
import Location from "./components/LocationES";
import Galery from "./components/GaleryES";
import Tarifas from "./components/TarifasES";
import Contactos from "./components/ContactosES";
/** Inglés */
import NavBarEN from "./components/navBarEN.jsx";
import HomeEN from "./components/HomeEN.jsx";
import AboutEN from "./components/AboutEN";
import FeaturesEN from "./components/FeaturesEN";
import LocationEN from "./components/LocationEN";
import GaleryEN from "./components/GaleryEN";
import TarifasEN from "./components/TarifasEN";
import ContactosEN from "./components/ContactosEN";

import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

export default function App() {
  const [language, setLanguage] = useState("Español")
  if (language === "Español") {
    return (
      <div className="App">
        <ScrollUpButton
          style={{ backgroundColor: "transparent", bottom: "3rem" }}
          AnimationDuration={1000}
        />
        <NavBar changeLanguage={(e) => {
          setLanguage(e.target.name);
        }} />
        <Home />
        <About />
        <Features />
        <Location />
        <Galery />
        <Tarifas />
        <Contactos />
      </div>
    );
  } else if (language === "English") {
    return (
      <div className="App">
        <ScrollUpButton
          style={{ backgroundColor: "transparent", bottom: "3rem" }}
          AnimationDuration={1000}
        />
        <NavBarEN changeLanguage={(e) => {
          setLanguage(e.target.name);
        }} />
        <HomeEN />
        <AboutEN />
        <FeaturesEN />
        <LocationEN />
        <GaleryEN />
        <TarifasEN />
        <ContactosEN />
      </div>
    );
  }

}

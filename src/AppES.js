import React, { useState } from "react";
import "./styles.css";
/** Español */
import NavBar from "./components/navBarES.jsx";
import Home from "./components/HomeES.jsx";
import About from "./components/AboutES";
import Features from "./components/FeaturesES";
import Location from "./components/LocationES";
import Bungalows from "./components/BungalowsES";
import Tarifas from "./components/TarifasES";
import Contactos from "./components/ContactosES";
/** Inglés */
import NavBarEN from "./components/navBarEN.jsx";
import HomeEN from "./components/HomeEN.jsx";
import AboutEN from "./components/AboutEN";
import FeaturesEN from "./components/FeaturesEN";
import LocationEN from "./components/LocationEN";
import BungalowsEN from "./components/BungalowsEN";
import TarifasEN from "./components/TarifasEN";
import ContactosEN from "./components/ContactosEN";
/** Gallego */
import NavBarGA from "./components/NavbarGA.jsx";
import HomeGA from "./components/HomeGA.jsx";
import AboutGA from "./components/AboutGA";
import FeaturesGA from "./components/FeaturesGA";
import LocationGA from "./components/LocationGA";
import BungalowsGA from "./components/BungalowsGA";
import TarifasGA from "./components/TarifasGA";
import ContactosGA from "./components/ContactosGA";
/** Francés */
import NavBarFR from "./components/navBarFR.jsx";
import HomeFR from "./components/HomeFR.jsx";
import AboutFR from "./components/AboutFR";
import FeaturesFR from "./components/FeaturesFR";
import LocationFR from "./components/LocationFR";
import BungalowsFR from "./components/BungalowsFR";
import TarifasFR from "./components/TarifasFR";
import ContactosFR from "./components/ContactosFR";

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
        <Bungalows />
        <Features />
        <Location />
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
        <BungalowsEN />
        <FeaturesEN />
        <LocationEN />
        <TarifasEN />
        <ContactosEN />
      </div>
    );
  } else if (language === "Galego") {
    return (
      <div className="App">
        <ScrollUpButton
          style={{ backgroundColor: "transparent", bottom: "3rem" }}
          AnimationDuration={1000}
        />
        <NavBarGA changeLanguage={(e) => {
          setLanguage(e.target.name);
        }} />
        <HomeGA />
        <AboutGA />
        <BungalowsGA />
        <FeaturesGA />
        <LocationGA />
        <TarifasGA />
        <ContactosGA />
      </div>
    );
  } else if (language === "Français") {
    return (
      <div className="App">
        <ScrollUpButton
          style={{ backgroundColor: "transparent", bottom: "3rem" }}
          AnimationDuration={1000}
        />
        <NavBarFR changeLanguage={(e) => {
          setLanguage(e.target.name);
        }} />
        <HomeFR />
        <AboutFR />
        <BungalowsFR />
        <FeaturesFR />
        <LocationFR />
        <TarifasFR />
        <ContactosFR />
      </div>
    );
  }

}

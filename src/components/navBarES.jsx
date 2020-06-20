import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-scroll";

function NavBar() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <nav
      id="navbar"
      class=" navbar navbar-expand-lg sticky-top navbar-light bg-light"
    >
      <Link
        smooth={true}
        duration={1000}
        to="Home"
        class="navbar-brand"
        href="#"
      >
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block "
          alt=""
          loading="lazy"
        />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active"></li>
          <li class="nav-item">
            <Link
              className="nav-link link"
              to="About"
              smooth={true}
              duration={1000}
            >
              Sobre nosotros
            </Link>
          </li>
          <li class="nav-item">
            <Link
              className="nav-link link"
              to="Features"
              smooth={true}
              duration={1000}
            >
              Servicios
            </Link>
          </li>
          <li class="nav-item">
            <Link
              className="nav-link link"
              to="Location"
              smooth={true}
              duration={1000}
            >
              Donde encontrarnos
            </Link>
          </li>
          <li class="nav-item">
            <Link
              className="nav-link link"
              to="Galery"
              smooth={true}
              duration={1000}
            >
              Galería
            </Link>
          </li>
          <li class="nav-item">
            <Link
              className="nav-link link"
              to="Tarifas"
              smooth={true}
              duration={1000}
            >
              Precios
            </Link>
          </li>
          <li class="nav-item">
            <Link
              className="nav-link link"
              to="Contactos"
              smooth={true}
              duration={1000}
            >
              Contacto
            </Link>
          </li>
          <li class="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Idioma
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Galego
              </a>
              <a class="dropdown-item" href="#">
                English
              </a>
              <a class="dropdown-item" href="#">
                Français
              </a>
              <a class="dropdown-item" href="#">
                português
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">
                Español
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

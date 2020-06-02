import React from "react";
import logo from "./images/logo.png";

function NavBar() {
  return (
    <nav class=" navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block "
          alt=""
          loading="lazy"
        />
      </a>
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
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
              Disabled
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
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

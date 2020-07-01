import React from "react";
import photo1 from "./images/carousel/B1.jpg";
import photo2 from "./images/carousel/B2.jpg";
import photo3 from "./images/carousel/B3.jpg";
import photo4 from "./images/carousel/B4.jpg";
import photo5 from "./images/carousel/B5.jpg";
import photo6 from "./images/carousel/B6.jpg";
import photo7 from "./images/carousel/photo3.jpg";
import photo8 from "./images/carousel/photo5.jpg";
import "../styles.css";

function Bungalow() {
  return (
    <div id="Bungalows" className="galery row noMargin">
      <div className="col-12 col-md-4">
        <h1>Bungalows</h1>
        <ul>
          <li style={{ marginBottom: 7 }}>
            Entièrement équipé pour 4 personnes. Chambre avec grand lit, chambre
            avec 2 lits jumeaux, séjour-cuisine avec réfrigérateur et salle de
            bain avec douche.
          </li>
          <li style={{ marginBottom: 7 }}>
            Changement hebdomadaire des draps et des serviettes.
          </li>
          <li style={{ marginBottom: 7 }}>
            Bungalows avec parking pour un véhicule
          </li>
          <li style={{ marginBottom: 7 }}>Terrasse avec table et chaises</li>
          <br />
          <p>Heure d'entrée du bungalow: 16:00</p>
          <p>Heure de départ: 12:00</p>
          <p>Séjour minimum des bungalows:</p>
          <p style={{ marginTop: 0, marginBottom: 0 }}>Pâques : 4 nuits</p>
          <p style={{ marginTop: 0, marginBottom: 0 }}>
            Juillet et Août: 7 nuits du samedi au samedi
          </p>
          <p style={{ marginTop: 0, marginBottom: 0 }}>
            Juin et septembre: 2 nuits
          </p>
          <br />
          <p>LES RÉSERVATIONS SONT RECOMMANDÉES</p>
        </ul>
      </div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade marginAuto col-12 col-md-8"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img id="myImg" src={photo1} alt="..." />
          </div>
          <div class="carousel-item">
            <img id="myImg" src={photo2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="myImg" src={photo3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="myImg" src={photo4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="myImg" src={photo5} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="myImg" src={photo6} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="myImg" src={photo7} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="myImg" src={photo8} class="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Bungalow;

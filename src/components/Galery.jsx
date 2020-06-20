import React from "react";
import photo1 from "./images/carousel/photo1.jpg";
import photo2 from "./images/carousel/photo2.jpg";
import photo3 from "./images/carousel/photo3.jpg";
import photo4 from "./images/carousel/photo4.jpg";
import photo5 from "./images/carousel/photo5.jpg";
import "../styles.css";

function Galery() {
  return (
    <div id="Galery" className="galery">
      <h1>Galería</h1>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade marginAuto"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={photo1} alt="..." />
          </div>
          <div class="carousel-item">
            <img src={photo2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={photo3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={photo4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={photo5} class="d-block w-100" alt="..." />
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

export default Galery;

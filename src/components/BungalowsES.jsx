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
          <li style={{ marginBottom: 7 }}>Completamente equipado para 4 personas, habitación con cama de matrimonio, habitación con camas gemelas, sala de estar, cocina con nevera y baño con ducha.</li>
          <li style={{ marginBottom: 7 }}>Cambio de ropa de cama y toallas semanal</li>
          <li style={{ marginBottom: 7 }}>Bungalows con parking para un vehículo</li>
          <li style={{ marginBottom: 7 }}>Terraza con mesa y sillas</li>
          <br />
          <p>Hora de entrada:     16:00</p>
          <p>Hora de salida:     12:00</p>
          <p>Esrancia mínima:</p>
          <p style={{ marginTop: 0, marginBottom: 0 }}>Semana Santa : 4 noches</p>
          <p style={{ marginTop: 0, marginBottom: 0 }}>Julio y Agosto: 7 noches de sábado a sábado</p>
          <p style={{ marginTop: 0, marginBottom: 0 }}>Junio y Septiembre: 2 noches</p>

          <p>SE RECOMIENDA HACER RESERVA</p>
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

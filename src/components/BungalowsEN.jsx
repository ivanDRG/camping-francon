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
            Fully equipped for 4 people. Bedroom with large bed, bedroom with 2
            twin beds, living room-kitchen with refrigerator and bathroom with
            shower.
          </li>
          <li style={{ marginBottom: 7 }}>
            Weekly change of bed linen and towels.
          </li>
          <li style={{ marginBottom: 7 }}>
            Bungalows with parking for one vehicle
          </li>
          <li style={{ marginBottom: 7 }}>Terrace with table and chairs</li>
          <br />
          <p>Bungalow entrance time: 16:00</p>
          <p>Time of departure: 12:00</p>
          <p>Minimum stay of bungalows:</p>
          <p style={{ marginTop: 0, marginBottom: 0 }}>Easter : 4 nights</p>
          <p style={{ marginTop: 0, marginBottom: 0 }}>
            July and August: 7 nights from Saturday to Saturday
          </p>
          <p style={{ marginTop: 0, marginBottom: 0 }}>
            June and September: 2 nights
          </p>
          <br/>
          <p>RESERVATIONS ARE RECOMMENDED</p>
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

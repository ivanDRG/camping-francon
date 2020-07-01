import React from "react";
import bigImage from "./images/homeimage2.jpg";
import road from "./images/road.jpg";
import bungalow from "./images/bungalow.jpg";
import { isBrowser } from "react-device-detect";

function AboutES() {
  return (
    <div id="About" className="aboutContainer">
      <div className="row relative noMargin">
        {isBrowser && (
          <div className="col-sm-12 col-md-6 colAbout">
            <img src={bigImage} alt="" className="bigImg" />
          </div>
        )}
        <div className="col-6 col-md-2 colAbout ">
          <div className="textAbout marginBottom">
            <h1>Camping</h1>
            <p>
              Uma forma divertida e relaxante de desfrutar da praia e do sol,
              sem preocupações ou distracções.
            </p>
          </div>
          <div>
            <img src={road} alt="" className="aboutImage" />
          </div>
        </div>

        <div className="col-6 col-md-2 colAbout">
          <div>
            <img src={bungalow} alt="" className="aboutImage" />
          </div>
          <div className="textAbout marginTop">
            <h1>Conforto + Liberdade</h1>
            <p>
              Tem todo o conforto de casa e acesso directo à praia, por isso
              pode ir e vir como quiser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutES;

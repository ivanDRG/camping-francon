import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contactos() {
  var date = new Date();
  var year = date.getFullYear();

  return (
    <div id="Contactos">
      <div className="contactos row noMargin">
        <div className="col-12 col-md-7 contactosk">
          <h2>¡Contáctanos!</h2>
          <p>No dudes en preguntar y resolver tus dudas en el teléfono: </p>
          <p>+34 654 452 245 o síguenos en nuestras redes</p>
        </div>
        <div className="col-12 col-md-5 contactosk">
          <IconButton
            target="_blank"
            href="https://www.facebook.com/pages/Camping-Francon/667474736646920"
          >
            <FacebookIcon className="icon" />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://www.turismo.gal/recurso/-/detalle/6606/francon?langId=es_ES&tp=69&ctre=139"
          >
            <LinkedInIcon className="icon" />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://www.vayacamping.net/camping/francon"
          >
            <TwitterIcon className="icon" />
          </IconButton>
          <IconButton target="_blank" href="https://www.w3schools.com">
            <InstagramIcon className="icon" />
          </IconButton>
        </div>
        <div className="col-12 copyright">
          <p>© Copyright Camping Francon {year}</p>
        </div>
      </div>
    </div>
  );
}
export default Contactos;

import React from "react";
import "../styles.css";
import WeekendIcon from "@material-ui/icons/Weekend";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";

function Features() {
  return (
    <div id="Features" className="Features">
      <h1>O que nós oferecemos?</h1>
      <p>Reunir o melhor da costa e do campo num só lugar</p>
      <div className="row noMargin">
        <div className="col-12 col-md-4">
          <WeekendIcon />
          <h3>Conforto</h3>
          <p>
            Tem todo o tipo de comodidades, como o acesso à luz eléctrica,
            restaurante e chuveiros para que você se sinta em casa.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <BeachAccessIcon />
          <h3>Lazer</h3>
          <p>
            Desfrute de uma das melhores praias do estuário com acesso directo a
            partir de o acampamento.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <AirlineSeatIndividualSuiteIcon />
          <h3>Tranquilidade</h3>
          <p>
            Aproveite a paz e o sossego do acampamento durante a sua estadia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;

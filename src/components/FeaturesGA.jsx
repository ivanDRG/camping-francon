import React from "react";
import "../styles.css";
import WeekendIcon from "@material-ui/icons/Weekend";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";

function Features() {
    return (
        <div id="Features" className="Features">
            <h1>¿Qué ofrecemos?</h1>
            <p>Xunta o mellor da costa e o campo nun mesmo lugar</p>
            <div className="row noMargin">
                <div className="col-12 col-md-4">
                    <WeekendIcon />
                    <h3>Comodidad</h3>
                    <p>
                        Goza de todo tipo de comodidades, como acceso a luz eléctrica,
                        restaurante e duchas para que te sintas coma na casa.
          </p>
                </div>
                <div className="col-12 col-md-4">
                    <BeachAccessIcon />
                    <h3>Ocio</h3>
                    <p>
                        Disfruta dunha das mellores praias da ría con acceso directo
                        dende o camping.
          </p>
                </div>
                <div className="col-12 col-md-4">
                    <AirlineSeatIndividualSuiteIcon />
                    <h3>Tranquilidade</h3>
                    <p>
                        Aproveita a tranquilidade e o silencio do camping durante toda a tua
                        estancia.
          </p>
                </div>
            </div>
        </div>
    );
}

export default Features;

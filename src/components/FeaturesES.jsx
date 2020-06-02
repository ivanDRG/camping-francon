import React from "react";
import "../styles.css";
import WeekendIcon from '@material-ui/icons/Weekend';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';

function Features() {
    return(
        <div className="Features">
            <h1>¿Qué ofrecemos?</h1>
            <p>Junta lo mejor de la costa y el campo en un mismo lugar</p>
            <div className="row noMargin">
                <div className="col-12 col-md-4">
                    <WeekendIcon />
                    <h3>Comodidad</h3>
                    <p>Goza de todo tipo de comodidades, como acceso a luz eléctrica, restaurante y duchas para que te sientas como en casa.</p>
                </div>
                <div className="col-12 col-md-4">
                    <BeachAccessIcon />
                    <h3>Ocio</h3>
                    <p>Disfruta de una de las mejores playas de la ría con acceso directo desde el camping.</p>
                </div>
                <div className="col-12 col-md-4">
                    <AirlineSeatIndividualSuiteIcon />
                    <h3>Tranquilidad</h3>
                    <p>Aprovecha la tranquilidad y el silencio del camping durante toda tu estancia.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;
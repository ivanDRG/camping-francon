import React from "react";
import "../styles.css";
import WeekendIcon from "@material-ui/icons/Weekend";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";

function Features() {
    return (
        <div id="Features" className="Features">
            <h1>Ce que nous offrons?</h1>
            <p>Réunir le meilleur de la côte et de la campagne en un seul endroit</p>
            <div className="row noMargin">
                <div className="col-12 col-md-4">
                    <WeekendIcon />
                    <h3>Confort</h3>
                    <p>
                        Il dispose de toutes sortes d'équipements, tels que l'accès à la lumière électrique,
                        restaurant et douches pour vous faire sentir comme chez vous.
          </p>
                </div>
                <div className="col-12 col-md-4">
                    <BeachAccessIcon />
                    <h3>Leisure</h3>
                    <p>
                        Profitez d'une des plus belles plages de l'estuaire avec un accès direct
                        du camping.
          </p>
                </div>
                <div className="col-12 col-md-4">
                    <AirlineSeatIndividualSuiteIcon />
                    <h3>Tranquillité</h3>
                    <p>
                        Profitez du calme et de la tranquillité du camping lors de votre
                        rester.
          </p>
                </div>
            </div>
        </div>
    );
}

export default Features;

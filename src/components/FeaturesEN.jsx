import React from "react";
import "../styles.css";
import WeekendIcon from "@material-ui/icons/Weekend";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";

function Features() {
    return (
        <div id="Features" className="Features">
            <h1>¿What we offer?</h1>
            <p>Bringing together the best of the coast and the countryside in one place</p>
            <div className="row noMargin">
                <div className="col-12 col-md-4">
                    <WeekendIcon />
                    <h3>Comfort</h3>
                    <p>
                        It has all kinds of amenities, such as access to electric light,
                        restaurant and showers to make you feel like at home.
          </p>
                </div>
                <div className="col-12 col-md-4">
                    <BeachAccessIcon />
                    <h3>Leisure</h3>
                    <p>
                        Enjoy one of the best beaches in the estuary with direct access
                        from the campsite.
          </p>
                </div>
                <div className="col-12 col-md-4">
                    <AirlineSeatIndividualSuiteIcon />
                    <h3>Tranquility</h3>
                    <p>
                        Take advantage of the peace and quiet of the campsite during your
                        stay.
          </p>
                </div>
            </div>
        </div>
    );
}

export default Features;

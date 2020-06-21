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
                            A fun and relaxing way to enjoy the beach and the sun,
                            with no worries or distractions.
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
                        <h1>Comfort + Freedom</h1>
                        <p>
                            It has all the comforts of home and direct access to the
                            beach, so you can come and go as you please.
            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutES;

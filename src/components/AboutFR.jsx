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

                            Une façon amusante et relaxante de profiter de la plage et du soleil,
                            sans soucis ni distractions.
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
                        <h1>
                            Confort + liberté</h1>
                        <p>

                            Il a tout le confort de la maison et un accès direct à la
                            plage, donc vous pouvez aller et venir à votre guise.
            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutES;

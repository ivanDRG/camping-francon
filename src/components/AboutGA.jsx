import React from "react";
import bigImage from "./images/homeimage2.jpg";
import road from "./images/road.jpg";
import bungalow from "./images/bungalow.jpg";
import { isBrowser } from "react-device-detect";

function AboutGA() {
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
                            Unha forma divertida e relaxante de disfrutar da praia e o sol,
                            sen preocupacións nin distraccións.
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
                        <h1>Comodidade + liberdade</h1>
                        <p>
                            Goza de todalas comodidades e ademáis con acceso directo á
                            praia, para que podas entrar e saír cando queiras.
            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutGA;

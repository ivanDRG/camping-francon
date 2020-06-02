import React from "react";
import bigImage from "./images/homeimage2.jpg"
import road from "./images/road.jpg"
import bungalow from "./images/bungalow.jpg"
import {isBrowser} from "react-device-detect"

function AboutES() {
    return(
        <div className="row relative aboutContainer noMargin">
        {isBrowser && <div className="col-sm-12 col-md-6 colAbout">
        <img src={bigImage} alt="" className="bigImg" />
        </div>}
        <div className="col-6 col-md-2 colAbout ">
            <div className="textAbout marginBottom">
                <h1>Camping</h1>
                <p>Una forma divertida y relajante de disfrutar de la playa y el sol, sin preocupaciones ni distracciones.</p>
            </div>
            <div >
                <img src={road} alt="" className="aboutImage"/>
            </div>
        </div>
        
        <div className="col-6 col-md-2 colAbout">
            <div>
                <img src={bungalow} alt="" className="aboutImage"/>
            </div>
            <div className="textAbout marginTop">
                <h1>Hello</h1>
            </div>
        </div>
        
        </div>
    );
}
export default AboutES;
import React from "react";
import "../styles.css";

function Location() {
    

    return(
        <div className="location row noMargin">
        <div className="col-12 col-md-6">
        <h1>Encuentranos en ...</h1>
        <p>Carretera Playa Menduiña
Bajada Sartaxéns, 51
36946 Cangas de Morrazo
Pontevedra - España</p>
        </div>
        <div id="map" className="col-12 col-md-6"></div>
        </div>
    );
}

export default Location;
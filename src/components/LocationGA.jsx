import React from "react";
import "../styles.css";

function Location() {
    return (
        <div id="Location" className="location row noMargin">
            <div className="col-12 col-md-6">
                <h1>Atópanos en ...</h1>
                <p>
                    Estrada Praia Menduiña Baixada Sartaxéns, 51 36946 Cangas do Morrazo
                    Pontevedra - España
        </p>
            </div>
            <div id="map" className="col-12 col-md-6"></div>
        </div>
    );
}

export default Location;

import React from "react";

function SelectOne(props) {
    return(
      <select id="inputState" class="form-control" onChange={props.change}>
        <option selected>Escoge uno</option>
        <option>Tienda</option>
        <option>Autocaravana</option>
        <option>Caravana</option>
        <option>Bungalow</option>
      </select>
    );
}

export default SelectOne
import React from "react";

function SelectOne(props) {
  return (
    <div>
      <label for="state">State</label>
      <select
        class="custom-select d-block w-100 form-control"
        id="inputState"
        onChange={props.change}
      >
        <option selected>Escoge uno</option>
        <option>Tienda</option>
        <option>Autocaravana</option>
        <option>Caravana</option>
        <option>Bungalow</option>
      </select>
      <div class="invalid-feedback">Please provide a valid state.</div>
    </div>
  );
}

export default SelectOne;

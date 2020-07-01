import React from "react";

function SelectOne(props) {
  return (
    <div>
      <label for="state">Onde</label>
      <select
        class="custom-select d-block w-100 form-control"
        id="inputState"
        onChange={props.change}
      >
        <option selected>Selecione uma</option>
        <option>Tenda</option>
        <option>Motorhome</option>
        <option>Caravana</option>
        <option>Bungalow</option>
      </select>
      <div class="invalid-feedback">Por favor, forneça um estado válido.</div>
    </div>
  );
}

export default SelectOne;

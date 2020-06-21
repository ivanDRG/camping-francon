import React from "react";

function SelectOne(props) {
    return (
        <div>
            <label for="state">Where</label>
            <select
                class="custom-select d-block w-100 form-control"
                id="inputState"
                onChange={props.change}
            >
                <option selected>Select one</option>
                <option>Tent</option>
                <option>Motorhome</option>
                <option>Caravan</option>
                <option>Bungalow</option>
            </select>
            <div class="invalid-feedback">Please provide a valid state.</div>
        </div>
    );
}

export default SelectOne;

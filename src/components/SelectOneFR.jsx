import React from "react";

function SelectOne(props) {
    return (
        <div>
            <label for="state">Où</label>
            <select
                class="custom-select d-block w-100 form-control"
                id="inputState"
                onChange={props.change}
            >
                <option selected>Sélectionnez un</option>
                <option>Tente</option>
                <option>Camping car</option>
                <option>Caravane</option>
                <option>Bungalow</option>
            </select>
            <div class="invalid-feedback">
                Veuillez fournir un état valide.</div>
        </div>
    );
}

export default SelectOne;

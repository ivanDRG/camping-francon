import React from "react";
import "../styles.css";

function CheckBox(props) {
  return (
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={props.type}
        aria-label="Checkbox for following text input"
        onChange={props.change}
      />
      <label class="custom-control-label" for={props.type}>
        {props.type}
      </label>
    </div>
  );
}
export default CheckBox;

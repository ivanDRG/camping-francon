import React from "react";
import "../styles.css";

function CheckBox(props) {
  return (
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
        </div>
      </div>
      <p className="form-control">{props.type}</p>
    </div>
  );
}
export default CheckBox;

import React from "react";
import "../styles.css";

function InputNumber(props) {
  return (
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">
          {props.name}
        </span>
      </div>
      <input
        type="number"
        class="form-control"
        aria-label="Username"
        aria-describedby="basic-addon1"
        max={props.max}
        onChange={props.change}
      />
    </div>
  );
}
export default InputNumber;

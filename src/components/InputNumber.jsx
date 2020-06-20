import React from "react";
import "../styles.css";

function InputNumber(props) {
  return (
    <div class="col-md-6 mb-3">
      <label for="firstName">{props.name}</label>
      <input
        type="number"
        class="form-control"
        aria-label="Username"
        aria-describedby="basic-addon1"
        min="0"
        max={props.max}
        onChange={props.change}
      />
    </div>
  );
}
export default InputNumber;

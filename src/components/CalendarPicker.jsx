import React from "react";
import "../styles.css";

function Calendar(props) {
  let time = new Date();
  let year = time.getFullYear();
  let min = year + "-06-15";
  let max = year + "-09-15";

  return (
    <input
      className="custom-select d-block w-100 form-control"
      type="date"
      id="start"
      name="trip-start"
      min={min}
      max={max}
      onChange={props.change}
    />
  );
}
export default Calendar;

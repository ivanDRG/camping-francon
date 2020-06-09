import React, { useState } from "react";
import "../styles.css";
import InputNumber from "./InputNumber";
import CheckBox from "./CheckBox";
import Calendar from "./CalendarPicker";
import Select from "./SelectOneES";

function Tarifas() {
  const [adultos, setAdultos] = useState(0);
  const [niños, setNiños] = useState(0);
  const [where, setWhere] = useState(0);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  console.log(niños, adultos, where, from, to);

  function differenceDays() {
    let d1 = new Date(from);
    let d2 = new Date(to);
    let Difference_In_Time = d2 - d1;
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    console.log(Difference_In_Days);
  }
  return (
    <div className="tarifas">
      <h1> Precios </h1>
      <form action="">
        <div className="">
          <h3>Cuántos sois?</h3>
          <InputNumber
            name="adultos"
            change={(e) => {
              setAdultos(e.target.value);
            }}
          />
          <InputNumber
            name="niños"
            change={(e) => {
              setNiños(e.target.value);
            }}
          />
        </div>
        <div className="">
          <h3>En qué os quedais?</h3>
          <Select
            change={(e) => {
              setWhere(e.target.value);
            }}
          />
        </div>
        <div className="">
          <h4>Desde</h4>
          <Calendar
            change={(e) => {
              setFrom(e.target.value);
            }}
          />
          <h4>Hasta</h4>
          <Calendar
            change={(e) => {
              setTo(e.target.value);
            }}
          />
          <h3>Semana Santa</h3>
          <CheckBox type="Semana santa" />
          <InputNumber name="Dias" />
        </div>
        <div>
          <CheckBox type="Coche" />
          <CheckBox type="Moto" />
          <CheckBox type="Toma de corriente" />
        </div>
        <button class="btn btn-primary" type="button" onClick={differenceDays}>
          Submit
        </button>
      </form>
      <input
        class="form-control"
        type="text"
        placeholder="Readonly input here..."
        readonly
      ></input>
    </div>
  );
}

export default Tarifas;

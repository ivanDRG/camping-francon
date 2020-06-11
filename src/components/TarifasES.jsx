import React, { useState } from "react";
import "../styles.css";
import InputNumber from "./InputNumber";
import CheckBox from "./CheckBox";
import Calendar from "./CalendarPicker";
import Select from "./SelectOneES";

function Tarifas() {
  const [adultos, setAdultos] = useState(0);
  const [niños, setNiños] = useState(0);
  const [where, setWhere] = useState("");
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [semSant, setSemSant] = useState(false);
  const [semSantD, setSemSantD] = useState(0);
  const [tc, setTC] = useState(false);
  const [car, setCar] = useState(false);
  const [moto, setMoto] = useState(false);
  const [result, setResult] = useState(
    "Clickea el botón para revelar el precio final"
  );
  console.log(
    niños,
    adultos,
    where,
    from,
    to,
    semSant,
    semSantD,
    car,
    moto,
    tc
  );

  function calc() {
    let resulto = 0;
    let d1 = new Date(from);
    let d2 = new Date(to);
    let m1 = d1.getMonth;
    let m2 = d2.getMonth;
    let dy2 = d2.getDate;
    let Difference_In_Time = d2 - d1;
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let lowTemp = Difference_In_Days - 62;
    let rDays = Difference_In_Days - dy2;
    let TA = 0;
    let TB = 0;

    if (where !== "") {
      if (where === "Tienda") {
        resulto = 6.8 * Difference_In_Days;
      } else if (where === "Autocaravana") {
        resulto = 12.8 * Difference_In_Days;
      } else if (where === "Caravana") {
        resulto = 7.6 * Difference_In_Days;
      } else if (where === "Bungalow") {
        if (m1 === 5 && m2 === 8) {
          if (lowTemp <= 3) {
            resulto = 85.6 * 62 + lowTemp * 80.25;
          } else if (3 < lowTemp < 8) {
            resulto = 85.6 * 62 + lowTemp * 74.9;
          } else {
            resulto = 85.6 * 62 + lowTemp * 69.55;
          }
        } else if (m1 === 5 && 5 < m2 < 8) {
          if (m2 === 6) {
            if (dy2 <= 3) {
              TA = dy2 * 96.3;
            } else if (3 < d2 < 8) {
              TA = dy2 * 96.3;
            } else {
              TA = dy2 * 85.6;
            }
            if (rDays <= 3) {
              resulto = TA + rDays * 80.25;
            } else if (3 < d2 < 8) {
              resulto = TA + rDays * 74.9;
            } else {
              resulto = TA + rDays * 69.55;
            }
          }
          if (m2 === 7) {
            if (dy2 <= 3) {
              TA = dy2 * 96.3 + 31 * 85.6;
            } else if (3 < d2 < 8) {
              TA = dy2 * 96.3 + 31 * 85.6;
            } else {
              TA = dy2 * 85.6 + 31 * 85.6;
            }
            if (rDays <= 3) {
              resulto = TA + rDays * 80.25;
            } else if (3 < d2 < 8) {
              resulto = TA + rDays * 74.9;
            } else {
              resulto = TA + rDays * 69.55;
            }
          }
        } else if (5 < m1 < 8 && m2 === 8) {
          if (m1 === 7) {
            if (dy2 <= 3) {
              TB = dy2 * 80.25;
            } else if (3 < d2 < 8) {
              TB = dy2 * 74.9;
            } else {
              TB = dy2 * 69.55;
            }
            if (rDays <= 3) {
              resulto = TB + rDays * 96.3;
            } else if (3 < d2 < 8) {
              resulto = TB + rDays * 96.3;
            } else {
              resulto = TB + rDays * 85.6;
            }
          }
          if (m1 === 6) {
            if (dy2 <= 3) {
              TB = dy2 * 80.25 + 31 * 85.6;
            } else if (3 < dy2 < 8) {
              TB = dy2 * 74.9 + 31 * 85.6;
            } else {
              TB = dy2 * 69.55 + 31 * 85.6;
            }
            if (rDays <= 3) {
              resulto = TB + rDays * 96.3;
            } else if (3 < d2 < 8) {
              resulto = TB + rDays * 96.3;
            } else {
              resulto = TB + rDays * 96.3;
            }
          }
        } else if (5 < m1 < 8 && 5 < m2 < 8) {
          if (Difference_In_Days < 4) {
            resulto = Difference_In_Days * 80.25;
          } else if (3 < Difference_In_Days < 8) {
            resulto = Difference_In_Days * 74.9;
          } else {
            resulto = Difference_In_Days * 69.55;
          }
        } else if (m1 === m2) {
          if (5 < m1 < 9) {
            if (Difference_In_Days < 4) {
              resulto = Difference_In_Days * 96.3;
            } else if (Difference_In_Days < 8) {
              resulto = Difference_In_Days * 96.3;
            } else {
              resulto = Difference_In_Days * 85.6;
            }
          } else {
            if (Difference_In_Days < 4) {
              resulto = Difference_In_Days * 80.25;
            } else if (Difference_In_Days < 8) {
              resulto = Difference_In_Days * 74.9;
            } else {
              resulto = Difference_In_Days * 69.55;
            }
          }
        }
      } else {
        alert("Por favor corrija los errores");
      }
    }
    setResult(parseFloat(resulto.toFixed(2)));
    console.log(d1.getMonth);
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
          <CheckBox
            type="Semana santa"
            change={() => {
              setSemSant(!semSant);
            }}
          />
          <InputNumber
            name="Dias"
            change={(e) => {
              setSemSantD(e.target.value);
            }}
          />
        </div>
        <div>
          <CheckBox
            type="Coche"
            change={() => {
              setCar(!car);
            }}
          />
          <CheckBox
            type="Moto"
            change={() => {
              setMoto(!moto);
            }}
          />
          <CheckBox
            type="Toma de corriente"
            change={() => {
              setTC(!tc);
            }}
          />
        </div>
        <button class="btn btn-primary" type="button" onClick={calc}>
          Calcular
        </button>
      </form>
      <h4 className="form-control">{result}</h4>
    </div>
  );
}

export default Tarifas;

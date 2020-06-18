import React, { useState } from "react";
import "../styles.css";
import InputNumber from "./InputNumber";
import CheckBox from "./CheckBox";
import Calendar from "./CalendarPicker";
import Select from "./SelectOneES";

function Tarifas() {
  const [err, setErr] = useState(false);
  const [adultos, setAdultos] = useState(0);
  const [niños, setNiños] = useState(0);
  const [where, setWhere] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
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
    let m1 = d1.getMonth();
    let m2 = d2.getMonth();
    let dy2 = d2.getDate();
    let Difference_In_Time = d2 - d1;
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let rDays = Difference_In_Days - dy2;
    let rfDays = Difference_In_Days - 31 - dy2;
    let rtDays = Difference_In_Days - 62 - dy2;

    const TM1 = 80.25;
    const TM2 = 74.9;
    const TM3 = 69.55;

    const TA12 = 96.3;
    const TA3 = 85.6;

    if (where !== "" && where !== "Escoge uno") {
      if (where === "Tienda") {
        if (semSant) {
          resulto = 6.8 * semSantD;
        } else {
          resulto = 6.8 * Difference_In_Days;
        }
      } else if (where === "Autocaravana") {
        if (semSant) {
          resulto = 12.8 * semSantD;
        } else {
          resulto = 12.8 * Difference_In_Days;
        }
      } else if (where === "Caravana") {
        if (semSant) {
          resulto = 7.6 * semSantD;
        } else {
          resulto = 7.6 * Difference_In_Days;
        }
      } else if (where === "Bungalow") {
        if (m1 === m2 || semSant) {
          if (semSant) {
            if (semSantD < 4) {
              resulto = TM1 * semSantD;
            } else if (semSantD < 8) {
              resulto = TM2 * semSantD;
            }
          } else if (m1 === 5 || m1 === 8) {
            if (Difference_In_Days < 4) {
              resulto = TM1 * Difference_In_Days;
            } else if (Difference_In_Days < 8) {
              resulto = TM2 * Difference_In_Days;
            } else {
              resulto = TM3 * Difference_In_Days;
            }
          } else if (5 < m1 < 8) {
            if (Difference_In_Days < 4) {
              resulto = TA12 * Difference_In_Days;
            } else if (Difference_In_Days < 8) {
              resulto = TA12 * Difference_In_Days;
            } else {
              resulto = TA3 * Difference_In_Days;
            }
          }
        } else if (m1 === 5 && 5 < m2 < 8) {
          if (m2 === 6) {
            if (dy2 < 4) {
              if (rDays < 4) {
                resulto = dy2 * TA12 + rDays * TM1;
              } else if (rDays < 8) {
                resulto = dy2 * TA12 + rDays * TM2;
              } else {
                resulto = dy2 * TA12 + rDays * TM3;
              }
            } else if (dy2 < 8) {
              if (rDays < 4) {
                resulto = dy2 * TA12 + rDays * TM1;
              } else if (rDays < 8) {
                resulto = dy2 * TA12 + rDays * TM2;
              } else {
                resulto = dy2 * TA12 + rDays * TM3;
              }
            } else {
              if (rDays < 4) {
                resulto = dy2 * TA3 + rDays * TM1;
              } else if (rDays < 8) {
                resulto = dy2 * TA3 + rDays * TM2;
              } else {
                resulto = dy2 * TA3 + rDays * TM3;
              }
            }
          } else if (m2 === 7) {
            if (dy2 < 4) {
              if (rfDays < 4) {
                resulto = dy2 * TA12 + TA3 * 31 + rfDays * TM1;
              } else if (rfDays < 8) {
                resulto = dy2 * TA12 + TA3 * 31 + rfDays * TM2;
              } else {
                resulto = dy2 * TA12 + TA3 * 31 + rfDays * TM3;
              }
            } else if (dy2 < 8) {
              if (rfDays < 4) {
                resulto = dy2 * TA12 + TA3 * 31 + rfDays * TM1;
              } else if (rfDays < 8) {
                resulto = dy2 * TA12 + TA3 * 31 + rfDays * TM2;
              } else {
                resulto = dy2 * TA12 + TA3 * 31 + rfDays * TM3;
              }
            } else {
              if (rfDays < 4) {
                resulto = dy2 * TA3 + TA3 * 31 + rfDays * TM1;
              } else if (rfDays < 8) {
                resulto = dy2 * TA3 + TA3 * 31 + rfDays * TM2;
              } else {
                resulto = dy2 * TA3 + TA3 * 31 + rfDays * TM3;
              }
            }
          }
        } else if (5 < m1 < 8 && m2 === 8) {
          if (m1 === 7) {
            if (dy2 < 4) {
              if (rDays < 4) {
                resulto = dy2 * TM1 + rDays * TA12;
              } else if (rDays < 8) {
                resulto = dy2 * TM1 + rDays * TA12;
              } else {
                resulto = dy2 * TM1 + rDays * TA3;
              }
            } else if (dy2 < 8) {
              if (rDays < 4) {
                resulto = dy2 * TM2 + rDays * TA12;
              } else if (rDays < 8) {
                resulto = dy2 * TM2 + rDays * TA12;
              } else {
                resulto = dy2 * TM2 + rDays * TA3;
              }
            } else {
              if (rDays < 4) {
                resulto = dy2 * TM3 + rDays * TA12;
              } else if (rDays < 8) {
                resulto = dy2 * TM3 + rDays * TA12;
              } else {
                resulto = dy2 * TM3 + rDays * TA3;
              }
            }
          } else if (m1 === 6) {
            if (dy2 < 4) {
              if (rfDays < 4) {
                resulto = dy2 * TM1 + TA3 * 31 + rfDays * TA12;
              } else if (rfDays < 8) {
                resulto = dy2 * TM1 + TA3 * 31 + rfDays * TA12;
              } else {
                resulto = dy2 * TM1 + TA3 * 31 + rfDays * TA3;
              }
            } else if (dy2 < 8) {
              if (rfDays < 4) {
                resulto = dy2 * TM2 + TA3 * 31 + rfDays * TA12;
              } else if (rfDays < 8) {
                resulto = dy2 * TM2 + TA3 * 31 + rfDays * TA12;
              } else {
                resulto = dy2 * TM2 + TA3 * 31 + rfDays * TA3;
              }
            } else {
              if (rfDays < 4) {
                resulto = dy2 * TM3 + TA3 * 31 + rfDays * TA12;
              } else if (rfDays < 8) {
                resulto = dy2 * TM3 + TA3 * 31 + rfDays * TA12;
              } else {
                resulto = dy2 * TM3 + TA3 * 31 + rfDays * TA3;
              }
            }
          }
        } else if (m1 === 6 && m2 === 7) {
          if (Difference_In_Days < 4) {
            resulto = Difference_In_Days * TM1;
          } else if (Difference_In_Days < 8) {
            resulto = Difference_In_Days * TM2;
          } else {
            resulto = Difference_In_Days * TM3;
          }
        } else if (m1 === 5 && m2 === 8) {
          if (dy2 < 4) {
            if (rtDays < 4) {
              resulto = dy2 * TM1 + TA3 * 62 + rtDays * TM1;
            } else if (rtDays < 8) {
              resulto = dy2 * TM1 + TA3 * 62 + rtDays * TM2;
            } else {
              resulto = dy2 * TM1 + TA3 * 62 + rtDays * TM3;
            }
          } else if (dy2 < 8) {
            if (rtDays < 4) {
              resulto = dy2 * TM2 + TA3 * 62 + rtDays * TM1;
            } else if (rtDays < 8) {
              resulto = dy2 * TM2 + TA3 * 62 + rtDays * TM2;
            } else {
              resulto = dy2 * TM2 + TA3 * 62 + rtDays * TM3;
            }
          } else {
            if (rtDays < 4) {
              resulto = dy2 * TM3 + TA3 * 62 + rtDays * TM1;
            } else if (rtDays < 8) {
              resulto = dy2 * TM3 + TA3 * 62 + rtDays * TM2;
            } else {
              resulto = dy2 * TM3 + TA3 * 62 + rtDays * TM3;
            }
          }
        }
      }
      if (adultos !== 0) {
        if (semSant) {
          resulto += adultos * 6.8 * semSantD;
        } else {
          resulto += adultos * 6.8 * Difference_In_Days;
        }
        setErr(false);
      } else {
        setErr(true);
      }
      if (niños !== 0) {
        if (semSant) {
          resulto += niños * 5.6 * semSantD;
        } else {
          resulto += niños * 5.6 * Difference_In_Days;
        }
      }
      if (car) {
        if (semSant) {
          resulto += 6.8 * semSantD;
        } else {
          resulto += 6.8 * Difference_In_Days;
        }
      }
      if (tc) {
        if (semSant) {
          resulto += 5.0 * semSantD;
        } else {
          resulto += 5.0 * Difference_In_Days;
        }
      }
      if (moto) {
        if (semSant) {
          resulto += 4.7 * semSantD;
        } else {
          resulto += 4.7 * Difference_In_Days;
        }
      }
    } else {
      setErr(true);
    }
    setResult(parseFloat(resulto.toFixed(2)));
    console.log(d1.getMonth);
  }
  return (
    <div className="tarifas whitebg">
      <div class="container">
        <div class="py-5 text-center">
          <h2>Precios</h2>
          <p class="lead">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
        {err && (
          <div class="alert alert-danger" role="alert">
            Comprueba que todos los campos estén rellenados correctamente
          </div>
        )}
        <div class="row">
          <div class="col-md-12 order-md-1">
            <h4 class="mb-3">Billing address</h4>
            <form action="" class="needs-validation" novalidate="">
              <div class="row">
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
              <div class="row">
                <div class="col-md-4 mb-3">
                  <Select
                    change={(e) => {
                      setWhere(e.target.value);
                    }}
                  />
                </div>
                <div class="col-md-4 mb-3">
                  <h4>Desde</h4>
                  <Calendar
                    change={(e) => {
                      setFrom(e.target.value);
                    }}
                  />
                </div>
                <div class="col-md-4 mb-3">
                  <h4>Hasta</h4>
                  <Calendar
                    change={(e) => {
                      setTo(e.target.value);
                    }}
                  />
                </div>
              </div>
              <hr class="mb-4" />
              <h3>o</h3>
              <hr class="mb-4" />
              <div className="row">
                <div class="custom-control custom-checkbox col-md-6 mb-3">
                  <h3>Semana Santa</h3>
                  <CheckBox
                    type="Semana santa"
                    change={() => {
                      setSemSant(!semSant);
                    }}
                  />
                </div>
                <div class="custom-control custom-checkbox col-md-6 mb-3">
                  <InputNumber
                    name="Dias"
                    max="7"
                    change={(e) => {
                      setSemSantD(e.target.value);
                    }}
                  />
                </div>
              </div>
              <hr class="mb-4" />
              <h4 class="mb-3">Extras</h4>
              <div className="row">
                <div className="col-md-2 mb-6">
                  <CheckBox
                    type="Coche"
                    change={() => {
                      setCar(!car);
                    }}
                  />
                </div>
                <div className="col-md-2 mb-6">
                  <CheckBox
                    type="Moto"
                    change={() => {
                      setMoto(!moto);
                    }}
                  />
                </div>
                <div className="col-md-2 mb-6">
                  <CheckBox
                    type="Toma de corriente"
                    change={() => {
                      setTC(!tc);
                    }}
                  />
                </div>
              </div>
              <hr class="mb-4" />
              <h4 className="form-control">{result}</h4>
              <button
                class="btn btn-primary btn-lg btn-block"
                type="button"
                onClick={calc}
              >
                Calcular el precio final
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarifas;

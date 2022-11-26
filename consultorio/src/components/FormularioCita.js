import React, { useState, useEffect } from "react";
import Datepicker from "react-datepicker";
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";

const FormularioCita = ({ setAgendarCita, citas, agregarCita }) => {
  const [selected, setDate] = useState(new Date());
  const [doctor, setDoctor] = useState("Especialista necesario");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [numero, setNumero] = useState("");
  const [pago, setPago] = useState("Metodo de pago");

  const today = new Date();
  const min = new Date();
  const max = new Date();
  min.setHours(7);
  max.setHours(20);

  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="btn-1" onClick={onClick}>
      {value}
    </button>
  );

  const excludeTimes = () => {
    let citasDia = [];
    for (let i = 0; i < citas.length; i++) {
      if (citas[i].getDate() === selected.getDate()) {
        citasDia.push(citas[i]);
      } else if (citasDia.length === 0) {
        citasDia = [];
      }
    }
    return citasDia;
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  useEffect(() => {
    excludeTimes();
  });

  const onChange = (e) => {
    if (e.target.name === "nombre") {
      setNombre(e.target.value);
      //   console.log("Nombre:", nombre);
    }
    if (e.target.name === "correo") {
      setCorreo(e.target.value);
      //   console.log("Correo:", correo);
    }
    if (e.target.name === "numero") {
      setNumero(e.target.value);
      //   console.log("Numero:", numero);
    }
    if (e.target.name === "pago") {
      //   console.log("Problema: ", problema);
    }
  };

  const valida_datos = () => {
    if (
      nombre === "" ||
      correo === "" ||
      numero === "" ||
      doctor === "Especialista necesario" ||
      pago === "Metodo de pago"
    ) {
      return false;
    } else {
      return true;
    }
  };

  const agendar_cita = () => {
    agregarCita([...citas, selected]);
    setAgendarCita(false);
  };

  return (
    <>
      <div className="container">
        <div className="card-title">
          <h1>Agendar una cita</h1>
        </div>
      </div>
      <div className="container-white">
        <div className="row">
          <Datepicker
            selected={selected}
            onChange={(date) => setDate(date)}
            timeIntervals={60}
            showTimeSelect
            minTime={min}
            maxTime={max}
            minDate={today}
            excludeTimes={excludeTimes()}
            dateFormat="dd/MM/yyyy h:mm"
            filterTime={filterPassedTime}
            customInput={<ExampleCustomInput />}
            withPortal
          />
          <div className="dropdown">
            <button className="dropbtn">{doctor}</button>
            <div className="dropdown-content">
              <a onClick={() => setDoctor("Cardiologo")}>Cardiologo</a>
              <a onClick={() => setDoctor("Alergólogo")}>Alergólogo </a>
              <a onClick={() => setDoctor("Gastroenterólogo")}>
                Gastroenterólogo
              </a>
              <a onClick={() => setDoctor("Hematólogo")}>Hematólogo</a>
              <a onClick={() => setDoctor("Hepatólogo")}>Hepatólogo</a>
              <a onClick={() => setDoctor("Nefrólogo")}>Nefrólogo</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">{pago}</button>
            <div className="dropdown-content">
              <a onClick={() => setPago("Efectivo")}>Efectivo</a>
              <a onClick={() => setPago("Tarjeta")}>Tarjeta</a>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <label htmlFor="inp" className="inp">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={onChange}
                ></input>
                <span className="focus-bg"></span>
              </label>
            </div>
            <div className="card">
              <label htmlFor="inp" className="inp">
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="Correo Electronico"
                  value={correo}
                  onChange={onChange}
                ></input>
                <span className="focus-bg"></span>
              </label>
            </div>
          </div>
          <div className="card">
            <label htmlFor="inp" className="inp">
              <input
                type="tel"
                id="numero"
                name="numero"
                placeholder="Telefono"
                value={numero}
                onChange={onChange}
              ></input>
              <span className="focus-bg"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="container-r">
        {valida_datos() === true ? (
          <button className="btn-2" onClick={() => agendar_cita()}>
            Hacer cita
          </button>
        ) : (
          <button className="btn-2" disabled>
            Hacer cita
          </button>
        )}
      </div>
    </>
  );
};

export default FormularioCita;

import React from "react";
import "../App.css";

const Inicio = ({setAgendarCita}) => {


  return (
    <>
      <div className="container">
        <div className="card-title">
          <h1>Laboratorio Clinico DiSo</h1>
        </div>
      </div>
      <div className="container-white">
        <p className="t">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit
          scelerisque in dictum non consectetur. Nisl nunc mi ipsum faucibus
          vitae aliquet nec. Aliquet nec ullamcorper sit amet risus nullam eget
          felis eget. Integer enim neque volutpat ac tincidunt vitae semper quis
          lectus. Integer eget aliquet nibh praesent tristique magna sit amet.
        </p>
      </div>
      <div className="container-r">
      <button
            className="btn-2"
            onClick={() => setAgendarCita(true)}
          >
            Necesitas un estudio?
          </button>
      </div>
    </>
  );
};

export default Inicio;

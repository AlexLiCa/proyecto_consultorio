import React, { useState, useEffect } from "react";
import "./App.css";
import FormularioCita from "./components/FormularioCita";
import Inicio from "./components/Inicio";

function App() {
  const [agendarCita, setAgendarCita] = useState(false);
  const [citas, agregarCita] = useState([]);
  
  return (
    <div className="bg">
      <div className="body">
        <>
          {agendarCita === false ? (
            <Inicio 
              setAgendarCita={setAgendarCita} />
          ) : (
            <FormularioCita
              setAgendarCita={setAgendarCita}
              citas = {citas}
              agregarCita = {agregarCita}
            />
          )}
        </>
      </div>
    </div>
  );
}

export default App;

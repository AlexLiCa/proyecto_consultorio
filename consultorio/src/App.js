import React, {useState, useEffect} from 'react';
import Datepicker from 'react-datepicker'
import './App.css';
import "react-datepicker/dist/react-datepicker.css";

function App() {

  const[selected, setDate] = useState(new Date());
  const[citas, agregarCita] = useState([]);

  const today = new Date();
  const min = new Date();
  const max = new Date();
  min.setHours(7);
  max.setHours(20);


  const ExampleCustomInput = ({ value, onClick }, ref) => (
    <button className="btn-1"  onClick={onClick}>
        {value}
    </button>
  );

  const excludeTimes = () => {
  let citasDia = [];
    for (let i = 0; i < citas.length; i++) {  
      // console.log("Cantidad de citas del dia: ",citasDia[i].getTime());
      // console.log("Dia seleccionado: ",selected.getDate());
      if (citas[i].getDate() === selected.getDate()){
        citasDia.push(citas[i]);
        // console.log("Dia en citas:",citas[i].getDate());
        // console.log("Dia seleccionado:",selected.getDate());
        // console.log("Citas Hoy:", citasDia);
        // console.log("Todas las citas", citas)
      }
      else if (citasDia.length === 0){
        citasDia = [];
        // console.log("citas:", {citas} )
        // console.log("Citas hoy",citasDia);
        // console.log("Todas las citas", citas)
      }
    }    return citasDia;
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  useEffect(() => { 
    excludeTimes()
  })

  return (
    <div className="bg">
      <div className="body">
            <div className="container">
              <div className="card">
                  <h1>Ajendar una cita</h1>
              </div>
            </div>
              <div className="container-white">
                  <div className="row">
                        <Datepicker 
                          selected={selected} 
                          onChange={ date => setDate(date) }
                          timeIntervals = {60}
                          showTimeSelect
                          minTime={min}
                          maxTime={max}
                          startDate={today}
                          minDate={today}
                          excludeTimes= {excludeTimes()}
                          dateFormat="MM/dd/yyyy h:mm"
                          filterTime={filterPassedTime}
                          customInput={<ExampleCustomInput />}
                        />
                      <div className="card">
                        <label for="inp" className="inp">
                          <input type="text" id="inp" placeholder="Nombre"></input>
                          <span className="focus-bg"></span>
                        </label>
                        </div>
                        <div className="card">
                        <label for="inp" className="inp">
                          <input type="email" id="inp" placeholder="Correo Electronico"></input>
                          <span className="focus-bg"></span>
                        </label>
                        </div>
                    </div>
                  <div className="row">  
                        <div className="card">
                        <label for="inp" className="inp">
                          <input type="tel" id="inp" placeholder="Telefono"></input>
                          <span className="focus-bg"></span>
                        </label>
                        </div>
                        <div className="card">
                        <label for="inp" className="inp">
                          <input type="text" id="inp" placeholder="Descripcion del problema"></input>
                          <span className="focus-bg"></span>
                        </label>
                        </div>                             
                  </div>  
                  <button className="btn-1" onClick={()=> agregarCita([...citas, selected])}>
                          Hacer cita 
                      </button>   
              </div>
      </div>
    </div>

  );
}

export default App;

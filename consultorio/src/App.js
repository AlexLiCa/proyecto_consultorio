import React, {useState, useEffect} from 'react';
import Datepicker from 'react-datepicker'
import './App.css';
import "react-datepicker/dist/react-datepicker.css";

function App() {

  const[selected, setDate] = useState(new Date());
  const min = new Date();
  const max = new Date();

  min.setHours(7);
  max.setHours(20);



  // Cambiar esta funcion para checar los tiempos que ya estan ocupados para filtrarlos 
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);


    return currentDate.getTime() < selectedDate.getTime();
  };

    useEffect(() => {     
    console.log(selected)
    }, [selected])

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
                      <div className="card">
                        <Datepicker 
                          selected={selected} 
                          onChange={ date => setDate(date) }
                          timeIntervals = {60}
                          showTimeSelect
                          minTime={min}
                          maxTime={max}
                          dateFormat="MM/dd/yyyy h:mm"
                          //filterTime={filterPassedTime}
                        />
                      </div>                      
                    </div> 
                  <div className="row">
                      <div className="card">
                        <h1>Aqui iria el formulario</h1>
                      </div>                               
                  </div>
              </div>
              </div>
        </div>

  );
}

export default App;

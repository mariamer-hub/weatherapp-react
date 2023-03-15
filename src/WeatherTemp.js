import React, {useState} from "react";

import "./WeatherTemp.css"

export default function WeatherTemp(props){
    const[unit, setUnit]=useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit ("fahrenheit");

    }

      function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
      }

    if (unit==="celsius") {

    return (
      <div className="WeatherTemp">
        <p className="current-temperature">
          {" "}
          <span className="temperature">{Math.round(props.celsius)}</span>{" "}
          <span className="units">
            ºC |{" "}
            <a href="/" onClick={showFahrenheit}>
              ºF
            </a>
          </span>
          <strong></strong>
        </p>
      </div>
    );
    }

    else {
        let fahrenheit = (props.celsius*9/5)+32;
     return (
       <div className="WeatherTemp">
         <p className="current-temperature">
           {" "}
           <span className="temperature">{Math.round(fahrenheit)}</span>{" "}
           <span className="units">
             <a href="/" onClick={showCelsius}>
               {" "}
               ºC{" "}
             </a>
             | ºF
           </span>
           <strong></strong>
         </p>
       </div>
     );
    };
}


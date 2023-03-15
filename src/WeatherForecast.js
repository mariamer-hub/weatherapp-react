import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecastResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
    // console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="card bg-transparent card-2 shadow border-0">
          <div className="row">
            {forecast.map(function (dailyForcast, index) {
              if (index < 6) {
                return (
                  <div className="col-2" key={index}>
                    <WeatherForecastDay data={dailyForcast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "caa883a4a60d93878755b08a933f74ea";
    let units = "metric";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}

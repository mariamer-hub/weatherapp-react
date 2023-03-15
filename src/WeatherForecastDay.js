import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}º`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);

    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className=" WeatherForecastDay">
      <div className="day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="temperature">
        <span className="max-temp">{maxTemp()}</span>{" "}
        <span className="min-temp">{minTemp()}</span>
      </div>
    </div>
  );
}

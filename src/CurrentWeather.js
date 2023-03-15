import React from "react";
import "./CurrentWeather.css";
import WeatherIcon from "./WeatherIcon"
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";

export default function CurrentWeather(props) {

      return (
        <div className="CurrentWeather">
          <div className="card bg-transparent card-1 shadow border-0">
            <div className="row">
              <div className="col-5 p-2">
                <h1 className="city">{props.data.city}</h1>

                <FormattedDate date={props.data.date} />
              </div>
              <div className="col-3">
                <h1 className="empty"> </h1>
              </div>
              <div className="col-4 p-2">
                <h2 className="current">Current</h2>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-4 p-2"></div>
              <div className="col-4 p-2 current-weather d-flex justify-content-center">
                <WeatherIcon code={props.data.icon} size={130} />
              </div>
              <div className="col-4 p-2 d-flex justify-content-end">
                <WeatherTemp celsius={props.data.temperature} />
              </div>
            </div>
            <div className="row align-items-center justify-content-start">
              <div className="col-4 p-2">
                <ul>
                  <li>
                    <span>
                      <i className="fa-solid fa-wind conditions-fa"></i>
                    </span>
                    <span className="conditions">
                      {Math.round(props.data.wind)}km/h{" "}
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-droplet conditions-fa"></i>
                    </span>
                    <span className="conditions">{props.data.humidity}% </span>
                  </li>
                  <li>
                    <span className="weather-feels like">
                      <i className="fa-solid fa-temperature-low conditions-fa"></i>
                    </span>
                    <span className="conditions">
                      {Math.round(props.data.feel)}º
                    </span>{" "}
                    <span className="d-none d-lg-block">RealFeel</span>
                  </li>
                </ul>
              </div>
              <div className="col-8 current-weather d-flex align-items-center justify-content-end">
                <h1 className="current-weather-desc">
                  {props.data.description}
                </h1>
              </div>
            </div>
          </div>
        </div>
      );

}

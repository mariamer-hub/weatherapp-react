import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function Search(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      code: response.data.weather[0].id,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      feel: response.data.main.feels_like,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "fc8dd57d1eb9660674b78fd766d5034d";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let units = "metric";

    let apiKey = "fc8dd57d1eb9660674b78fd766d5034d";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
    axios
      .get(
        `${apiUrl}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
      )
      .then(showWeather);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function weatherBackground() {
    let code = weather.code;

    if (code >= 200 && code <= 531) {
      return "rain.jpg";
    } else if (code >= 600 && code <= 622) {
      return "snow.jpg";
    } else if (code >= 701 && code <= 781) {
      return "fog.jpg";
    } else if (code === 800) {
      return "sunny-sky.jpg";
    } else {
      return "cloudy.jpg";
    }
  }

  if (weather.ready) {
    return (
      <div className="Search">
        <div
          className="container"
          style={{
            backgroundImage: `url(./imgs/${weatherBackground()})`,

            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9 search-form col-auto">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search City"
                  autoFocus="on"
                  onChange={handleChangeCity}
                />
              </div>

              <div className=" col-3 col-auto me-auto p-0">
                <input
                  type="submit"
                  value="Search"
                  className="search-button btn w-100"
                />
              </div>
            </div>
          </form>

          <div className="button">
            <button className="Location-button" onClick={handleLocationClick}>
              Current Location
            </button>
          </div>
          <CurrentWeather data={weather} />
          <WeatherForecast coordinates={weather.coordinates} />

          <Footer />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

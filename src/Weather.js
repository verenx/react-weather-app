import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate"


export default function Weather(props) {
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      date: new Date(response.data.dt * 1000)
    })
    setLoaded(true);
  }

const [loaded, setLoaded] = useState(false);
const [weatherData, setWeatherData] = useState({});


if (loaded) {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search"
                placeholder="Enter a city.."
                className="form-control search-field"
                autoFocus="on" />
          </div>
          <div className="col-3">
            <input type="submit"
                value="Search"
                className="btn w-100 search-button" />
          </div>
        </div>
      </form>
      <div className="header mt-5">
        <h1>{weatherData.city}</h1>
        <ul className="mt-3">
          <li><FormattedDate date={weatherData.date} /></li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
      </div>
      <div className="row mt-5">
        <div className="col-6">
          <span><img src={weatherData.iconUrl} alt={weatherData.description} /></span>
          <span className="current-temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C | °F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
    );
} else {
  const apiKey = "0a521eaf234a3a56f45252fac3c737ad";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);  

  return ("Loading..");
}
}
import React, { useState } from "react";
import axios from "axios";

import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function updateWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="form">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city .."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind speed: {weather.wind}km/h</li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

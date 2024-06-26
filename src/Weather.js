import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
  function handleResponse(response) {
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

  function search() {
    const apiKey = "0a521eaf234a3a56f45252fac3c737ad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);  
  
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    //store the value of user input inside a state
    setCity(event.target.value);
  }

const [loaded, setLoaded] = useState(false);
const [weatherData, setWeatherData] = useState({});
const [city, setCity] = useState(props.defaultCity);

 
if (loaded) {
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}> 
        <div className="row">
          <div className="col-9">
            <input type="search"
                placeholder="Enter a city.."
                className="form-control search-field"
                autoFocus="on" 
                onChange={handleCityChange} />
          </div>
          <div className="col-3">
            <input type="submit"
                value="Search"
                className="btn w-100 search-button" />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
    </div>
      
    );
} else {
 
  return ("Loading..");
}
}

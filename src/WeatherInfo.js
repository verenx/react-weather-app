import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  console.log(props);
    return ( 
<div className="WeatherInfo">
    <div className="header mt-5">
        <h1>{props.data.city}</h1>
        <ul className="mt-3">
          <li><FormattedDate date={props.data.date} alt={props.data.description} /></li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row mt-5">
        <div className="col-6">
          <div className="d-flex">   
            <div>
              <WeatherIcon code={props.data.icon} />
            </div>
            <div>
              <WeatherTemperature celsius={Math.round(props.data.temperature)} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="weather-details">
            <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
</div>
);
}
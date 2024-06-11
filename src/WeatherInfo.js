import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./WeatherInfo.css";

export default function WeatherInfo() {
    return (
    <div className="WeatherInfo">
      <div className="header">
        <h1>Vienna, Austria</h1>
        <p>Wednesday 07:00 <br /> Mostly cloudy</p>
      </div>
      <div className="row">
        <div className="col-6">
          <img src="" alt="" />
          <p>6 <a href="">°C</a> <a href="">°F</a></p>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>

        
    </div>
    );
}
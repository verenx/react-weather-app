import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Weather.css";


export default function Weather() {
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
        <h1>Vienna, Austria</h1>
        <ul className="mt-3">
          <li>Wednesday 07:00 </li>
          <li>Mostly cloudy</li>
        </ul>
      </div>
      <div className="row mt-5">
        <div className="col-6">
          <span><img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather icon" /></span>
          <span className="current-temperature">6</span><span className="unit">°C | °F</span>
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
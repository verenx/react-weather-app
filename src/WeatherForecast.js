import React from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

let apiKey = "0a521eaf234a3a56f45252fac3c737ad";
let latitude = props.coordinates.lat;
let longitude = props.coordinates.lon;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

    return (
<div className="WeatherForecast">
    <div className="row">
        <div className="col">
            <div className="forecast-day">Thu</div>
            <div className="forecast-icon"><WeatherIcon code="01d" size={25}/></div>
            <span className="forecast-temp-max">25°</span>
            <span className="forecast-temp-min">16°</span>
        </div>
    </div>
</div>
    );
}
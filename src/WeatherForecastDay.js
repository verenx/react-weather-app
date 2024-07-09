import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    let maxTemp = Math.round(props.data.temp.max);
    let minTemp = Math.round(props.data.temp.min);

    function day() {
        let date = new Date(props.data.dt * 1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = days[date.getDay()];
        
        return day;
    }

    return (
        <div className="WeatherForecastDay">
            <div className="forecast-day">{day()}</div>
            <div className="forecast-icon"><WeatherIcon code={props.data.weather[0].icon} size={25}/></div>
            <span className="forecast-temp-max">{maxTemp}°</span>
            <span className="forecast-temp-min">{minTemp}°</span>
        </div>
    )
}
import React from "react";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  return (
    <div className="WeatherSearch">
      
      <div className="container">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city .." />
          </div>
          <div className="col-3">
            <input type="submit" />
          </div>
        </div>
      </form>
      </div>
    </div>
    );
}
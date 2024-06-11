import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
          </div>
        </div>
      </form>
      </div>
    </div>
    );
}
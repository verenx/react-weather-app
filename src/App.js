import React from "react";
import WeatherSearch from "./WeatherSearch";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

export default function App() {
   return ( 
   <div className="App">
   <div className="container">
      <WeatherSearch />
      <WeatherInfo />
    <footer>This project was coded by <a href="https://www.linkedin.com/in/verena-al-khazraji-a73bb370/" target="_blank" rel="noreferrer">Verena Al-Khazraji</a> and is hosted on <a href="https://github.com/verenx/react-weather-app" target="_blank" rel="noreferrer">Github</a></footer>
   </div>
   </div>
   );
}
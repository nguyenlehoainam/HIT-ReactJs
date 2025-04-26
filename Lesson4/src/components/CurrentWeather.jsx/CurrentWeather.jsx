import React from "react";

import "./CurrentWeather.scss";
import WeatherDetails from "../WeatherDeatails/WeatherDeatails";

const CurrentWeather = ({ currentWeather, tempUnit, speedUnit }) => {
  return (
    <div className="current-weather">
      <div className="current-weather-main">
        <div className="city">
          <h2>
            {currentWeather.name}, {currentWeather.sys.country}
          </h2>
          <p className="date">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="temp-container">
          <div className="weather-icon"></div>
          <div className="current-temp">
            <h1>
              {currentWeather.main.temp.toFixed()}
              {tempUnit}
            </h1>
            <p>{currentWeather.weather[0].description}</p>
          </div>
        </div>
      </div>

      <WeatherDetails currentWeather={currentWeather} speedUnit={speedUnit} />
    </div>
  );
};

export default CurrentWeather;

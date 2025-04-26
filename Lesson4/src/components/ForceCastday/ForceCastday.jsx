import React from "react";
import { formatDate, getWeatherIcon } from "../WeatherUtils/WeatherUtils";
import "../ForceCastday/ForceCastday.scss";

const ForecastDay = ({ day, tempUnit }) => {
  return (
    <div className="forecast-day">
      <h3>{formatDate(day.dt)}</h3>
      <div className="forecast-icon">{getWeatherIcon(day.weather[0].main)}</div>
      <p className="forecast-temp">
        {day.main.temp.toFixed()}
        {tempUnit}
      </p>
      <p className="forecast-desc">{day.weather[0].description}</p>
    </div>
  );
};

export default ForecastDay;

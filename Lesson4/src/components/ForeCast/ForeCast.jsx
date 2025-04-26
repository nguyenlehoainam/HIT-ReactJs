import React from "react";
import "./Forecast.scss";
import ForecastDay from "../ForceCastday/ForceCastday";

const Forecast = ({ forecast, tempUnit }) => {
  return (
    <div className="forecast-section">
      <div className="daily-forecast">
        {forecast.map((day, index) => (
          <ForecastDay key={index} day={day} tempUnit={tempUnit} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;

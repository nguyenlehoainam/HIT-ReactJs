import React from "react";
import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";
import { formatTime } from "../WeatherUtils/WeatherUtils";
import "../WeatherDeatails/WeatherDeatails.scss";

const WeatherDetails = ({ currentWeather, speedUnit }) => {
  return (
    <div className="weather-details">
      <div className="detail-item">
        <WiStrongWind size={30} />
        <div>
          <p>Wind</p>
          <p className="detail-value">
            {currentWeather.wind.speed.toFixed(1)} {speedUnit}
          </p>
        </div>
      </div>
      <div className="detail-item">
        <WiHumidity size={30} />
        <div>
          <p>Humidity</p>
          <p className="detail-value">{currentWeather.main.humidity}%</p>
        </div>
      </div>
      <div className="detail-item">
        <WiBarometer size={30} />
        <div>
          <p>Pressure</p>
          <p className="detail-value">{currentWeather.main.pressure} hPa</p>
        </div>
      </div>
      <div className="detail-item">
        <WiSunrise size={30} />
        <div>
          <p>Sunrise</p>
          <p className="detail-value">
            {formatTime(currentWeather.sys.sunrise)}
          </p>
        </div>
      </div>
      <div className="detail-item">
        <WiSunset size={30} />
        <div>
          <p>Sunset</p>
          <p className="detail-value">
            {formatTime(currentWeather.sys.sunset)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

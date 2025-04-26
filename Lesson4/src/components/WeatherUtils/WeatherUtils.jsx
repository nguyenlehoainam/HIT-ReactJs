import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";
export const getWeatherIcon = (condition) => {
  if (!condition) return <WiDaySunny size={30} />;

  switch (condition.toLowerCase()) {
    case "clear":
      return <WiDaySunny size={30} />;
    case "clouds":
      return <WiCloudy size={30} />;
    case "rain":
    case "drizzle":
      return <WiRain size={30} />;
    case "snow":
      return <WiSnow size={30} />;
    case "thunderstorm":
      return <WiThunderstorm size={30} />;
    case "mist":
    case "fog":
    case "haze":
      return <WiFog size={30} />;
    default:
      return <WiDaySunny size={30} />;
  }
};

export const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

export const getUnits = (units) => {
  return {
    tempUnit: units === "metric" ? "°C" : "°F",
    speedUnit: units === "metric" ? "km/h" : "mph",
  };
};

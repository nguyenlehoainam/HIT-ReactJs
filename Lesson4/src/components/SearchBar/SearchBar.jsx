import React from "react";
import "../SearchBar/SearchBar.scss";

const SearchBar = ({
  location,
  setLocation,
  handleSearch,
  searchLocation,
  toggleUnits,
  units,
}) => {
  return (
    <div className="header">
      <h1>Weather Forecast App</h1>
      <div className="search-box">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter City Name"
          type="text"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="units-toggle-container">
        <button className="units-toggle" onClick={toggleUnits}>
          {units === "metric" ? "°C" : "°F"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

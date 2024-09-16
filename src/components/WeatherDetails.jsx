import React from 'react';
import { getWeatherIcon } from './WeatherIcon'; // Ensure the path is correct

const WeatherDetails = ({ weather }) => {
  return (
    <div className="weather-details">
      <h2>{weather.city}</h2>
      <p>{weather.temp}°C</p>
      <div className="weather-icon">
        {getWeatherIcon(weather.condition)} {/* Render the icon */}
      </div>
      <p>{weather.condition}</p>
    </div>
  );
};

export default WeatherDetails;

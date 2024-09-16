import React from 'react';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';

// Function to get the weather icon based on the condition
export const getWeatherIcon = (condition) => {
  switch (condition) {
    case 'clear':
      return <WiDaySunny size={50} />;
    case 'clouds':
      return <WiCloud size={50} />;
    case 'rain':
      return <WiRain size={50} />;
    case 'snow':
      return <WiSnow size={50} />;
    case 'thunderstorm':
      return <WiThunderstorm size={50} />;
    default:
      return <WiCloud size={50} />; // Default cloudy icon
  }
};

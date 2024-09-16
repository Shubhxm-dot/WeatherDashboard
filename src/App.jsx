// src/App.jsx
import React, { useState } from 'react';
import WeatherDetails from './components/WeatherDetails'; // Ensure the path is correct
import SearchBar from './components/SearchBar'; // Ensure the path is correct
import { fetchWeatherData } from './weatherService'; // Ensure the path is correct

const App = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeatherData(city);
    if (data) {
      setWeather(data);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherDetails weather={weather} />}
    </div>
  );
};

export default App;

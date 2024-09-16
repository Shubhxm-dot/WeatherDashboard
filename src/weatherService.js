const API_KEY = '44b845319c0441be1c788427ec07bb71'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    return {
      city: data.name,
      temp: data.main.temp,
      condition: data.weather[0].main.toLowerCase(),
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

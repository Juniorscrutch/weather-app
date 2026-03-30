const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log("API Key:", API_KEY);

//to fetch current weather data for a city
export const getWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );
  return response.json();
};

//to fetch hourly and daily forecast data for a city
export const getForecast = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`,
  );
  return response.json();
};

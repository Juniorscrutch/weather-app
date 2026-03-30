import { useState } from "react";
import './style.css';
import { getWeather,getForecast } from "./services/weatherApi";


import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Header from "./components/Header";
import  DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import WeatherDetails from "./components/WeatherDetails";



function App() {
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("");
  const [Weather, setWeather] = useState(null);

  const handleSearch = async () => {
    if (city.trim() === "") return;

    const weatherData = await getWeather(city);
    const forecastData = await getForecast(city);

    console.log("Weather Data:", weatherData);
    console.log("Forecast Data:", forecastData);

    if (weatherData.cod === 404) {
      alert("City not found. Please try again.");
      return;
    }

    setWeather(weatherData);
    setForecast(forecastData);
  };
  return (
    <div className="app">
      <div>
        <Header />
        <SearchBar
          city={city}
          setCity={setCity}
          handleSearch={handleSearch}
        />
      </div>
      
      <div className="dashboard">
        <div className="left-panel">
          <WeatherCard weather={Weather} />
          <WeatherDetails weather={Weather} />
          <DailyForecast forecast={forecast} />
        </div>

        <div className="right-panel">
          <HourlyForecast forecast={forecast} />
        </div>

      </div>
    </div>
  );
}
export default App;

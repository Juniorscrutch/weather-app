function WeatherCard({ weather }) {
    if (!weather) return null;

    return (
        <div className="weather-card">
            <div>
                <h2>{weather.name}</h2>
                <p>{weather.sys?.country}</p>
            </div>


            <div className="main-info">

                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt="weather icon"
                />
                <h1>{Math.round(weather.main.temp)}°</h1>
            </div>  

        </div>
    );
}

export default WeatherCard;
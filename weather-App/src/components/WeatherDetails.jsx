function WeatherDetails({ weather }) {
    if (!weather) return null;

    return (
        <div className="details-grid">
            <div className="detail-card">
                <p>Feels like</p>
                <span>{Math.round(weather.main.feels_like)}°C</span>
            </div>

            <div className="detail-card">
                <p>Humidity</p>
                <span>{weather.main.humidity}%</span>
            </div>

            <div className="detail-card">
                <p>Wind</p>
                <span>{Math.round(weather.wind.speed*3.6)}km/h</span>
            </div>

            <div className="detail-card">
                <p>Pressure</p>
                <span>{weather.main.pressure} hPa</span>
            </div>
        </div>
    );
}   
export default WeatherDetails;
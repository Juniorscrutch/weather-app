function HourlyForecast({ forecast }) {
    if (!forecast || !forecast.list) return null;

    const hourlyData = forecast.list.slice(0, 8); // Get next 8 hours (3-hour intervals)

    return (
        <div className="hourly-section">
            <div className="hourly-header">
                <h3>Hourly Forecast</h3>
                <button>Today</button>
            </div>

            <div className="hourly-list">
                {hourlyData.map((item, index) => (
                    <div key={index} className="hourly-card">
                        <span>
                            {new Date(item.dt_txt).toLocaleTimeString([], { hour: 'numeric', hour12: true,})}
                        </span>
                        <span>{Math.round(item.main.temp)}°C</span>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                            alt="icon"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}       
   

export default HourlyForecast;
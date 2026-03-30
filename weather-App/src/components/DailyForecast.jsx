function DailyForecast(forecast) {
    if (!forecast || !forecast.forecast || !forecast.forecast.list) return null;

    const dailyData = forecast.forecast.list.filter(item => item.dt_txt.includes("12:00:00"));  

    return (
        <div className="forecast-section">
            <h3>Daily Forecast</h3>
            <div className="forecast-grid">
                {dailyData.slice(0,6).map((item, index) => (
                    <div key={index} className="forecast-card">
                        <p>
                            {new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: 'short',})}
                        </p>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                            alt="icon"
                        />
                        <p>{Math.round(item.main.temp)}°</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
   
export default DailyForecast;
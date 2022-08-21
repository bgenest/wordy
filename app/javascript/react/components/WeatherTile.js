import React, { useState, useEffect } from "react";

import WeatherData from "../WeatherData";

export const WeatherTile = (props) => {
  const [forecast, setForecast] = useState({
    main: {},
    weather: [{}],
    clouds: {},
  });

  useEffect(() => {
    fetchWeather();
  }, []);

  let OPEN_WEATHER_API_KEY = "c69164a3ec0a0d18a3351042b67b1e31";

  const fetchWeather = async () => {
    try {
      const city = "boston";
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const weatherForecast = await response.json();
      setForecast(weatherForecast);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  return (
    <div class="grid-container">
      <div class="grid-x grid-padding-x grid-padding-y word-tile">
        <div class="cell card">
          <div class="card-section">
            <WeatherData forecast={forecast} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherTile;

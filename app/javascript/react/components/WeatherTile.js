import React, { useState, useEffect } from "react";

import WeatherData from "./WeatherData";
import configData from "./config.json";

export const WeatherTile = (props) => {
  const [forecast, setForecast] = useState({
    main: {},
    weather: [{}],
    clouds: {},
  });

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    let OPEN_WEATHER_API_KEY = configData["OPEN_WEATHER_API_KEY"];
    try {
      const city = "boston";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
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
    <div className="grid-container tile-container">
      <div className="grid-x grid-padding-x grid-padding-y word-tile">
        <div className="cell card">
          <div className="card-section">
            <WeatherData forecast={forecast} />
          </div>
          <div>
              <p id="credits"> Powered by https://openweathermap.org/api </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherTile;

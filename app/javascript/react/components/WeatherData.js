import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'


export const WeatherData = (props) => {
  const data = props.forecast

  return ( 
    <div>
    <h3 className="Weather">Weather in {data.name} <FontAwesomeIcon icon={faCity} /></h3>
    <hr/>
    <ul className="Weather">
        <li className="weather-list-item">   Temp: <FontAwesomeIcon icon={faTemperatureHalf} /> {data.main.temp} F</li>
        <li className="weather-list-item"> Conditions: <FontAwesomeIcon icon={faCloudSun} /> {data.weather[0].description}</li>
        <li className="weather-list-item"> Cloud Coverage: <FontAwesomeIcon icon={faCloud} /> {data.clouds.all}</li>
    </ul>
</div>)
}

export default WeatherData
import React from "react";
import { Button } from 'semantic-ui-react';
import moment from "moment";

import '../WeatherUI.scss';

import WeatherIcon from "../images/bolt-light.svg";

import SunriseIcon from "../images/sunrise-thin.svg";
import SunsetIcon from "../images/sunset-thin.svg";

const refresh = () => {
  window.location.reload();
}

const WeatherUI = ({weatherData}) => {
  return (
    <div className="weather-ui">
      <div className="main">
        <div className="header">
          <div className="refresh">
            <Button className="button" circular icon='refresh' onClick={refresh} />
          </div>
          <div className="location-date">
            <p className="date">
              {weatherData.name}
            </p>
            <p className="location">
              {moment().format('dddd')}, <span>{moment().format('LL')}</span>
            </p>
          </div>
        </div>
        <div className="primary-data">
          <div className="weather-icon">
            <img src={WeatherIcon} alt="weather icon"></img>
          </div>
          <div className="weather-temp">
            <p className="temp">
              {weatherData.main.temp.toFixed(0)}&deg;C
            </p>
            <p className="desc">
              {weatherData.weather[0].main}
            </p>
          </div>
        </div>
      </div>

      <div className="misc">
        <div className="left">
          <p>
            Wind
          </p>
          <p>
          {weatherData.wind.speed.toFixed(0)} km/h
          </p>
        </div>
        <div className="center">
          <p>
            Temp
          </p>
          <p>
            {weatherData.main.temp} &deg;C
          </p>
        </div>
        <div className="right">
          <p>
            Humidity
          </p>
          <p>
            {weatherData.main.humidity} %
          </p>
        </div>
      </div>

      <div className="timeline">

      </div>

      <div className="sunrise-sunset">
        <div className="sunrise">
          <img src={SunriseIcon} alt="weather icon"></img>
          <p>
            Sunrise
          </p>
          <p>
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('da-DK')}
          </p>
        </div>
        <div className="sunset">
          <img src={SunsetIcon} alt="weather icon"></img>
          <p>
            Sunset
          </p>
          <p>
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('da-DK')}
          </p>
        </div>
      </div>

      <div className="menu">

      </div>
    </div>
  )
}

export default WeatherUI;
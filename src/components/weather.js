import React from "react";
import { Card, Container } from 'semantic-ui-react';
import moment from "moment/moment";

const WeatherCard = ({weatherData}) => {
  return (
    <Container>
      <Card centered fluid className="weather-card">
        <Card.Content>
          <Card.Header className="header">City name: {weatherData.name}</Card.Header>
          <p>Temperature: {weatherData.main.temp} &deg;C</p>
          <p>Sunrise: {weatherData.sys.sunrise * 1000}</p>
          <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('da-DK')}</p>
          <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('da-DK')}</p>
          <p>Description: {weatherData.weather[0].main}</p>
          <p>Humidity: {weatherData.main.humidity} %</p>

          <p>Day: {moment().format('dddd')}</p>
          <p>Date: {moment().format('LL')}</p>
        </Card.Content>
      </Card>
    </Container>
  )
}

export default WeatherCard;
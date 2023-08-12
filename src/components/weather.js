import React from "react";
import { Card, Container } from 'semantic-ui-react';

const WeatherCard = ({weatherData}) => {
  return (
    <Container>
      <Card centered fluid className="weather-card">
        <Card.Content>
          <Card.Header className="header">{weatherData.name}</Card.Header>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Sunrise: {weatherData.sys.sunrise}</p>
          <p>Sunset: {weatherData.sys.sunset}</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </Card.Content>
      </Card>
    </Container>
  )
}

export default WeatherCard;
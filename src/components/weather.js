import React from "react";
import { Card, Container } from 'semantic-ui-react';

const WeatherCard = ({weatherData}) => {
  return (
    <Container>
      <Card centered fluid className="weather-card">
        <Card.Content>
          <Card.Header className="header">{weatherData.name}</Card.Header>
        </Card.Content>
      </Card>
    </Container>
  )
}

export default WeatherCard;
import React from "react";
import { useSearchWeatherContext } from "../../Providers/SearchWeather";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import {
  MainContainer,
  CurrentWeatherDisplay,
  Temperature,
  Location,
} from "./Style";

function Dashboard() {
  const { weather } = useSearchWeatherContext();

  return (
    <MainContainer>
      <CurrentWeatherDisplay>
        <Location>{weather.name},</Location>
        <Temperature>
          {weather.temp}
          <TbTemperatureFahrenheit />
        </Temperature>
      </CurrentWeatherDisplay>
    </MainContainer>
  );
}

export default Dashboard;

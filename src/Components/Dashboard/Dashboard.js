import React from "react";
import { useSearchWeatherContext } from "../../Providers/SearchWeather";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import Styled from "../../Global/Style";
import Forecast from "./Forecast";
import {
  MainContainer,
  CurrentWeatherDisplay,
  Temperature,
  Location,
  LatLonDisplay,
  Description,
} from "./Style";

function Dashboard() {
  const { weather, weatherDescription } = useSearchWeatherContext();

  return (
    <MainContainer>
      <CurrentWeatherDisplay>
        <Styled.Column>
          <Location>{weather.name},</Location>
          <LatLonDisplay>
            <div>
              Lat:<strong style={{ marginLeft: "5px" }}>{weather.lat}</strong>
            </div>

            <div>
              Lon:<strong style={{ marginLeft: "5px" }}>{weather.lon}</strong>
            </div>
          </LatLonDisplay>
          <Description>
            Description:<strong>{weatherDescription}</strong>
          </Description>
        </Styled.Column>
        <Temperature>
          {weather.temp}
          <TbTemperatureFahrenheit />
        </Temperature>
      </CurrentWeatherDisplay>

      <Forecast />
    </MainContainer>
  );
}

export default Dashboard;

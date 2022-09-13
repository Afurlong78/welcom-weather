import React from "react";
import Form from "./Components/Form/Form.js";
import { useSearchWeatherContext } from "./Providers/SearchWeather";
import {
  MainContainer,
  DarkBg,
  Clear,
  Clouds,
  Rain,
  Snow,
  Thunderstorm,
  Mist,
  Smoke,
  Haze,
  Dust,
  Fog,
  Sand,
  Ash,
  Squall,
  Tornado,
} from "./Style.js";

function App() {
  const { weatherDescription } = useSearchWeatherContext();

  return (
    <MainContainer>
      <DarkBg />
      <Clear weather={weatherDescription} />
      <Clouds weather={weatherDescription} />
      <Rain weather={weatherDescription} />
      <Snow weather={weatherDescription} />
      <Thunderstorm weather={weatherDescription} />
      <Mist weather={weatherDescription} />
      <Smoke weather={weatherDescription} />
      <Haze weather={weatherDescription} />
      <Dust weather={weatherDescription} />
      <Fog weather={weatherDescription} />
      <Sand weather={weatherDescription} />
      <Ash weather={weatherDescription} />
      <Squall weather={weatherDescription} />
      <Tornado weather={weatherDescription} />
      <Form />
    </MainContainer>
  );
}

export default App;

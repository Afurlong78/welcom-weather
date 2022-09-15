import React, { useState } from "react";
import { useSearchWeatherContext } from "../../Providers/SearchWeather";
import { useForecastContext } from "../../Providers/Forecast";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { BsArrowReturnLeft } from "react-icons/bs";
import {
  ForecastContainer,
  DayForecast,
  ForecastHeader,
  ForecastWrapper,
  DayForecastLayerTop,
  DayForecastLayerBot,
  DayForecastDate,
  ForecastItem,
} from "./Style";

function Forecast() {
  const { forecastDescriptions, weatherTemps, weatherDates } =
    useForecastContext();

  return (
    <ForecastWrapper>
      <ForecastHeader>
        Your 5 day forecast{" "}
        <BsArrowReturnLeft style={{ transform: "rotate(-90deg)" }} />
      </ForecastHeader>
      <ForecastContainer>
        <DayForecast>
          <DayForecastDate>{weatherDates.dayOne}</DayForecastDate>
          <DayForecastLayerTop>
            <ForecastItem>
              Title: <strong>Morning</strong>
            </ForecastItem>
            <ForecastItem>
              Desc: <strong>{forecastDescriptions.dayOneStart}</strong>
            </ForecastItem>
            <ForecastItem>
              Temp: <strong>{weatherTemps.dayOneStart}</strong>
              <TbTemperatureFahrenheit />
            </ForecastItem>
          </DayForecastLayerTop>

          <DayForecastLayerBot>
            <ForecastItem>
              Title: <strong>Afternoon</strong>
            </ForecastItem>
            <ForecastItem>
              Desc: <strong>{forecastDescriptions.dayOneEnd}</strong>
            </ForecastItem>
            <ForecastItem>
              Temp: <strong>{weatherTemps.dayOneEnd}</strong>
              <TbTemperatureFahrenheit />
            </ForecastItem>
          </DayForecastLayerBot>
        </DayForecast>
        <DayForecast>
          <DayForecastDate>{weatherDates.dayTwo}</DayForecastDate>
          <DayForecastLayerTop>
            <ForecastItem>
              Title: <strong>Morning</strong>
            </ForecastItem>
            <ForecastItem>
              Desc: <strong>{forecastDescriptions.dayTwoStart}</strong>
            </ForecastItem>
            <ForecastItem>
              Temp: <strong>{weatherTemps.dayTwoStart}</strong>
              <TbTemperatureFahrenheit />
            </ForecastItem>
          </DayForecastLayerTop>

          <DayForecastLayerBot>
            <ForecastItem>
              Title: <strong>Afternoon</strong>
            </ForecastItem>
            <ForecastItem>
              Desc: <strong>{forecastDescriptions.dayTwoEnd}</strong>
            </ForecastItem>
            <ForecastItem>
              Temp: <strong>{weatherTemps.dayTwoEnd}</strong>
              <TbTemperatureFahrenheit />
            </ForecastItem>
          </DayForecastLayerBot>
        </DayForecast>
        <DayForecast>
          <DayForecastDate>{weatherDates.dayThree}</DayForecastDate>
          <DayForecastLayerTop>
            <ForecastItem>
              Title: <strong>Morning</strong>
            </ForecastItem>
            <ForecastItem>
              Desc: <strong>{forecastDescriptions.dayThreeStart}</strong>
            </ForecastItem>
            <ForecastItem>
              Temp: <strong>{weatherTemps.dayThreeStart}</strong>
              <TbTemperatureFahrenheit />
            </ForecastItem>
          </DayForecastLayerTop>

          <DayForecastLayerBot>
            <ForecastItem>
              Title: <strong>Afternoon</strong>
            </ForecastItem>
            <ForecastItem>
              Desc: <strong>{forecastDescriptions.dayThreeEnd}</strong>
            </ForecastItem>
            <ForecastItem>
              Temp: <strong>{weatherTemps.dayThreeEnd}</strong>
              <TbTemperatureFahrenheit />
            </ForecastItem>
          </DayForecastLayerBot>
        </DayForecast>
        <DayForecast>
          <DayForecastDate>{weatherDates.dayFour}</DayForecastDate>
          <DayForecastLayerTop>
            <ForecastItem>
              Title: <strong>Morning</strong>
            </ForecastItem>
            <ForecastItem>
              Desc: <strong>{forecastDescriptions.dayFourStart}</strong>
            </ForecastItem>
            <ForecastItem>
              Temp: <strong>{weatherTemps.dayFourStart}</strong>
              <TbTemperatureFahrenheit />
            </ForecastItem>
          </DayForecastLayerTop>

          <DayForecastLayerBot>
            <ForecastItem>
              Title: <strong>Afternoon</strong>
            </ForecastItem>
            <ForecastItem>
              Desc: <strong>{forecastDescriptions.dayFourEnd}</strong>
            </ForecastItem>
            <ForecastItem>
              Temp: <strong>{weatherTemps.dayFourEnd}</strong>
              <TbTemperatureFahrenheit />
            </ForecastItem>
          </DayForecastLayerBot>
        </DayForecast>
        <DayForecast>
          <DayForecastDate>{weatherDates.dayFive}</DayForecastDate>
          <DayForecastLayerTop>
            <ForecastItem>
              Title: <strong>Morning</strong>
            </ForecastItem>
            <ForecastItem>
              Desc: <strong>{forecastDescriptions.dayFiveStart}</strong>
            </ForecastItem>
            <ForecastItem>
              Temp: <strong>{weatherTemps.dayFiveStart}</strong>
              <TbTemperatureFahrenheit />
            </ForecastItem>
          </DayForecastLayerTop>

          <DayForecastLayerBot>
            <ForecastItem>
              Title: <strong>Afternoon</strong>
            </ForecastItem>
            <ForecastItem>
              Desc: <strong>{forecastDescriptions.dayFiveEnd}</strong>
            </ForecastItem>
            <ForecastItem>
              Temp: <strong>{weatherTemps.dayFiveEnd}</strong>
              <TbTemperatureFahrenheit />
            </ForecastItem>
          </DayForecastLayerBot>
        </DayForecast>
      </ForecastContainer>
    </ForecastWrapper>
  );
}

export default Forecast;

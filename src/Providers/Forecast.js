import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useSearchWeatherContext } from "./SearchWeather";

const ForecastContext = React.createContext();

export const useForecastContext = () => {
  return useContext(ForecastContext);
};

export function ForecastProvider({ children }) {
  const { weather } = useSearchWeatherContext();

  //forecast state/days
  const [forecastDescriptions, setForecastDescriptions] = useState({
    dayOneStart: "",
    dayOneEnd: "",
    dayTwoStart: "",
    dayTwoEnd: "",
    dayThreeStart: "",
    dayThreeEnd: "",
    dayFourStart: "",
    dayFourEnd: "",
    dayFiveStart: "",
    dayFiveEnd: "",
  });

  const [weatherTemps, setWeatherTemps] = useState({
    dayOneStart: "",
    dayOneEnd: "",
    dayTwoStart: "",
    dayTwoEnd: "",
    dayThreeStart: "",
    dayThreeEnd: "",
    dayFourStart: "",
    dayFourEnd: "",
    dayFiveStart: "",
    dayFiveEnd: "",
  });

  const [weatherDates, setWeatherDates] = useState({
    dayOne: "",
    dayTwo: "",
    dayThree: "",
    dayFour: "",
    dayFive: "",
  });

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${weather.lat}&lon=${weather.lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then((response) => {
        // console.log(response);
        let forecastList = response.data.list;

        //matching date for filter//
        const current = new Date();
        const date = `${current.getFullYear()}-${(
          "0" +
          (current.getMonth() + 1)
        ).slice(-2)}-${("0" + current.getDate()).slice(-2)}`;
        // console.log(date);
        //matching date for filter//

        let filteredForecast = forecastList.filter((forecast) => {
          return forecast.dt_txt.slice(0, 10) !== date;
        });

        let morningForecast = filteredForecast.filter((morningItem) => {
          return morningItem.dt_txt.slice(11, 19) === "09:00:00";
        });
        // console.log(morningForecast, "morning");

        let afternoonForecast = filteredForecast.filter((morningItem) => {
          return morningItem.dt_txt.slice(11, 19) === "15:00:00";
        });
        // console.log(afternoonForecast, "afternoon");

        setWeatherTemps({
          ...weatherTemps,
          dayOneStart: Math.floor(
            ((morningForecast[0].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayTwoStart: Math.floor(
            ((morningForecast[1].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayThreeStart: Math.floor(
            ((morningForecast[2].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayFourStart: Math.floor(
            ((morningForecast[3].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayFiveStart: Math.floor(
            ((morningForecast[4].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayOneEnd: Math.floor(
            ((afternoonForecast[0].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayTwoEnd: Math.floor(
            ((afternoonForecast[1].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayThreeEnd: Math.floor(
            ((afternoonForecast[2].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayFourEnd: Math.floor(
            ((afternoonForecast[3].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayFiveEnd: Math.floor(
            ((afternoonForecast[4].main.temp - 273.15) * 9) / 5 + 32
          ),
        });

        setForecastDescriptions({
          ...forecastDescriptions,
          dayOneStart: morningForecast[0].weather[0].description,
          dayTwoStart: morningForecast[1].weather[0].description,
          dayThreeStart: morningForecast[2].weather[0].description,
          dayFourStart: morningForecast[3].weather[0].description,
          dayFiveStart: morningForecast[4].weather[0].description,
          dayOneEnd: afternoonForecast[0].weather[0].description,
          dayTwoEnd: afternoonForecast[1].weather[0].description,
          dayThreeEnd: afternoonForecast[2].weather[0].description,
          dayFourEnd: afternoonForecast[3].weather[0].description,
          dayFiveEnd: afternoonForecast[4].weather[0].description,
        });

        setWeatherDates({
          ...weatherDates,
          dayOne: morningForecast[0].dt_txt.slice(0, 10),
          dayTwo: morningForecast[1].dt_txt.slice(0, 10),
          dayThree: morningForecast[2].dt_txt.slice(0, 10),
          dayFour: morningForecast[3].dt_txt.slice(0, 10),
          dayFive: morningForecast[4].dt_txt.slice(0, 10),
        });
      })
      .catch((err) => console.log(err));
  }, [weather]);

  const forecast_state = {
    forecastDescriptions,
    weatherTemps,
    weatherDates,
  };

  return (
    <ForecastContext.Provider value={forecast_state}>
      {children}
    </ForecastContext.Provider>
  );
}

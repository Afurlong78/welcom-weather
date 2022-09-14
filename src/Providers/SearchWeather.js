import React, { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";

const SearchWeatherContext = React.createContext();

export const useSearchWeatherContext = () => {
  return useContext(SearchWeatherContext);
};

export function SearchWeatherProvider({ children }) {
  //forecast state/days
  const [forecastDescriptions, setForecastDescriptions] = useState({
    dayOne: "",
    dayTwo: "",
    dayThree: "",
    dayFour: "",
    dayFive: "",
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

  //search and weather object
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("new york");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [weather, setWeather] = useState({
    name: "",
    country: "",
    humidity: "",
    temp: "",
    wind: "",
    feels_like: "",
    temp_max: "",
    temp_min: "",
    lat: "",
    lon: "",
  });

  //error state
  const [error, setError] = useState();

  useEffect(() => {
    let savedLocation = localStorage.getItem("custom-weather-location");
    if (savedLocation) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${savedLocation}&units=imperial&appid=deb80c0a52040db9e3854194cfb3155e`
        )
        .then((response) => {
          // console.log(response);
          setWeather({
            ...weather,
            name: response.data.name,
            country: response.data.sys.country,
            humidity: response.data.main.humidity,
            temp: Math.floor(response.data.main.temp),
            wind: Math.floor(response.data.wind.speed),
            feels_like: Math.floor(response.data.main.feels_like),
            temp_max: Math.floor(response.data.main.temp_max),
            temp_min: Math.floor(response.data.main.temp_min),
            lat: response.data.coord.lat,
            lon: response.data.coord.lon,
          });
          setWeatherDescription(response.data.weather[0].main);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=deb80c0a52040db9e3854194cfb3155e`
        )
        .then((response) => {
          // console.log(response);
          setWeather({
            ...weather,
            name: response.data.name,
            country: response.data.sys.country,
            humidity: response.data.main.humidity,
            temp: Math.floor(response.data.main.temp),
            wind: Math.floor(response.data.wind.speed),
            feels_like: Math.floor(response.data.main.feels_like),
            temp_max: Math.floor(response.data.main.temp_max),
            temp_min: Math.floor(response.data.main.temp_min),
            lat: response.data.coord.lat,
            lon: response.data.coord.lon,
          });
          setWeatherDescription(response.data.weather[0].main);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${weather.lat}&lon=${weather.lon}&appid=deb80c0a52040db9e3854194cfb3155e`
      )
      .then((response) => {
        console.log(response);

        setForecastDescriptions({
          ...forecastDescriptions,
          dayOne: response.data.list[1].weather[0].description,
          dayTwo: response.data.list[9].weather[0].description,
          dayThree: response.data.list[17].weather[0].description,
          dayFour: response.data.list[25].weather[0].description,
          dayFive: response.data.list[33].weather[0].description,
        });

        setWeatherDates({
          ...weatherDates,
          dayOne: response.data.list[1].dt_txt.slice(0, 10),
          dayTwo: response.data.list[9].dt_txt.slice(0, 10),
          dayThree: response.data.list[17].dt_txt.slice(0, 10),
          dayFour: response.data.list[25].dt_txt.slice(0, 10),
          dayFive: response.data.list[33].dt_txt.slice(0, 10),
        });

        setWeatherTemps({
          ...weatherTemps,
          dayOneStart: Math.floor(
            ((response.data.list[1].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayOneEnd: Math.floor(
            ((response.data.list[8].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayTwoStart: Math.floor(
            ((response.data.list[9].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayTwoEnd: Math.floor(
            ((response.data.list[16].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayThreeStart: Math.floor(
            ((response.data.list[17].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayThreeEnd: Math.floor(
            ((response.data.list[24].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayFourStart: Math.floor(
            ((response.data.list[25].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayFourEnd: Math.floor(
            ((response.data.list[32].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayFiveStart: Math.floor(
            ((response.data.list[33].main.temp - 273.15) * 9) / 5 + 32
          ),
          dayFiveEnd: Math.floor(
            ((response.data.list[39].main.temp - 273.15) * 9) / 5 + 32
          ),
        });
      })
      .catch((err) => console.log(err));
  }, [weather]);

  function searchHandler(e) {
    e.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&appid=deb80c0a52040db9e3854194cfb3155e`
      )
      .then((response) => {
        // console.log(response);
        setWeather({
          ...weather,
          name: response.data.name,
          country: response.data.sys.country,
          humidity: response.data.main.humidity,
          temp: Math.floor(response.data.main.temp),
          wind: Math.floor(response.data.wind.speed),
          feels_like: Math.floor(response.data.main.feels_like),
          temp_max: Math.floor(response.data.main.temp_max),
          temp_min: Math.floor(response.data.main.temp_min),
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
        });
        setWeatherDescription(response.data.weather[0].main);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(`Sorry, we could not find ${searchInput}.`);
      });

    setSearchInput("");
  }

  function locationHandler(e) {
    e.preventDefault();

    if (searchInput.length <= 0) {
      alert("You must enter a location.");
    } else {
      localStorage.setItem("custom-weather-location", searchInput);
    }
    setSearchInput("");
  }

  const weather_state = {
    setSearchInput,
    searchInput,
    searchHandler,
    weatherDescription,
    weather,
    locationHandler,
    error,
    forecastDescriptions,
    weatherTemps,
    weatherDates,
  };

  return (
    <SearchWeatherContext.Provider value={weather_state}>
      {children}
    </SearchWeatherContext.Provider>
  );
}

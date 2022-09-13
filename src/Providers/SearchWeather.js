import React, { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";

const SearchWeatherContext = React.createContext();

export const useSearchWeatherContext = () => {
  return useContext(SearchWeatherContext);
};

export function SearchWeatherProvider({ children }) {
  //forecast state/days
  const [dayOne, setDayOne] = useState([]);
  const [dayTwo, setDayTwo] = useState([]);
  const [dayThree, setDayThree] = useState([]);
  const [dayFour, setDayFour] = useState([]);
  const [dayFive, setDayFive] = useState([]);

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

  useMemo(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${weather.lat}&lon=${weather.lon}&appid=deb80c0a52040db9e3854194cfb3155e`
      )
      .then((response) => {
        console.log(response);
        setDayOne(response.data.list.slice(0, 8));
        setDayTwo(response.data.list.slice(8, 16));
        setDayThree(response.data.list.slice(16, 24));
        setDayFour(response.data.list.slice(24, 32));
        setDayFive(response.data.list.slice(32, 40));
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

    localStorage.setItem("custom-weather-location", searchInput);
    setSearchInput("");
  }

  const weather_state = {
    setSearchInput,
    searchInput,
    searchHandler,
    weatherDescription,
    weather,
    locationHandler,
    dayOne,
    dayTwo,
    dayThree,
    dayFour,
    dayFive,
    error,
  };

  return (
    <SearchWeatherContext.Provider value={weather_state}>
      {children}
    </SearchWeatherContext.Provider>
  );
}

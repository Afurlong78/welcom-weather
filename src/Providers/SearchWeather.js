import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const SearchWeatherContext = React.createContext();

export const useSearchWeatherContext = () => {
  return useContext(SearchWeatherContext);
};

export function SearchWeatherProvider({ children }) {
  //search and weather object
  const [searchInput, setSearchInput] = useState("");
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
          `https://api.openweathermap.org/data/2.5/weather?q=${savedLocation}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`
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
          `https://api.openweathermap.org/data/2.5/weather?q=new york&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`
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

  function searchHandler(e) {
    e.preventDefault();

    if (searchInput.length <= 0) {
      setError("Search cannot be empty.");
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`
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
  }

  function locationHandler(e) {
    e.preventDefault();

    if (searchInput.length <= 0) {
      alert("You must enter a location.");
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`
        )
        .then((response) => {
          // console.log(response);
          localStorage.setItem("custom-weather-location", searchInput);
        })
        .catch((err) => {
          console.log(err);
          alert("we could not find the location to save.");
        });
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
  };

  return (
    <SearchWeatherContext.Provider value={weather_state}>
      {children}
    </SearchWeatherContext.Provider>
  );
}

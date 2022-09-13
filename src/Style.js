import styled from "styled-components";
import staticbg from "./Assets/static.jpg";
import clear from "./Assets/clear.jpg";
import clouds from "./Assets/clouds.jpg";
import rain from "./Assets/rain.jpg";
import snow from "./Assets/snow.jpg";
import thunderstorm from "./Assets/thunderstorm.jpg";
import mist from "./Assets/mist.jpg";
import smoke from "./Assets/smoke.jpg";
import haze from "./Assets/haze.jpg";
import dust from "./Assets/dust.jpg";
import fog from "./Assets/fog.jpg";
import sand from "./Assets/sand.jpg";
import ash from "./Assets/ash.jpg";
import squall from "./Assets/squall.jpg";
import tornado from "./Assets/tornado.jpg";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;

  position: relative;

  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const DarkBg = styled.div`
  height: 100vh;
  width: 100%;

  background: grey;

  z-index: -2;

  position: absolute;
  top: 0;
  left: 0;

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Tornado = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${tornado});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Tornado") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Squall = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${squall});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Squall") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Ash = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${ash});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Ash") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Sand = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${sand});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Sand") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Fog = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${fog});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Fog") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Dust = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${dust});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Dust") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Haze = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${haze});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Haze") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Smoke = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${smoke});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Smoke") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Mist = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${mist});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Mist") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Thunderstorm = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${thunderstorm});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Thunderstorm") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Snow = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${snow});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Snow") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Rain = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${rain});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Rain") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Clear = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${clear});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Clear") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const Clouds = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${clouds});
  background-size: cover;

  transition: all 300ms ease-in-out;

  opacity: ${(props) => {
    if (props.weather === "Clouds") {
      return `1`;
    } else {
      return `0`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const DynamicBackground = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: ${(props) => {
    if (!props.status) {
      return `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${staticbg})`;
    } else {
      return backgrounds[props.status];
    }
  }};
  background-size: cover;

  transition: all 300ms ease-in-out;

  transform: ${(props) => {
    if (props.status) {
      return `translateX(0%)`;
    } else {
      return `translateX(100%)`;
    }
  }};

  @media all and (max-height: 950px) {
    height: 100%;
  }
`;

export const backgrounds = {
  Clouds: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${clouds})`,
  Clear: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${clear})`,
  Rain: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${rain})`,
  Snow: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${snow})`,
  Thunderstorm: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${thunderstorm})`,
  Drizzle: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${rain})`,
  Mist: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${mist})`,
  Smoke: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${smoke})`,
  Haze: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${haze})`,
  Dust: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${dust})`,
  Fog: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${fog})`,
  Sand: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${sand})`,
  Ash: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${ash})`,
  Squall: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${squall})`,
  Tornado: `linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)), url(${tornado})`,
};

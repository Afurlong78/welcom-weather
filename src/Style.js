import styled, { keyframes } from "styled-components";
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
  max-height: 100vh;

  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
  background-image: ${(props) => {
    if (!props.weather) {
      return `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url(${staticbg})`;
    } else {
      return backgrounds[props.weather];
    }
  }};

  transition: all 300ms ease-in-out;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 8px;
  }

  overflow-y: scroll;
`;

export const DarkBg = styled.div`
  height: 100vh;
  width: 100%;

  background: darkgrey;

  z-index: -2;

  position: absolute;
  top: 0;
  left: 0;

  @media all and (max-height: 780px) {
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

const backgrounds = {
  Clouds: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${clouds})`,
  Clear: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${clear})`,
  Rain: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${rain})`,
  Snow: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${snow})`,
  Thunderstorm: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${thunderstorm})`,
  Drizzle: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${rain})`,
  Mist: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${mist})`,
  Smoke: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${smoke})`,
  Haze: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${haze})`,
  Dust: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${dust})`,
  Fog: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${fog})`,
  Sand: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${sand})`,
  Ash: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${ash})`,
  Squall: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${squall})`,
  Tornado: `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)), url(${tornado})`,
};

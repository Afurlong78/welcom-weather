import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;

  border-radius: 8px;

  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//-------------------------------------------------//
//-------------------currentWeather----------------//
//-------------------------------------------------//

export const CurrentWeatherDisplay = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: start;

  box-sizing: border-box;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: white;

  gap: 2rem;

  @media all and (max-width: 750px) {
    justify-content: space-between;
  }

  @media all and (max-width: 550px) {
    gap: 0.5rem;
  }
`;

export const Location = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: white;

  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: -100px;

  @media all and (max-width: 1000px) {
    font-size: 3rem;
  }

  @media all and (max-width: 800px) {
    font-size: 2rem;
  }

  @media all and (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const Temperature = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: white;

  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 1000px) {
    font-size: 3rem;
  }

  @media all and (max-width: 800px) {
    font-size: 2rem;
  }

  @media all and (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const LatLonDisplay = styled.div`
  height: 1rem;

  width: 100%;

  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: white;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

export const Description = styled.div`
  height: 1rem;

  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

//-------------------------------------------------//
//-------------------forecast----------------------//
//-------------------------------------------------//

export const ForecastWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ForecastContainer = styled.div`
  height: 100%;
  width: 100%;

  box-sizing: border-box;

  display: grid;
  grid-auto-flow: column;
  overscroll-behavior-inline: contain;

  gap: 1rem;

  ::-webkit-scrollbar {
    height: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 8px;
  }

  overflow-x: auto;

  padding-top: 5px;
  padding-bottom: 5px;
`;

export const ForecastItem = styled.div`
  height: auto;
  width: 90%;

  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: white;
`;

export const ForecastDescription = styled.div``;

export const ForecastTemperature = styled.div``;

export const ForecastHeader = styled.h3`
  width: 100%;

  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: white;
`;

export const DayForecast = styled.div`
  height: 220px;
  width: 200px;

  position: relative;

  background: rgba(255, 255, 255, 0.2);

  border: 2px solid white;
  border-radius: 4px;
`;

export const DayForecastDate = styled.div`
  height: 20px;
  width: 100%;

  background:white;
  color:black;

  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 2px solid white;
`;

export const DayForecastLayerTop = styled.div`
  height: 100px;
  width: 100%;

  position: absolute;
  top: 20px;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 2px solid white;
`;
export const DayForecastLayerMid = styled.div`
  height: 100px;
  width: 100%;

  position: absolute;
  top: 120px;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 2px solid white;
`;
export const DayForecastLayerBot = styled.div`
  height: 100px;
  width: 100%;

  position: absolute;
  top: 120px;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

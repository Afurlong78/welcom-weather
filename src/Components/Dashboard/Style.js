import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;

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
  align-items: center;

  box-sizing: border-box;
  padding: 5px;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: white;

  gap: 2rem;

  @media all and (max-width: 750px) {
    justify-content: space-between;
  }
`;

export const Location = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Temperature = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TemperatureIcon = styled.div``;

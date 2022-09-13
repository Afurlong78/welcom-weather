import React, { useState, useEffect } from "react";
import Styled from "../../Global/Style";
import Dashboard from "../Dashboard/Dashboard";
import { useSearchWeatherContext } from "../../Providers/SearchWeather";
import {
  BsFillSunFill,
  BsFillCloudFill,
  BsFillCloudRainFill,
  BsSnow,
  BsFillCloudLightningRainFill,
  BsFillCloudHaze2Fill,
  BsFillCloudFog2Fill,
  BsTornado,
} from "react-icons/bs";
import { WiSmoke } from "react-icons/wi";
import { GiDustCloud, GiSandstorm } from "react-icons/gi";
import {
  MainContainer,
  HeaderContainer,
  Header,
  FormContainer,
  FormRow,
  Input,
  Btn,
} from "./Style";

function Form() {
  const {
    setSearchInput,
    searchInput,
    searchHandler,
    weatherDescription,
    locationHandler,
    error,
  } = useSearchWeatherContext();

  return (
    <MainContainer>
      <HeaderContainer>
        <Header>Welcome Weather</Header>
        <div
          style={{
            display: "flex",
            justiyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
          }}
        >
          {weatherDescription === "Clear" ? (
            <BsFillSunFill
              style={{ fontSize: "3rem", marginLeft: "15px", color: "yellow" }}
            />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Clouds" ? (
            <BsFillCloudFill style={{ fontSize: "3rem", marginLeft: "15px" }} />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Rain" ? (
            <BsFillCloudRainFill
              style={{ fontSize: "3rem", marginLeft: "15px", color: "grey" }}
            />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Snow" ? (
            <BsSnow style={{ fontSize: "3rem", marginLeft: "15px" }} />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Thunderstorm" ? (
            <BsFillCloudLightningRainFill
              style={{ fontSize: "3rem", marginLeft: "15px" }}
            />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Mist" ? (
            <BsFillCloudFill style={{ fontSize: "3rem", marginLeft: "15px" }} />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Smoke" ? (
            <WiSmoke style={{ fontSize: "3rem", marginLeft: "15px" }} />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Haze" ? (
            <BsFillCloudHaze2Fill
              style={{ fontSize: "3rem", marginLeft: "15px" }}
            />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Dust" ? (
            <GiDustCloud
              style={{
                fontSize: "3rem",
                marginLeft: "15px",
                color: "lightbrown",
              }}
            />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Fog" ? (
            <BsFillCloudFog2Fill
              style={{ fontSize: "3rem", marginLeft: "15px" }}
            />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Sand" ? (
            <GiSandstorm
              style={{ fontSize: "3rem", marginLeft: "15px", color: "tan" }}
            />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Ash" ? (
            <WiSmoke style={{ fontSize: "3rem", marginLeft: "15px" }} />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Squall" ? (
            <BsFillCloudLightningRainFill
              style={{ fontSize: "3rem", marginLeft: "15px" }}
            />
          ) : (
            <div></div>
          )}
          {weatherDescription === "Tornado" ? (
            <BsTornado style={{ fontSize: "3rem", marginLeft: "15px" }} />
          ) : (
            <div></div>
          )}
        </div>
      </HeaderContainer>
      <FormContainer>
        <FormRow>
          <Styled.Column>
            <Input
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              value={searchInput}
              placeholder="Search any major city..."
            />
            {error ? (
              <Styled.Error>{error}</Styled.Error>
            ) : (
              <Styled.Placeholder></Styled.Placeholder>
            )}
          </Styled.Column>
          <Styled.Row>
            <Btn onClick={searchHandler}>Search</Btn>
            <Btn onClick={locationHandler}>Set Location</Btn>
          </Styled.Row>
        </FormRow>
      </FormContainer>
      <Dashboard />
    </MainContainer>
  );
}

export default Form;

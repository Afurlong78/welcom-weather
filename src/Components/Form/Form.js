import React, { useState, useEffect } from "react";
import Styled from "../../Global/Style";
import Dashboard from "../Dashboard/Dashboard";
import { useSearchWeatherContext } from "../../Providers/SearchWeather";
import IconManager from "./IconManager";
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
  const { setSearchInput, searchInput, searchHandler, locationHandler, error } =
    useSearchWeatherContext();

  return (
    <MainContainer id="main-container">
      <HeaderContainer>
        <Header>Welcome Weather</Header>
        <IconManager />
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

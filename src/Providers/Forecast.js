import react, { useState, useContext, useEffect } from "react";

const ForecastContext = React.createContext();

export const useForecastContext = () => {
  return useContext(ForecastContext);
};

export function ForecastProvider({ children }) {
  const forecast_state = {};

  return (
    <ForecastContext.Provider value={forecast_state}>
      {children}
    </ForecastContext.Provider>
  );
}

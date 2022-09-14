import React, { useEffect } from "react";
import Form from "./Components/Form/Form.js";
import { useSearchWeatherContext } from "./Providers/SearchWeather";
import { MainContainer, DarkBg } from "./Style.js";

function App() {
  const { weatherDescription } = useSearchWeatherContext();

  useEffect(() => {
    let container = document.getElementById("images");
    container.style.opacity = "0.6";

    setTimeout(function () {
      container.style.opacity = "1";
    }, 350);
  }, [weatherDescription]);

  return (
    <MainContainer weather={weatherDescription} id="images">
      <DarkBg />
      <Form />
    </MainContainer>
  );
}

export default App;

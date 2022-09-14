import React from "react";
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
import { useSearchWeatherContext } from "../../Providers/SearchWeather";

function IconManager() {
  const { weatherDescription } = useSearchWeatherContext();
  return (
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
        <BsFillCloudFog2Fill style={{ fontSize: "3rem", marginLeft: "15px" }} />
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
  );
}

export default IconManager;

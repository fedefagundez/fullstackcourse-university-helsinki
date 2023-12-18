import axios from "axios";
import { useEffect, useState } from "react";

const WeatherInfo = ({ capital }) => {
  const [weatherData, setWeatherData] = useState({});
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(api_key);

  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`;

  const hook = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setWeatherData(response.data);
      })
      .catch((response) => console.log(`Error: ${response}`));
  };

  useEffect(hook);

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <b>Temperature:</b> {weatherData.current.temperature}ºC <br />
      <img
        src={weatherData.current.weather_icons[0]}
        alt={weatherData.current.weather_descriptions[0]}
      />{" "}
      <br />
      <b>Wind:</b> {weatherData.current.wind_speed} mph direction{" "}
      {weatherData.current.wind_dir}
    </div>
  );
};

export default WeatherInfo;

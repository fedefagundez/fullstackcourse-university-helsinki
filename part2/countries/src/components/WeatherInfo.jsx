import axios from "axios";
import { useEffect, useState } from "react";

const WeatherInfo = ({ countryName }) => {
  const [weatherData, setWeatherData] = useState({});
  const api_key = import.meta.env.VITE_API_KEY;
  console.log(api_key);

  const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${countryName}`;

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

  return null;
};

export default WeatherInfo;

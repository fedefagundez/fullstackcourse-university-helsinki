import { nanoid } from "nanoid";
import WeatherInfo from "./WeatherInfo";

const CountryInfo = ({ country }) => {
  const langs = Object.values(country.languages);

  return (
    <div>
      <h2>{country.name.common}</h2>
      capital {country.capital[0]} <br />
      population {country.population}
      <h3>Languages</h3>
      <ul>
        {langs.map((lang) => (
          <li key={nanoid}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
      <WeatherInfo name={country.name.common} />
    </div>
  );
};

export default CountryInfo;

import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

const Countries = ({ countries }) => {
  const mapedCountries = countries.map((country) => {
    return {
      id: nanoid(),
      name: country.name.common,
      capital: country.capital[0],
      population: country.population,
      languages: country.languages,
      flag: country.flags.png
    };
  });

  if (countries.length >= 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length > 1) {
    return (
      <div>
        {mapedCountries.map((country) => (
          <div key={country.id}>{country.name}</div>
        ))}
      </div>
    );
  } else if (countries.length === 1) {
    return (
      <div>
        <Country country={countries[0]} />
      </div>
    );
  }
};

const Country = ({ country }) => {
  const keys = Object.keys(country.languages);
  const altImg = `flag of ${country.name.common}`;

  return (
    <div>
      <h2>{country.name.common}</h2>
      capital {country.capital[0]} <br />
      population {country.population}
      <h3>Languages</h3>
      <ul>
        {keys.map((key) => {
          return <li key={nanoid()}>{country.languages[key]}</li>;
        })}
      </ul>
      <img src={country.flags.png} alt={altImg} />
    </div>
  );
};

function App() {
  const [countries, setCountries] = useState([]);
  const [newCountryFilter, setCountryFilter] = useState("");
  const [showCountries, setShowCountries] = useState([]);

  const hook = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((response) => console.log(`Error: ${response}`));
  };

  useEffect(hook, []);

  const handleCountryFilter = (event) => {
    setCountryFilter(event.target.value);
    const regex = new RegExp("^" + event.target.value.toLowerCase());
    const filteredCountries = countries.filter((country) =>
      regex.test(country.name.common.toLowerCase())
    );
    console.log(filteredCountries);
    setShowCountries(filteredCountries);
  };

  return (
    <div>
      <label htmlFor="txtCountry">find countries</label>
      <input
        id="txtCountry"
        type="text"
        value={newCountryFilter}
        onChange={handleCountryFilter}
      />{" "}
      <br />
      <Countries countries={showCountries} />
    </div>
  );
}

export default App;

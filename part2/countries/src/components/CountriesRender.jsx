import CountryInfo from "./CountryInfo";
import { nanoid } from "nanoid";

const CountriesRender = ({ countries, setShowCountry, showCountry }) => {
  const handler = (event) => setShowCountry(event.target.dataset.name);

  if (countries.length >= 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length > 1) {
    return (
      <div>
        {countries.map((country) => (
          <div key={nanoid()}>
            {country.name.common}
            <button data-name={country.name.common} onClick={handler}>
              show
            </button>
            {showCountry === country.name.common ? (
              <CountryInfo country={country} />
            ) : null}
          </div>
        ))}
      </div>
    );
  } else if (countries.length === 1) {
    return (
      <div>
        <CountryInfo country={countries[0]} />
      </div>
    );
  }
};

export default CountriesRender;

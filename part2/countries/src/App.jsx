import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import CountriesRender from "./components/CountriesRender.jsx";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [newFilter, setFilter] = useState("");
  const [showCountries, setShowCountries] = useState([]);
  const [showCountry, setShowCountry] = useState("");

  const hook = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(
          response.data.map((country) => {
            if (!country.hasOwnProperty("capital")) {
              country.capital = "Not Found";
            }
            return country;
          })
        );
      })
      .catch((response) => console.log(`Error: ${response}`));
  };

  useEffect(hook, []);

  const handleFilter = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
    const regex = new RegExp(
      "^" + (event.target.value !== "" ? event.target.value.toLowerCase() : " ")
    );
    const filteredCountries = countries.filter((country) =>
      regex.test(country.name.common.toLowerCase())
    );
    setShowCountries(filteredCountries);
  };

  return (
    <div>
      <Form newFilter={newFilter} handleFilter={handleFilter} />
      <CountriesRender
        countries={showCountries}
        setShowCountry={setShowCountry}
        showCountry={showCountry}
      />
    </div>
  );
}

export default App;

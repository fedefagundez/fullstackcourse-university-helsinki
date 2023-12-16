import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState("");
  const [newCountryFilter, setCountryFilter] = useState("");
  const [showCountries, setShowCountries] = useState("");

  const hook = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((response) => console.log(`Error: ${response}`));
  };

  useEffect(hook, []);

  const handleCountryFilter = (event) => {
    setCountryFilter(event.target.value);
    const filter = new RegExp(newCountryFilter.toLowerCase());
    const filteredCountries = countries.filter(countrie => filter.test(countrie.name.common.toLowerCase()));
    setShowCountries(filteredCountries);
    console.log(filteredCountries);
  };

  return (
    <div>
      <label htmlFor="txtCountry">find countries</label>
      <input
        id="txtCountry"
        type={newCountryFilter}
        onChange={handleCountryFilter}
      />
    </div>
  );
}

export default App;

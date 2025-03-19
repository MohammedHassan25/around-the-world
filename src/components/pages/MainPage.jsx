import { Outlet } from "react-router-dom";
import { Header } from "../index";
import { useEffect, useState } from "react";

export function MainPage() {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const filteredData = data.filter(
        (country) => country.name?.common !== "Israel",
      );
      const country = !JSON.parse(localStorage.getItem("countries"))
        ? filteredData.map((country) => {
            return {
              name: country.name?.common,
              nativeName: country.name?.nativeName
                ? Object.values(country.name.nativeName)[0].common
                : null,
              population: country.population.toLocaleString("en-US"),
              currencies: country.currencies
                ? Object.values(country.currencies)
                    .map((currency) => {
                      return currency.name;
                    })
                    .join(" , ")
                : null,
              region: country.region,
              subregion: country.subregion
                ? country.subregion
                : country.name?.common,
              capital: country.capital ? country.capital[0] : null,
              flag: country.flags?.svg,
              domain: country.tld ? country.tld.join(" , ") : null,
              languages: country.languages
                ? Object.values(country.languages).join(" , ")
                : null,
            };
          })
        : JSON.parse(localStorage.getItem("countries"));
      localStorage.setItem("countries", JSON.stringify(country));
      return JSON.parse(localStorage.getItem("countries"));
    } catch (error) {
      return JSON.parse(localStorage.getItem("countries"));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetchData();
      setCountries(data);
    };
    fetchCountries();
  }, []);
  return (
    <div className="font-inter dark:text-gray-100">
      <Header />
      <Outlet
        context={{
          filteredCountries,
          setFilteredCountries,
          countries,
          setCountries,
          loading,
          fetchData,
        }}
      />
    </div>
  );
}

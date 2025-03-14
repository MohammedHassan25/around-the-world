import { useEffect, useState } from "react";
import { Countries, SearchAndRegion } from "./index";

export function Body() {
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
      const country = filteredData.map((country) => {
        return {
          name: country.name?.common,
          nativeName: country.name?.nativeName
            ? Object.values(country.name.nativeName)[0].common
            : null,
          population: country.population,
          currencies: country.currencies
            ? Object.values(country.currencies)[0]?.name
            : null,
          region: country.region,
          subregion: country.subregion
            ? country.subregion
            : country.name?.common,
          capital: country.capital ? country.capital[0] : null,
          flag: country.flags?.svg,
          domain: country.tld ? country.tld[0] : null,
          languages: country.languages
            ? Object.values(country.languages)[0]
            : null,
        };
      });
      return country;
    } catch (error) {
      console.error(error);
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
    <div className="bg-gray-100 px-0 pb-16 pt-12 dark:bg-gray-900 md:px-20">
      {loading ? (
        <p className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 h-screen">
          Loading ...
        </p>
      ) : (
        <>
          <SearchAndRegion />
          <Countries countries={countries} />
        </>
      )}
    </div>
  );
}

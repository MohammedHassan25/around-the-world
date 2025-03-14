import { useEffect, useState } from "react";
import { CountryCard } from "../index";

async function fetchData() {
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
        subregion: country.subregion ? country.subregion : country.name?.common,
        capital: country.capital ? country.capital[0] : null,
        flag: country.flags?.png,
        domain: country.tld ? country.tld[0] : null,
        languages: country.languages
          ? Object.values(country.languages)[0]
          : null,
      };
    });
    return country;
  } catch (error) {
    console.error(error);
  }
}

export function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetchData();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return (
    <div className="grid grid-cols-1 justify-items-center gap-6 pt-8 md:grid-cols-2 md:pt-12 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country, i) => (
        <CountryCard key={i} {...country} />
      ))}
    </div>
  );
}

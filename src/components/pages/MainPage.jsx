import { data, Outlet } from "react-router-dom";
import { Header } from "../index";
import { useEffect, useState } from "react";
import DataCountries from "../../data.json";

export function MainPage() {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

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
      });
      localStorage.setItem("countries", JSON.stringify(country));
      return country;
    } catch (error) {
      const storedCountries = localStorage.getItem("countries")
        ? localStorage.getItem("countries")
        : JSON.stringify(DataCountries);
      return storedCountries ? JSON.parse(storedCountries) : null;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const fetchCountries = async () => {
      const storedCountries = localStorage.getItem("countries");
      const data = storedCountries
        ? JSON.parse(storedCountries)
        : await fetchData();
      setCountries(data);
      setLoading(false);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      {scrollY >= 200 && (
        <div className="fixed bottom-4 right-4 rounded-full bg-blue-500 p-2 text-white shadow-lg hover:bg-blue-600 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <a
            className="flex h-full w-full items-center justify-center transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-up"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}

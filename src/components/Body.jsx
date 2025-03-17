import { useRef } from "react";
import { Countries, SearchAndRegion } from "./index";
import { useOutletContext } from "react-router-dom";

export function Body() {
  const { filteredCountries, setFilteredCountries, countries , loading } = useOutletContext();
  const input = useRef();

  return (
    <div className="bg-gray-100 px-0 pb-16 pt-12 dark:bg-gray-900 md:px-20">
      {loading ? (
        <p className="h-screen text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
          Loading ...
        </p>
      ) : (
        <>
          <SearchAndRegion
            filteredCountries={filteredCountries}
            setFilteredCountries={setFilteredCountries}
            countries={countries}
            input={input}
          />
          <Countries
            filteredCountries={filteredCountries}
            countries={countries}
            input={input}
          />
        </>
      )}
    </div>
  );
}

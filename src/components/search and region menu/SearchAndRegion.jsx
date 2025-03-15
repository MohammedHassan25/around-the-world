import { useRef } from "react";
import { RegionMenu, Search } from "../index";

export function SearchAndRegion(props) {
  return (
    <form
      id="form"
      className="flex flex-col items-start justify-between px-4 md:flex-row md:items-center"
    >
      <Search
        filteredCountries={props.filteredCountries}
        setFilteredCountries={props.setFilteredCountries}
        countries={props.countries}
        input = {props.input}
      />
      <RegionMenu
        filteredCountries={props.filteredCountries}
        setFilteredCountries={props.setFilteredCountries}
        countries={props.countries}
      />
    </form>
  );
}

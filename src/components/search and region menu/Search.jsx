export function Search(props) {
  const filterSearch = () => {
    const searchValue = props.input.current?.value.toLowerCase();
    const filteredCountries = props.countries.filter((country) => {
      return country.name.toLowerCase().includes(searchValue);
    });
    props.setFilteredCountries(filteredCountries);
  };

  return (
    <div className="mb-10 flex h-14 w-full items-center justify-center gap-6 overflow-hidden rounded-[115px] bg-gray-50 pl-8 shadow dark:bg-gray-800 md:mb-0 md:w-[480px]">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-gray-700 dark:fill-gray-100"
      >
        <g id="search">
          <path
            id="Shape"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
          />
        </g>
      </svg>

      <input
        className="w-full bg-gray-50 text-gray-700 outline-none placeholder:text-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-100"
        type="search"
        name=""
        placeholder="Search for a country…"
        id=""
        ref={props.input}
        onChange={filterSearch}
      />
    </div>
  );
}

export function CountryCard(props) {
  const number = props.population;
  const formattedNumber = number.toLocaleString("en-US");
  return (
    <a
      href="#"
      className="block h-full w-64 rounded-[8px] bg-gray-50 p-3 pb-9 text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-50 lg:w-[264px]"
    >
      <img
        src={props.flag}
        alt={props.name}
        className="h-[157px] w-60 rounded-[8px]"
        loading="lazy"
      />
      <p className="py-4 pl-4 text-lg font-extrabold">{props.name}</p>
      <div className="pl-4">
        <div>
          <p className="flex items-center justify-start gap-1 pb-2">
            <span className="font-semibold">Population: </span>
            <span className="font-light">{formattedNumber}</span>
          </p>
          <p className="flex items-center justify-start gap-1 pb-2">
            <span className="font-semibold">Region: </span>
            <span className="font-light">{props.region}</span>
          </p>
          <p className="flex items-center justify-start gap-1">
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{props.capital}</span>
          </p>
        </div>
      </div>
    </a>
  );
}

export function CountryCard() {
  return (
    <a
      href="#"
      className="block h-full w-64 rounded-[8px] lg:w-[264px] bg-gray-50 p-3 pb-9 text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-50"
    >
      <img
        src="https://placehold.jp/243x157.png"
        alt="Country"
        className="h-[157px] w-60 rounded-[8px]"
        loading="lazy"
      />
      <p className="py-4 pl-4 text-lg font-extrabold">Egypt</p>
      <div className="pl-4">
        <div>
          <p className="flex items-center justify-start gap-1 pb-2">
            <span className="font-semibold">Population: </span>
            <span className="font-light">5,483,450</span>
          </p>
          <p className="flex items-center justify-start gap-1 pb-2">
            <span className="font-semibold">Region: </span>
            <span className="font-light">Asia</span>
          </p>
          <p className="flex items-center justify-start gap-1">
            <span className="font-semibold">Capital: </span>
            <span className="font-light">AlQuds</span>
          </p>
        </div>
      </div>
    </a>
  );
}

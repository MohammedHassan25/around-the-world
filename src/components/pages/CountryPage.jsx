import { useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

const pFont = "font-semibold text-base leading-8";
const pSpan = "font-normal";

export function CountryPage() {
  const { name } = useParams();
  const { countries, setCountries, fetchData, loading } = useOutletContext();

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetchData();
      setCountries(data);
    };
    fetchCountries();
  }, [countries, setCountries, loading === true]);

  const country = countries.find((country) => country.name === name);

  if (!country && loading === true) {
    console.log("Country not found");
    return (
      <p className="h-screen pt-12 text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
        Loading ...
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center px-10 pb-10 pt-10">
      <div className="flex w-full justify-start">
        <Link to={"../"}>
          <div className="rounded-md bg-white p-3 shadow-md dark:bg-gray-800">
            <svg
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.89269 0.535534L7.0712 1.71405L3.18211 5.60313L18.0314 5.60313L18.0314 7.25305L3.18211 7.25305L7.0712 11.1421L5.89269 12.3206L0.000132627 6.42809L5.89269 0.535534Z"
                className="fill-current text-gray-800 dark:text-white"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="mt-10 flex w-full flex-col justify-evenly gap-10 lg:items-center xl:flex-row">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="max-h-[401px] rounded-md lg:max-w-[560px]"
        />
        <div className="flex w-full flex-col items-start justify-center lg:w-fit">
          <h1 className="text-3xl font-extrabold">{country.name}</h1>
          <div className="mt-7 flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-32">
            <div>
              <p className={pFont}>
                Native Name: <span className={pSpan}>{country.nativeName}</span>
              </p>
              <p className={pFont}>
                Population: <span className={pSpan}>{country.population}</span>
              </p>
              <p className={pFont}>
                Region: <span className={pSpan}>{country.region}</span>
              </p>
              <p className={pFont}>
                Subregion: <span className={pSpan}>{country.subregion}</span>
              </p>
              <p className={pFont}>
                Capital: <span className={pSpan}>{country.capital}</span>
              </p>
            </div>
            <div>
              <p className={pFont}>
                Top Level Domain:{" "}
                <span className={pSpan}>{country.domain}</span>
              </p>
              <p className={pFont}>
                Currencies: <span className={pSpan}>{country.currencies}</span>
              </p>
              <p className={pFont}>
                Languages: <span className={pSpan}>{country.languages}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

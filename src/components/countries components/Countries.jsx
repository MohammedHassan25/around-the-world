import { CountryCard } from "../index";

export function Countries(props) {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-6 pt-8 md:grid-cols-2 md:pt-12 lg:grid-cols-3 xl:grid-cols-4">
      {props.countries.map((country, i) => (
        <CountryCard key={i} {...country} />
      ))}
    </div>
  );
}

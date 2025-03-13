import { CountryCard } from "../index";

export function Countries() {
  return (
    <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 md:pt-12 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
}

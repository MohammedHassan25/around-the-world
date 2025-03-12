import { RegionMenu, Search } from "../index";

export function SearchAndRegion() {
  return (
    <form id="form" className="flex flex-col items-start justify-between px-4 md:mb-12 md:flex-row md:items-center md:px-0">
      <Search />
      <RegionMenu />
    </form>
  );
}

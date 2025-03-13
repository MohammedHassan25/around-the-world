import { RegionMenu, Search } from "../index";

export function SearchAndRegion() {
  return (
    <form id="form" className="flex flex-col items-start justify-between px-4 md:flex-row md:items-center ">
      <Search />
      <RegionMenu />
    </form>
  );
}

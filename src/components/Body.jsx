import { Countries, SearchAndRegion } from "./index";

export function Body() {
  return (
    <div className="bg-gray-100 px-0 pb-16 pt-12 dark:bg-gray-900 md:px-20">
      <SearchAndRegion />
      <Countries />
    </div>
  );
}

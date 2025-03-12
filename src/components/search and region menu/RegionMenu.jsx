import Select from "react-select";

export function RegionMenu() {
  const options = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  return (
    <Select
      id="region-filter"
      name="region"
      classNames={{
        indicatorSeparator: () => "hidden",
        input: () => "dark:!text-gray-100 !text-gray-900",
        singleValue: () => "dark:!text-gray-100 !text-gray-900",
        control: (state) => 
          `py-3 w-[200px] px-1 shadow dark:bg-gray-800 !rounded-[5px] !border-none
          ${state.isFocused ? "!ring-2 !ring-blue-500 dark:!ring-gray-400" : ""}`,
        placeholder: () => "!text-gray-900 dark:!text-gray-100",
        option: (state) =>
          `${
            state.isFocused 
              ? "!bg-gray-200 dark:!bg-gray-700 !text-gray-900 dark:!text-gray-100" 
              : ""
          }`,
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
      placeholder="Filter by Region"
      options={options}
    />
  );
}
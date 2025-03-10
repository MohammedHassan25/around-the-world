import { Logo, SwitchTheam } from "./index";

export function Header() {
  return (
    <header className="mb-6 flex h-20 items-center justify-between bg-white pl-5 pr-4 shadow dark:bg-gray-800 md:mb-12 md:pl-24 md:pr-20">
      <Logo />
      <SwitchTheam />
    </header>
  );
}

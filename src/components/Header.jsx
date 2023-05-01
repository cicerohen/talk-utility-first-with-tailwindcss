import { useState } from "react";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";

import { FigmaLogo } from "./FigmaLogo";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

export const Header = ({ user = {}, nav = [] }) => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  const onOpenMobileNav = () => {
    setMobileNavIsOpen(true);
  };

  const onCloseMobileNav = () => {
    setMobileNavIsOpen(false);
  };
  return (
    <header>
      <div className="flex h-32 items-center justify-between px-8">
        <h1>
          <a href="/">
            <FigmaLogo className="h-12 lg:h-14" />
          </a>
        </h1>
        <div className="flex items-center">
          <Nav items={nav} />
          <a
            href="/"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-purple-500 p-4 text-sm text-white lg:h-12 lg:w-12"
          >
            {(user.name?.first || "").substr(0, 1).toUpperCase()}
          </a>
          <button className="ml-4 p-2 lg:hidden" onClick={onOpenMobileNav}>
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </div>
      <MobileNav
        isOpen={mobileNavIsOpen}
        onClose={onCloseMobileNav}
        items={nav}
      />
    </header>
  );
};

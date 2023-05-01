import clsx from "clsx";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { useEffect } from "react";
import { MobileNavItem } from "./MobileNavItem";
import { FigmaLogo } from "./FigmaLogo";

export const MobileNav = ({ isOpen = false, onClose, items = [] }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <div
      className={clsx(
        "fixed left-0 top-0 flex h-screen w-screen flex-col bg-white",
        (isOpen && "z-10 block") || "hidden"
      )}
    >
      <div className="flex h-32 items-center justify-between px-8">
        <FigmaLogo className="h-12 lg:h-14" />
        <button className="p-2" onClick={onClose}>
          <XMarkIcon className="h-8 w-8" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul>
          {items.map((item) => (
            <MobileNavItem key={item.id} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

import clsx from "clsx";
import { useState } from "react";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import { MobileNavSub } from "./MobileNavSub";

export const MobileNavItem = ({ title, href, sub = [] }) => {
  const [showSub, setShowSub] = useState(false);

  const hasSub = Boolean(sub.length);

  const onToggleSub = (e) => {
    e.preventDefault();
    setShowSub(!showSub);
  };

  return (
    <li className="px-8 py-2">
      <a
        href={href}
        className="inline-flex items-center text-lg font-medium"
        onClick={(sub && onToggleSub) || null}
      >
        <span
          className={clsx(
            !hasSub &&
              "overflow-hidden after:block after:h-[3px] after:w-full after:translate-y-full after:transform after:bg-black after:opacity-0 after:transition after:duration-300 hover:after:translate-y-0 hover:after:opacity-100"
          )}
        >
          {title}
        </span>
        {hasSub && <ChevronDownIcon className="ml-1 h-4 w-4" />}
      </a>

      {showSub && hasSub && <MobileNavSub items={sub} />}
    </li>
  );
};

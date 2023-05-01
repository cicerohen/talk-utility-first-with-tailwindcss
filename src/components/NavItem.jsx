import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import clsx from "clsx";

import { NavSub } from "./NavSub";
import { NavSubProducts } from "./NavSubProducts";
import { NavSubCommunity } from "./NavSubCommunity";

export const NavItem = ({ title, href, slug, sub = [] }) => {
  const hasSub = Boolean(sub?.length);

  const renderSub = () => {
    if (slug === "products") {
      return <NavSubProducts items={sub} />;
    }

    if (slug === "community") {
      return <NavSubCommunity items={sub} />;
    }

    return <NavSub items={sub} />;
  };

  return (
    <li className="group/nav-item relative flex px-4">
      <a href={href} className=" flex items-center">
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
      {hasSub && (
        <div className="hidden group-hover/nav-item:block">{renderSub()}</div>
      )}
    </li>
  );
};

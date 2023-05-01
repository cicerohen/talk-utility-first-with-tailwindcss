import { NavSubItem } from "./NavSubItem";

export const NavSubProducts = ({ items = [] }) => {
  return (
    <div className="absolute left-1/2 top-full z-10  w-screen max-w-xs -translate-x-1/2 transform px-4 lg:max-w-xl">
      <div className="grid grid-cols-2 divide-x-[3px] divide-black border-[3px] border-black bg-white">
        <ul>
          {items.slice(0, 5).map((item) => (
            <NavSubItem key={item.id} {...item} />
          ))}
        </ul>
        <ul>
          {items.slice(5, items.length).map((item) => (
            <NavSubItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

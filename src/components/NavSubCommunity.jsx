import { NavSubItem } from "./NavSubItem";

export const NavSubCommunity = ({ items = [] }) => {
  return (
    <div className="absolute left-[20%] top-full z-10 w-screen -translate-x-1/2 transform px-4 lg:max-w-3xl">
      <div className="grid grid-cols-[1fr_210px] divide-x-[3px] divide-black border-[3px] border-black bg-white">
        <ul className="grid grid-cols-2 py-2">
          {items.slice(0, 2).map((item) => (
            <NavSubItem key={item.id} {...item} />
          ))}
        </ul>
        <ul>
          {items.slice(3, items.length).map((item) => (
            <NavSubItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

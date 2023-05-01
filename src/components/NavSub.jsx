import { NavSubItem } from "./NavSubItem";

export const NavSub = ({ items = [] }) => {
  return (
    <div className="absolute left-1/2 top-full z-10 w-screen max-w-[180px] -translate-x-1/2 transform">
      <div className="border-[3px] border-black bg-white">
        <ul>
          {items.map((item) => (
            <NavSubItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

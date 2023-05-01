import { NavItem } from "./NavItem";

export const Nav = ({ items = [] }) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex">
        {items.map((item) => {
          return <NavItem key={item.id} {...item} />;
        })}
      </ul>
    </nav>
  );
};

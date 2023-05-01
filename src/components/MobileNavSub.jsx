import { MobileNavSubItem } from "./MobileNavSubItem";
export const MobileNavSub = ({ items = [] }) => {
  return (
    <ul className="mt-2 pl-4">
      {items.map((item) => (
        <MobileNavSubItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

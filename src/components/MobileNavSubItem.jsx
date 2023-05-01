export const MobileNavSubItem = ({ title }) => {
  return (
    <li className="px-4 py-1">
      <a href="#" className="group/sub-item inline-block text-lg font-medium">
        <span className="inline-block overflow-hidden after:block after:h-[3px] after:w-full after:translate-y-full after:transform after:bg-black after:opacity-0 after:transition after:duration-300 group-hover/sub-item:after:translate-y-0 group-hover/sub-item:after:opacity-100">
          {title}
        </span>
      </a>
    </li>
  );
};

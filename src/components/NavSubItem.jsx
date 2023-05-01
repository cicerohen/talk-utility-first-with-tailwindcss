export const NavSubItem = ({ title, description, thumbnail = {} }) => {
  return (
    <li>
      <a href="#" className="group/sub-item block px-4 py-2">
        <span className="inline-block overflow-hidden after:block after:h-[3px] after:w-full after:translate-y-full after:transform after:bg-black after:opacity-0 after:transition after:duration-300 group-hover/sub-item:after:translate-y-0 group-hover/sub-item:after:opacity-100">
          {title}
        </span>
        {description && <p className="text-sm text-gray-500">{description}</p>}
        {thumbnail.src && <img {...thumbnail} className="mt-4 w-full" />}
      </a>
    </li>
  );
};

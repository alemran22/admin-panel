import { NavLink } from "react-router-dom";

const LinkItem = ({ path, title }: { path: string; title: string }) => {
  return (
    <NavLink
      to={path}
      className="py-1 hover:text-[#7F81FE] cursor-pointer text-[#485262] font-normal text-base block"
    >
      {title}
    </NavLink>
  );
};

export default LinkItem;

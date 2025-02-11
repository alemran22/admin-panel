import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-7xl mx-auto flex flex-row gap-10 text-white">
        <NavLink className={"px-3 py-3 bg-slate-600"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"px-3 py-3 bg-slate-600"} to={"/about"}>
          About
        </NavLink>
        <NavLink className={"px-3 py-3 bg-slate-600"} to={"/contact"}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

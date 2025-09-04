import { useState } from "react";
import { NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Lessons", path: "/lessons" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contribute", path: "/contribute" },
  ];

  return (
    <nav className="p-3 w-full">
      <div className="flex flex-row md:px-5 items-center justify-between w-full">
        <h3 className="text-xl font-bold text-slate-50">
          DLSU CCS Starterpack
        </h3>

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `py-2 px-3 rounded-[10px] w-full  ${
                  isActive
                    ? "bg-green-600 text-slate-100"
                    : "text-slate-100 hover:bg-green-950 transition-colors duration-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          {isOpen ? (
            <button
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FiArrowLeft className="size-[32px] text-slate-50" />
            </button>
          ) : (
            <button
              className="flex items-center"
              onClick={() => setIsOpen(true)}
            >
              <FiMenu className="size-[32px] text-slate-50" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`md:hidden absolute top-0 p-5 flex flex-col gap-5 h-full w-[80%] bg-slate-900 ${isOpen ? "left-0" : "-left-full"}`}
      >
        <h3 className="text-xl font-bold text-slate-50">
          DLSU CCS Starterpack
        </h3>
        <div className="flex flex-col">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `p-2 rounded-[10px] w-full  ${
                  isActive
                    ? "bg-green-600 text-slate-100"
                    : "text-slate-100 hover:bg-green-950 transition-colors duration-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

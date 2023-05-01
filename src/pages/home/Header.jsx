import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-blue-100 py-3">
      <nav className="flex justify-between items-center px-4 lg:px-32">
        <h1 className="text-xl lg:text-2xl font-sans font-bold text-red-700">
          Indian Chef
        </h1>
        <ul className="hidden lg:flex space-x-7">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            >
              BLogs
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center justify-between">
          <img
            className="w-16 h-5 lg:w-20 lg:h-10 rounded-full "
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg"
            alt=""
          />
          <button className="me-3 px-3 py-1 lg:px-5 lg:py-3 bg-orange-500">
            LogOut
          </button>
          <Link to="/login">
            <button className="px-3 py-1  lg:px-5 lg:py-3 bg-orange-500">
              Login
            </button>
          </Link>
        </div>
        <p className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <FaTimes className="h-8 w-10 text-blue-500" />
          ) : (
            <FaAlignRight className="h-8 w-10 text-blue-500" />
          )}
        </p>
      </nav>
    </div>
  );
};

export default Header;

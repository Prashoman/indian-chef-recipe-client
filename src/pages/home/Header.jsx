import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-100 py-3">
      <nav className="flex justify-between items-center px-32">
        <h1 className="text-2xl font-sans font-bold text-red-700">
          Indian Chef
        </h1>
        <ul className="flex space-x-7">
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
            className="w-20 h-10 rounded-full "
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg"
            alt=""
          />
          <button className="me-3 px-5 py-3 bg-orange-500">LogOut</button>
          <Link to="/login">
            <button className="px-5 py-3 bg-orange-500">Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

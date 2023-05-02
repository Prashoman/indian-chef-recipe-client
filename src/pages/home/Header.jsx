import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { AuthContextProvider } from "../../provider/AuthProvider";
import { Tooltip } from "@mui/material";

const Header = () => {
  const { user, logOut } = useContext(AuthContextProvider);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    console.log("logOut");
    logOut();
  };
  return (
    <div className="bg-blue-100 py-3">
      <nav className="flex justify-between items-center px-4 lg:px-32 ">
        <h1 className="text-xl lg:text-2xl font-sans font-bold text-orange-500">
          Indian Chef
        </h1>
        <ul
          className={`lg:flex lg:space-x-7 absolute lg:relative ${
            open
              ? "top-16 right-1 text-center z-10 lg:top-0 bg-blue-100 w-40 h-20 lg:w-0 lg:h-0 "
              : "hidden"
          }`}
        >
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
              to="/blogs"
              className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            >
              BLogs
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center justify-between">
          {user ? (
            <>
              {user?.photoURL && (
                <Tooltip title={user.displayName}>
                  <img
                    className="w-10 h-5 lg:w-15 lg:h-10 rounded-full btn"
                    src={user?.photoURL}
                    alt=""
                  />
                </Tooltip>
              )}

              <button
                onClick={handleLogOut}
                className="ms-5 lg:ms-10  px-3 text-white rounded py-1 lg:px-3 lg:py-2 bg-orange-500"
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="px-3 py-1 text-white rounded lg:px-3 lg:py-2 bg-orange-500">
                  Login
                </button>
              </Link>
            </>
          )}
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

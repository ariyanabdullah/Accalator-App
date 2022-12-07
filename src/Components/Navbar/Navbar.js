import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <a
          href="/"
          className="font-semibold    lg:text-white text-[#206ECF] text-sm"
        >
          {" "}
          Community
        </a>
      </li>

      <li>
        <a
          href="/"
          className="font-semibold  lg:text-white text-[#206ECF] text-sm"
        >
          {" "}
          Modules
        </a>
      </li>

      <li>
        <a
          href="/"
          className="font-semibold  lg:text-white text-[#206ECF] text-sm"
        >
          {" "}
          Company
        </a>
      </li>

      <li>
        <a
          href="/"
          className="font-semibold  lg:text-white text-[#206ECF] text-sm"
        >
          {" "}
          Pricing
        </a>
      </li>
    </React.Fragment>
  );

  return (
    <div style={{ backgroundColor: "#2572d2" }}>
      <div className="navbar container mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}

              <li>
                <a
                  href="/"
                  className="btn   bg-white border-[#206ECF] text-[#206ECF] hover:bg-[#206ECF] hover:border hover:border-[#9eacbd] hover:text-white"
                >
                  Request a Demo
                </a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-[48px] h-[48px] " src={logo} alt="" />{" "}
            <span className="font-bold text-base text-white">
              AcceleratorApp
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="/"
            className="btn btn-outline font-semibold text-white text-sm hover:bg-white hover:text-black  border border-white
           mr-6"
          >
            Sign In
          </a>
          <a
            href="/"
            className="btn hidden lg:flex md:flex  bg-white border-white text-[#206ECF] hover:bg-[#206ECF] hover:border hover:border-[#9eacbd] hover:text-white"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

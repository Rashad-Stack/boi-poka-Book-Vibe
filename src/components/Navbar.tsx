import { FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
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
                  </div>
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay mb-4 ml-auto"
                  >
                    <FiX />
                  </label>

                  {/* Sidebar content here */}
                  {navItems.map((nav) => (
                    <li key={nav.title}>
                      <NavLink
                        to={nav.url}
                        className="text-base hover:bg-transparent"
                      >
                        {nav.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Link to="/" className="text-xl font-bold">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((nav) => (
              <li key={nav.title}>
                <NavLink
                  to={nav.url}
                  className="text-base hover:bg-transparent"
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <Link
            to="/"
            className="bg-brand-green hover:bg-brand-green/80 btn px-6 text-white"
          >
            Sign In
          </Link>
          <Link
            to="/"
            className="bg-brand-blue hover:bg-brand-blue/80 btn px-6 text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

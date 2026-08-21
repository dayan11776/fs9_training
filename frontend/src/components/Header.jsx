// src/components/Header.jsx
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo / Title */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-gray-950"
        >
          RivanShop
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-950"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-950"
          >
            Product
          </Link>

          <Link
            to="/team"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-950"
          >
            Team
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {isAuthenticated ? (
            <>
              <Link to="/cart" className="text-xl">
                <FaShoppingCart />
              </Link>
              <Link to="/profile" className="text-xl">
                <FaUser />
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-gray-950"
              >
                Sign in
              </Link>

              <Link
                to="/register"
                className="rounded-full bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-gray-700 md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

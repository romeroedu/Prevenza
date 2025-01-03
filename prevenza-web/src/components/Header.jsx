import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import authUser from "./AuthContext.jsx";

const Header = () => {
  const { user, firstName, lastName } = authUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-sky-900 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo and Branding */}
        <div className="flex items-center space-x-6">
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
          >
            <RxHamburgerMenu className="h-8 w-8" />
          </button>
          <img
            alt="Prevenza Logo"
            className="h-12 w-12 rounded-full object-cover"
            src="./Prevenza_Logo.png"
          />
          <a href="/" className="text-white text-4xl font-extrabold tracking-wide">
            Prevenza
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          <a
            href="/home"
            className="text-white text-2xl font-semibold hover:text-gray-200"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white text-2xl font-semibold hover:text-gray-200 transition-all duration-200"
          >
            About
          </a>
          <a
            href="/support"
            className="text-white text-2xl font-semibold hover:text-gray-200 transition-all duration-200"
          >
            Support/FAQs
          </a>
        </div>

        {/* User Authentication and Profile */}
        <div className="hidden lg:flex items-center space-x-6">
          {user ? (
            <>
              <span className="text-white text-2xl font-semibold">
                {firstName} {lastName}
              </span>
              <a
                href="/profile"
                className="block w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200"
              >
                <img
                  src="./pfp.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </a>
            </>
          ) : (
            <a
              href="/login"
              className="px-6 py-3 bg-white text-sky-900 text-2xl font-semibold rounded-full hover:bg-gray-200 transition-all duration-200"
            >
              Login / Signup
            </a>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-sky-900 shadow-lg mt-2 mb-4">
          <div className="flex flex-col items-center space-y-6">
            <a
              href="/home"
              className="text-white text-2xl font-semibold hover:text-gray-200"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white text-2xl font-semibold hover:text-gray-200"
            >
              About
            </a>
            <a
              href="/support"
              className="text-white text-2xl font-semibold hover:text-gray-200"
            >
              Support/FAQs
            </a>
            {user && (
              <div className="flex items-center space-x-4">
                <span className="text-white text-2xl font-semibold">
                  {firstName} {lastName}
                </span>
                <a
                  href="/profile"
                  className="block w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200"
                >
                  <img
                    src="./pfp.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            )}
            {!user && (
              <a
                href="/login"
                className="px-6 py-3 bg-white text-sky-900 text-2xl font-semibold rounded-full hover:bg-gray-200 transition-all duration-200"
              >
                Login / Signup
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
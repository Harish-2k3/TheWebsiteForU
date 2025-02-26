import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  // Detect Scroll Direction and Background Change
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScroll > 50); 
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`fixed w-full z-[999] top-0 left-0 right-0 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-[#6b47edcc]" : "bg-transparent"} `}
    >
      <div className="flex justify-between items-center max-w-[90%] mx-auto py-6">
        <div className="cursor-pointer">
          <img src="" alt="Logo" />
        </div>

        <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars text-black"></i>
        </div>

        <nav
          ref={navRef}
          className={`lg:flex items-center absolute gap-10 flex-col lg:flex-row lg:static top-[70px] w-full lg:w-auto right-0 bg-black lg:bg-transparent py-5 lg:py-0 transition-all duration-300 shadow-lg lg:shadow-none z-50 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {/* Dynamic text color change based on path */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`font-medium hover:text-[#C6F806] flex items-center gap-2 ${
              location.pathname !== "/" ? "text-black" : "text-white"
            }`}
          >
            Home
          </Link>
          {/* <Link
            to="/page"
            onClick={() => setIsOpen(false)}
            className={`font-medium hover:text-[#C6F806] flex items-center gap-2 ${
              location.pathname !== "/" ? "text-black" : "text-white"
            }`}
          >
            Page
          </Link> */}

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className={`font-medium hover:text-[#C6F806] flex items-center gap-2 ${
                location.pathname !== "/" ? "text-black" : "text-white"
              }`}
            >
              Services <i className="fa-solid fa-chevron-down text-[10px]"></i>
            </button>
            {dropdownOpen === "services" && (
              <div className="absolute left-0 mt-2 w-55 bg-white text-black z-[10] rounded-md shadow-lg">
                <Link to="/" className="block px-4 py-2 hover:rounded-t-lg hover:bg-[#C6F806]">Web Development</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-[#C6F806]">Digital Marketing</Link>
                <Link to="/" className="block px-4 py-2 hover:rounded-b-lg hover:bg-[#C6F806]">Mobile App Development</Link>
              </div>
            )}
          </div>

          {/* Other Dropdowns (Projects, Blog) */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("project")}
              className={`font-medium hover:text-[#C6F806] flex items-center gap-2 ${
                location.pathname !== "/" ? "text-black" : "text-white"
              }`}
            >
              Project <i className="fa-solid fa-chevron-down text-[10px]"></i>
            </button>
            {dropdownOpen === "project" && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black z-10 rounded-md shadow-lg">
                <Link to="/" className="block px-4 py-2 hover:bg-[#C6F806]">Project 1</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-[#C6F806]">Project 2</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-[#C6F806]">Project 3</Link>
              </div>
            )}
          </div>

          {/* Contact Link */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`font-medium hover:text-[#C6F806] flex items-center gap-2 ${
              location.pathname !== "/" ? "text-black" : "text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="lg:flex hidden items-center">
          <i className={`fa-solid fa-magnifying-glass cursor-pointer pr-5 ${
              location.pathname !== "/" ? "text-black" : "text-white"
            }`}></i>
          <button className="bg-[#C6F806] text-black font-medium px-4 py-2 rounded-full hover:bg-black hover:text-white">
            GET STARTED
          </button>
          <i className="fa-solid fa-right-long bg-[#C6F806] p-3 rounded-full cursor-pointer hover:text-white hover:bg-black"></i>
        </div>
      </div>
    </div>
  );
}

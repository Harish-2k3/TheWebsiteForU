import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll <= lastScrollY);
      setIsScrolled(currentScroll > 50);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && !event.target.closest('.menu-btn')) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };



  return (
    <div
      className={`fixed w-full z-[999] top-0 py-3 left-0 right-0 transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled || !isHomePage ? "bg-[#11778B]" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center px-3 lg:px-10 max-w-[95rem] 3xl:px-0 mx-auto ">
        <div className="cursor-pointer">
          <Link to="/">
            <img src="lllArtboard 7.png" alt="Logo" className="w-60 md:w-80" />
          </Link>
        </div>

        <div className="lg:hidden menu-btn flex flex-row items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars text-white text-2xl cursor-pointer"></i>
          <Link to="tel:+1234567890" className="">
          <div className="relative group w-10 h-10 z-10">
              {/* Default Icon */}
              <i className="fa-solid fa-phone text-[17px] text-black bg-[#C6F806] p-3 rounded-full cursor-pointer transition duration-300 group-hover:opacity-0 absolute inset-0 flex items-center justify-center"></i>
              {/* Hover Icon (appears on hover) */}
              <i className="fa-solid fa-phone-volume text-black text-[17px] bg-[#C6F806] p-3 rounded-full cursor-pointer transition duration-300 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center"></i>
            </div>
            </Link>
        </div>

        <nav
          ref={navRef}
          className={`lg:flex items-center absolute gap-5 md:gap-8 flex-col lg:flex-row lg:static top-[70px] md:top-[90px] w-full lg:w-auto right-0 bg-black lg:bg-transparent py-5 lg:py-0 transition-all duration-300 shadow-lg lg:shadow-none z-50 lg:text-[18px] ${isOpen ? "flex" : "hidden"
            }`}
        >
          <Link
            to="/"
            onClick={() => { setIsOpen(false); scrollToSection("home") }}
            className={`font-medium hover:text-[#C6F806] flex items-center gap-2 ${location.pathname !== "/" ? "lg:text-white text-white" : "text-white"
              }`}
          >
            Home
          </Link>

          <Link
            to="/"
            onClick={() => { setIsOpen(false); scrollToSection("about") }}
            className={`font-medium hover:text-[#C6F806] flex items-center gap-2 ${location.pathname !== "/" ? "lg:text-white text-white" : "text-white"
              }`}
          >
            About Us
          </Link>

          <Link
            to="/"
            onClick={() => { setIsOpen(false); scrollToSection("services") }}
            className={`font-medium hover:text-[#C6F806] flex items-center gap-2 ${location.pathname !== "/" ? "lg:text-white text-white" : "text-white"
              }`}
          >
            Our Services
          </Link>

          {/* <Link
            to="/"
            onClick={() => { setIsOpen(false); scrollToSection("project") }}
            className={`font-medium hover:text-[#C6F806] flex items-center gap-2 ${location.pathname !== "/" ? "lg:text-white text-white" : "text-white"
              }`}
          >
            Our Projects
          </Link> */}

          <Link
            to="/"
            onClick={() => { setIsOpen(false); scrollToSection("contact") }}
            className={`font-medium hover:text-[#C6F806] flex items-center gap-2 ${location.pathname !== "/" ? "lg:text-white text-white" : "text-white"
              }`}
          >
            Contact Us
          </Link>

          {/* <Link to="tel:+1234567890" className="lg:hidden bg-white px-3 py-2 rounded-xl">
            <div className="flex items-center group gap-2">
              <div className="relative w-6 h-6 flex items-center text-black justify-center group-hover:text-[#11778B]">
                <i className="fa-solid fa-phone cursor-pointer transition duration-100 group-hover:opacity-0 "></i>
                <i className="fa-solid fa-phone-volume cursor-pointer transition duration-100 opacity-0 group-hover:opacity-100 absolute "></i>
              </div>
              <button className="text-black cursor-pointer font-bold group-hover:text-[#11778B]">
                Get help!
              </button>
            </div>
          </Link> */}
        </nav>

        <Link to="tel:+1234567890" className="hidden cursor-pointer lg:flex">
          <div className="flex items-center group relative ">

            {/* Phone Number Button */}
            <button className="bg-[#C6F806] cursor-pointer text-black font-medium px-4 py-2 rounded-full transition duration-300 hidden lg:block">
              +1234567890
            </button>
            {/* Phone Icon with Hover Effect */}
            <div className="relative w-10 h-10">
              {/* Default Icon */}
              <i className="fa-solid fa-phone text-[17px] text-black bg-[#C6F806] p-3 rounded-full  transition duration-300 group-hover:opacity-0 absolute inset-0 flex items-center justify-center"></i>
              {/* Hover Icon (appears on hover) */}
              <i className="fa-solid fa-phone-volume text-black text-[17px] bg-[#C6F806] p-3 rounded-full  transition duration-300 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center"></i>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}

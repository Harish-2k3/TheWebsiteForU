import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // ✅ Added active section state
  const navRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navigate = useNavigate();

  // ✅ Scroll & Active Section Detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll <= lastScrollY);
      setIsScrolled(currentScroll > 50);
      setLastScrollY(currentScroll);

      // ✅ Detect active section
      const sections = ["home", "about", "services", "contact"];
      let active = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop - 100 <= currentScroll &&
          element.offsetTop + element.clientHeight - 100 > currentScroll
        ) {
          active = section;
        }
      });
      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Close Menu on Outside Click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && !event.target.closest('.menu-btn')) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Scroll to Section with Offset Fix
  const scrollToSection = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const offset = section.offsetTop - 80; // ✅ Offset to account for header height
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
      setIsOpen(false);
    }, 150); // ✅ Delay to ensure section load
  };

  return (
    <div
      className={`fixed w-full z-[999] top-0 py-3 left-0 right-0 transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled || !isHomePage ? "bg-[#11778B]" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center lg:px-10 px-3 md:px-5 2xl:px-0 lg:max-w-[95rem] 3xl:px-0 mx-auto ">
        <div className="cursor-pointer">
          <Link to="/">
            <img src="Header/lllArtboard 7.png" alt="Logo" className="w-60 md:w-80" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden menu-btn flex flex-row items-center gap-2">
          <i
            onClick={() => setIsOpen(!isOpen)}
            className="fa-solid fa-bars text-white text-2xl md:text-4xl cursor-pointer"
          ></i>
          <Link to="tel:+1234567890" className="">
            <div className="relative group w-10 md:w-15 md:h-15 text-center items-center h-10 z-10">
              <i className="fa-solid fa-phone text-[17px] md:text-2xl text-black bg-[#C6F806] p-3 md:p-4 rounded-full cursor-pointer transition duration-300 group-hover:opacity-0 absolute inset-0 flex items-center justify-center"></i>
              <i className="fa-solid fa-phone-volume text-black text-[17px] md:text-2xl bg-[#C6F806] p-3 md:p-4 rounded-full cursor-pointer transition duration-300 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center"></i>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav
          ref={navRef}
          className={`lg:flex items-center absolute gap-5 md:gap-8 flex-col lg:flex-row lg:static top-[70px] md:top-[90px] w-full lg:w-auto left-0 bg-black lg:bg-transparent py-5 lg:py-0 transition-all duration-300 shadow-lg lg:shadow-none z-50 lg:text-[18px] ${isOpen ? "flex" : "hidden"
            }`}
        >
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              scrollToSection("home");
            }}
            className={`font-medium flex items-center gap-2 ${activeSection === "home" ? "text-[#C6F806]" : "text-white"
              } hover:text-[#C6F806]`}
          >
            Home
          </Link>

          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              scrollToSection("about");
            }}
            className={`font-medium flex items-center gap-2 ${activeSection === "about" ? "text-[#C6F806]" : "text-white"
              } hover:text-[#C6F806]`}
          >
            About Us
          </Link>

          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              scrollToSection("services");
            }}
            className={`font-medium flex items-center gap-2 ${activeSection === "services" ? "text-[#C6F806]" : "text-white"
              } hover:text-[#C6F806]`}
          >
            Our Services
          </Link>

          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/", { state: { scrollToContact: true } }); // ✅ Pass state to scroll to contact
            }}
            className={`font-medium flex items-center gap-2 ${activeSection === "contact" ? "text-[#C6F806]" : "text-white"
              } hover:text-[#C6F806]`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Desktop Phone Button */}
        <Link to="tel:+1234567890" className="hidden cursor-pointer lg:flex">
          <div className="flex items-center group relative ">
            <button className="bg-[#C6F806] cursor-pointer text-black font-medium px-4 py-2 rounded-full transition duration-300 hidden lg:block">
              +1234567890
            </button>
            <div className="relative w-10 h-10">
              <i className="fa-solid fa-phone text-[17px] text-black bg-[#C6F806] p-3 rounded-full transition duration-300 group-hover:opacity-0 absolute inset-0 flex items-center justify-center"></i>
              <i className="fa-solid fa-phone-volume text-black text-[17px] bg-[#C6F806] p-3 rounded-full transition duration-300 opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

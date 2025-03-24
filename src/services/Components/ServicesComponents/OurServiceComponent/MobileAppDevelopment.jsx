import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { services } from "../../../Shared/Servises.js";

export default function MobileAppDevelopment() {
  const [selectedService, setSelectedService] = useState("Mobile App Development");
  const [expandedSections, setExpandedSections] = useState({});
  const containerRef = useRef(null);
  const navigate = useNavigate(); // ✅ For navigation

  // ✅ Handle Scroll to Services Section after navigating to Home
  const handleScroll = () => {
    navigate("/", { state: { scrollToServices: true } }); // ✅ Send state to home
  };

  const toggleExpand = (section) => {
    setExpandedSections((prev) => ({
      [section]: !prev[section], // Toggle the selected section
    }));
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setExpandedSections({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selected = services.find((service) => service.name === selectedService);

  return (
    <>
      <div className="relative mx-auto">
        <div className="text-black flex flex-col justify-center items-center mt-20 py-16 gap-5 rounded-2xl bg-[#f6f3fe] text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Our Services</h1>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm md:text-base font-medium hover:text-[#11778B]">
              Home
            </Link>
            <span>
              <i className="fa-solid fa-greater-than text-xs"></i>
            </span>
            <Link
              to="/"
              onClick={(e) => {
                console.log("Navigating to service");
                e.preventDefault();
                handleScroll(); // ✅ Correct function to navigate and pass state
              }}
              className="text-sm md:text-base font-medium hover:text-[#11778B]"
            >
              Our Services
            </Link>
            <span>
              <i className="fa-solid fa-greater-than text-xs"></i>
            </span>
            <p className="text-sm md:text-base">Mobile App Development</p>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="max-w-[1344px] mx-auto rounded-lg p-8 mt-10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 md:border-r md:p-6 relative">
          <div className="sticky top-20 z-10 flex flex-col gap-8">
            {/* Our Services Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Services</h2>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <ul className="divide-y divide-gray-300">
                  {[
                    { name: "Digital Marketing", icon: "fa-chart-line", link: "/digital-marketing" },
                    { name: "Mobile App Development", icon: "fa-mobile-alt", link: "/mobile-app-development" },
                    { name: "Web Development", icon: "fa-laptop-code", link: "/web-development" }
                  ].map((service) => (
                    <li
                      key={service.name}
                      className={`p-4 flex items-center gap-3 cursor-pointer ${selectedService === service.name ? "bg-[#11778B] text-white" : "bg-white text-gray-700"
                        } hover:bg-[#11778B] hover:text-white transition`}
                      onClick={() => setSelectedService(service.name)}
                    >
                      <i className={`fa-solid ${service.icon} text-lg`}></i>
                      <Link to={service.link} className="text-lg font-medium block">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Info</h2>
              <p className="text-lg md:text-xl font-medium mb-4 leading-relaxed tracking-wide bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0E7490] bg-clip-text text-transparent">
                Get in touch with us for project consultations and inquiries.
              </p>


              {/* Button Section */}
              <div className="flex lg:items-start items-center w-auto pb-7 lg:pb-0">
                <div className='group'>
                  <button to="/"
                    onClick={(e) => {
                      e.preventDefault(); // ✅ Prevent default link behavior
                      navigate("/", { state: { scrollToContact: true } }); // ✅ Correctly pass state
                    }} className="bg-[#11778B] text-white cursor-pointer z-10 font-bold px-4 py-3 rounded-full transition duration-300 group ">
                    Contact Us
                  </button>
                  <i className="fa-solid fa-right-long z-10 text-white -rotate-45 easy-in-out group-hover:rotate-0 bg-[#11778B] p-4 rounded-full cursor-pointer transition duration-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 pt-10 md:pt-0 md:p-6">
          {selected ? (
            <>
              <img src={selected.img} alt={selectedService} className="mx-auto mb-4 rounded-lg shadow-md" />
              <h2 className="text-2xl font-bold text-[#11778B]">{selectedService}</h2>
              <p className="mt-4 text-xl">{selected.description}</p>
              <div className="mt-4 text-xl" dangerouslySetInnerHTML={{ __html: selected.details }}></div>

              {selected.sections.map((section, index) => (
                <div key={index} className="mt-6 border-t pt-4">
                  <button
                    className="flex cursor-pointer justify-between w-full text-left text-2xl font-semibold hover:text-[#11778B] transition"
                    onClick={() => toggleExpand(section.title)}
                  >
                    {section.title}
                    <i
                      className={`fa-solid fa-chevron-down transition-transform duration-300 ${expandedSections[section.title] ? "rotate-180" : ""
                        }`}
                    ></i>
                  </button>
                  {expandedSections[section.title] && (
                    <div className="mt-2 text-xl" dangerouslySetInnerHTML={{ __html: section.content }}></div>
                  )}
                </div>
              ))}
            </>
          ) : (
            <p className="text-lg">Service details not available.</p>
          )}
        </div>
      </div>
    </>
  );
}
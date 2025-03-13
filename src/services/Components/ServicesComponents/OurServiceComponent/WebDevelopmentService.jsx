import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { services } from "../../../Shared/Servises.js";

export default function WebDevelopmentService() {
  const [selectedService, setSelectedService] = useState("Web Development");
  const [expandedSections, setExpandedSections] = useState({});
  const containerRef = useRef(null);

  // Handle expanding only one section at a time
  const toggleExpand = (section) => {
    setExpandedSections((prev) => {
      const newState = {};
      newState[section] = !prev[section]; // Toggle clicked section
      return newState;
    });
  };

  // Close all expanded sections when clicking outside
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
      {/* Header Card */}
      <div className="relative mx-auto">
        <div className="text-black flex flex-col justify-center items-center mt-20 py-16 md:py-30 gap-5 rounded-2xl bg-[#f6f3fe] text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Our Services</h1>
          <div className="flex items-center border-2 border-[#11778B] rounded-full px-5 py-2 gap-3">
            <Link to="/" className="text-sm md:text-base font-medium hover:text-[#11778B]">
              Home
            </Link>
            <span>
              <i className="fa-solid fa-greater-than text-xs"></i>
            </span>
            <p className="text-sm md:text-base">Services</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div ref={containerRef} className="max-w-[1344px] mx-auto rounded-lg p-8 mt-10 flex flex-col md:flex-row">
        {/* Left Sidebar - Services List */}
        <div className="w-full md:w-1/3 border-r p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Services</h2>
          <ul className="space-y-3">
            {services.map((service) => (
              <li
                key={service.name}
                onClick={() => {
                  if (service.name === "Web Development") {
                    setSelectedService(service.name);
                  }
                }}
                className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition ${
                  selectedService === service.name
                    ? "bg-[#11778B] text-white"
                    : service.name !== "Web Development"
                    ? "bg-gray-300 cursor-not-allowed opacity-50"
                    : "bg-gray-100 hover:bg-purple-100"
                }`}
              >
                <i
                  className={`fa-solid ${service.icon} text-xl ${
                    selectedService === service.name ? "text-white" : "text-[#11778B]"
                  }`}
                ></i>
                <span className="font-semibold">{service.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content - Service Details */}
        <div className="w-full md:w-2/3 p-6">
          <img src={selected.img} alt={selectedService} className="mx-auto mb-4 rounded-lg shadow-md" />
          <h2 className="text-3xl font-bold text-[#11778B]">{selectedService}</h2>
          <p className="mt-4  text-lg">{selected.description}</p>
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: selected.details }}></div>

          {/* Expandable Sections */}
          {selected.sections.map((section, index) => (
            <div key={index} className="mt-6 border-t pt-4">
              <button
                className="flex justify-between w-full text-left text-xl font-semibold text-gray-800 hover:text-[#11778B] transition"
                onClick={() => toggleExpand(section.title)}
              >
                {section.title}
                <i
                  className={`fa-solid fa-chevron-down transition-transform duration-300 ${
                    expandedSections[section.title] ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {expandedSections[section.title] && <div className="mt-2" dangerouslySetInnerHTML={{ __html: section.content }}></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="">
      <footer className="bg-[#11778B] text-white py-6 border-b-[1px] border-[#0D5C6B] ">
            <div className="max-w-[1344px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Services Section */}
                <div>
                    <h3 className="text-2xl font-semibold mb-3">Our Services</h3>
                    <ul className="space-y-2 text-lg">
                        <li>Web Development</li>
                        <li>Mobile App Development</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-semibold mb-3">Need Help?</h3>
                    <a href="/contact" className="bg-[#1B263B] font-bold text-white px-6 py-2 rounded-lg hover:bg-[#C6F806] hover:text-black transition">
                        Contact Us
                    </a>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-lg">
                        <li><a href="/" className="hover:text-[#C6F806] transition">Home</a></li>
                        <li><a href="/" className="hover:text-[#C6F806] transition">About Us</a></li>
                        <li><a href="/" className="hover:text-[#C6F806] transition">Projects</a></li>
                    </ul>
                </div>
            </div>
        </footer>
      </div>
    </>
  );
}

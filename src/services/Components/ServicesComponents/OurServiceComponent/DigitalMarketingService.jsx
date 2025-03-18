import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { services } from "../../../Shared/Servises.js";

export default function DigitalMarketingService() {
  const [selectedService, setSelectedService] = useState("Digital Marketing");
  const [expandedSections, setExpandedSections] = useState({});
  const containerRef = useRef(null);

  // Handle expanding only one section at a time
  const toggleExpand = (section) => {
    setExpandedSections((prev) => ({
      [section]: !prev[section],
    }));
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
      {/* Header Section */}
      <div className="relative mx-auto">
        <div className="text-black flex flex-col justify-center items-center mt-20 py-16 gap-5 rounded-2xl bg-[#f6f3fe] text-center">
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
        <div className="w-full md:w-1/3 border-r md:p-6">
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

        {/* Right Content - Service Details */}
        <div className="w-full md:w-2/3 pt-10 md:pt-0 md:p-6">
          {selected ? (
            <>
              <img src={selected.img} alt={selectedService} className="mx-auto mb-4 rounded-lg shadow-md" />
              <h2 className="text-3xl font-bold text-[#11778B]">{selectedService}</h2>
              <p className="mt-4 text-lg">{selected.description}</p>
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
                      className={`fa-solid fa-chevron-down transition-transform duration-300 ${expandedSections[section.title] ? "rotate-180" : ""
                        }`}
                    ></i>
                  </button>
                  {expandedSections[section.title] && (
                    <div className="mt-2" dangerouslySetInnerHTML={{ __html: section.content }}></div>
                  )}
                </div>
              ))}
            </>
          ) : (
            <p className="text-lg text-gray-700">Service details not available.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#11778B] text-white py-8 border-t-[1px] border-[#0D5C6B]">
        <div className="max-w-[1344px] xl:max-w-[1344px] mx-auto px-6 grid grid-cols-2 gap-8 items-start lg:items-center">
          {/* Services Section - Left Side */}
          <div className="text-left flex flex-col items-start xl:items-center">
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-lg">
              <li className="hover:text-[#C6F806] cursor-pointer transition">
                Web Development
              </li>
              <li className="hover:text-[#C6F806] cursor-pointer transition">
                Mobile App Development
              </li>
              <li className="hover:text-[#C6F806] cursor-pointer transition">
                Digital Marketing
              </li>
            </ul>
          </div>

          {/* Contact Section - Right Side */}
          <div className="text-right flex flex-col items-end  xl:items-center">
            <h3 className="text-2xl font-semibold mb-4">Need Help?</h3>
            <a
              href="/contact"
              className="bg-[#1B263B] font-bold text-white px-6 py-2 rounded-lg hover:bg-[#C6F806] hover:text-black transition shadow-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>

    </>
  );
}

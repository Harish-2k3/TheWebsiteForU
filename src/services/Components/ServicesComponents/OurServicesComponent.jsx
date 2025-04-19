import React from "react";
import { Link } from "react-router-dom";

export default function OurServicesComponent() {
  const services = [
    {
      img: "Service/project-1-DGImChiM.jpg",
      title: "Digital Marketing",
      subtitle: "Company Advertisement",
      path: "digital-marketing",
    },

    {
      img: "Service/project-4-DyEGdaFN.jpg",
      title: "Mobile App Development",
      subtitle: "E-commerce Platform",
      path: "mobile-app-development",
    },

    {
      img: "Service/project-2-COTidCQZ.jpg",
      title: "Web Development",
      subtitle: "Marketing Website",
      path: "web-development",
    },
  ];

  return (
    <div
      className="max-w-[1344px] mx-auto pt-20 px-5 md:px-10 2xl:px-0"
      id="services"
    >
      <h1 className="font-medium text-[20px]">OUR SERVICES</h1>
      <p className="text-3xl md:text-4xl xl:text-5xl font-medium">
        Our Social Media Services
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 md:pt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group holographic-card-1 overflow-hidden rounded-lg shadow-lg"
          >
            {/* Service Image with Holographic Hover */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-auto transition-all duration-300 group-hover:scale-105"
            />
            
            {/* Holographic Effect */}
            <div className="holographic-glow"></div>

            {/* Absolute Layer with Text and Button */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-gradient-to-t from-black/80 to-black/40 p-5">
              <p className="text-white text-2xl text-center font-bold">{service.title}</p>
              <span className="text-white text-lg">{service.subtitle}</span>

              {/* Button */}
              <div className="flex">
                <Link
                  to={service.path}
                  className="mt-3 flex items-center gap-2 bg-[#11778B] group hover:bg-[#11778be0] text-white font-medium px-4 py-2 rounded-full shadow-lg"
                >
                  Read More{" "}
                  <i className="fa-solid -rotate-45 fa-arrow-right group-hover:rotate-0 ease-in-out transition duration-200"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

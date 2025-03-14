import React from "react";
import { Link } from "react-router-dom";

export default function OurServicesComponent() {
  const services = [
    {
      img: "project-1-DGImChiM.jpg",
      title: "Digital Marketing",
      subtitle: "Company Advertisement",
      path: "/digital-marketing",
    },
    
    {
      img: "project-4-DyEGdaFN.jpg",
      title: "Mobile App Development",
      subtitle: "E-commerce Platform",
      path: "/mobile-app-development",
    },

    {
      img: "project-2-COTidCQZ.jpg",
      title: "Web Development",
      subtitle: "Marketing Website",
      path: "/web-development",
    }
  ];

  return (
    <div className="max-w-[1344px] px-5 md:px-10 2xl:px-0 mx-auto pt-20" id="services">
      <h1 className="font-medium text-[20px] pb-3">OUR SERVICES</h1>
      <p className="text-3xl md:text-5xl font-medium">Our social media Services</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {services.map((service, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-y-0 left-0 w-0 bg-black/50 transition-all duration-700 group-hover:w-1/2"></div>
              <div className="absolute inset-y-0 right-0 w-0 bg-black/50 transition-all duration-700 group-hover:w-1/2"></div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <p className="text-white text-2xl font-bold">{service.title}</p>
              <span className="text-white text-lg">{service.subtitle}</span>
              <Link
                to={service.path} // Navigates to correct service page
                className="mt-3 flex items-center cursor-pointer gap-2 bg-[#11778B] text-white font-medium px-4 py-2 rounded-full shadow-lg hover:bg-[#b8e005] hover:text-black transition duration-300"
              >
                See More <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

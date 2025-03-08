import React from "react";

export default function OurServicesComponent() {
  return (
    <div className="max-w-[1344px] mx-auto py-20">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <div className="flex flex-col gap-3 md:text-left">
          <h1 className="font-medium text-[20px]">OUR SERVICES</h1>
          <p className="font-bold text-3xl md:text-5xl">
            Explore what services <br /> we’re offering
          </p>
        </div>
        <span className="text-[20px] font-medium mt-5 lg:mt-0 max-w-lg text-center lg:text-left hidden lg:block">
          Empower your brand with cutting-edge digital solutions tailored to your business needs.
        </span>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div key={index} className="relative group rounded-xl shadow-lg cursor-pointer ">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-xl">
              {/* Image with Zoom-in Effect */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-70 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />

              {/* Black Glass Overlay Expanding from Center */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-y-0 left-1/2 w-0 bg-black/50 transition-all duration-700 group-hover:w-full group-hover:left-0"></div>
              </div>
            </div>

            {/* Info Box */}
            <div className="absolute -bottom-10 right-0 w-[90%] h-[4rem] bg-white shadow-lg p-5 flex flex-col transition-all duration-500 group-hover:h-3/5">
              {/* Icon */}
              <div className="absolute -top-8 left-3 flex items-center justify-center w-14 h-14 rounded-full bg-[#0a1f44d8] text-white text-2xl">
                <i className={service.icon}></i>
              </div>

              {/* Title & Description */}
              <div className="overflow-hidden">
                <div className="flex gap-2 items-center group-hover:pt-2 justify-center group-hover:justify-start">
                  <h2 className="text-lg font-bold">{service.title}</h2>
                  <i className="fa-solid fa-arrow-right text-2xl text-gray-700 transition-transform group-hover:translate-x-2"></i>
                </div>
                <p className="opacity-0 text-justify hidden group-hover:block group-hover:opacity-100 transition-opacity duration-200 mt-3">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

// Service Data
const services = [
  {
    title: "Leader in Digital Marketing",
    description: "We craft data-driven strategies to boost your online presence, drive traffic, and maximize conversions.",
    icon: "fa-solid fa-bullhorn",
    image: "Artboard 3@1.5x.png",
  },
  {
    title: "Expert Web Development",
    description: "We build high-performance, SEO-friendly websites that enhance user experience and drive business growth.",
    icon: "fa-solid fa-code",
    image: "Artboard 1@1.5x.png",
  },
  {
    title: "Mobile App Development",
    description: "We design and develop feature-rich mobile applications for iOS and Android with seamless user experience.",
    icon: "fa-solid fa-mobile-screen",
    image: "Artboard 2@1.5x.png",
  },
];

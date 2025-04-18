import React from 'react';
import { Link } from 'react-router-dom';

export default function WhyServiceUsComponent() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-[1344px] px-5 md:px-10 2xl:px-0 mx-auto pt-20 ">
      {/* Header Section */}
      <h1 className="font-medium text-[20px]">WHY CHOOSE US</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 md:mb-10 text-center md:text-left">
        <p className="text-3xl md:text-4xl xl:text-5xl text-left md:w-3/2 pb-5 md:pb-0">
          Innovative <span className="text-[#11778B] font-bold">Tech Solutions</span> for Your Business
        </p>
        <div className="flex w-full justify-start md:justify-end">
          <Link onClick={() => scrollToSection("contact")}>
          <div className='group text-white'>
          <button className="bg-[#11778B] z-10 cursor-pointer  font-medium px-4 py-2 rounded-full transition duration-300 ">
            Contact Us
          </button>
          <i className="fa-solid fa-right-long z-10 -rotate-45 easy-in-out group-hover:rotate-0 bg-[#11778B] p-3 rounded-full cursor-pointer transition duration-300"></i>
          </div>
          </Link>
        </div>
      </div>
      <hr />

      {/* Why Choose Us Details */}
      <div className="flex flex-col lg:flex-row gap-5 my-5 md:pt-10">
        {/* Left Side Content */}
        <div className="flex flex-col gap-5 lg:gap-30 w-full lg:w-6/12 xl:w-8/12 ">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold pb-3">Custom Web & Mobile Apps</h1>
            <p className=" text-lg md:text-2xl">
              We design and develop high-performance web and mobile applications tailored to your business needs.
            </p>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold pb-3">Result-Driven Digital Marketing</h1>
            <p className=" text-lg md:text-2xl">
              Our digital marketing strategies ensure higher engagement, visibility, and conversions for your brand.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative flex items-center justify-center w-full my-10 md:my-20 lg:my-0 h-[370px] lg:h-[600px] overflow-x-hidden overflow-y-hidden">
          <img 
            src="Service/why-choose-img.png" 
            alt="Why Choose Us" 
            className="object-contain h-[200px] lg:h-[250px]"
          />
          <img 
            src="Service/why-choose-circle.png" 
            alt="Decorative Circle" 
            className="absolute top-1/2 left-1/2 rotate-circle h-[350px] lg:h-[450px] xl:h-[470px]"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col gap-5 lg:gap-30 w-full lg:w-6/12 xl:w-8/12">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold pb-3">End-to-End Development</h1>
            <p className=" text-lg md:text-2xl">
              From concept to deployment, we handle every aspect of the development process with precision.
            </p>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold pb-3">24/7 Support & Maintenance</h1>
            <p className=" text-lg md:text-2xl">
              We provide continuous support and maintenance to keep your applications running smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

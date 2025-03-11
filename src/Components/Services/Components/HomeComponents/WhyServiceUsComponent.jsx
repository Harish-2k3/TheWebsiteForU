import React from 'react';
import { Link } from 'react-router-dom';

export default function WhyServiceUsComponent() {
  return (
    <div className="max-w-[1344px] mx-auto pb-20">
      {/* Header Section */}
      <h1 className="font-medium text-[20px] pb-3 ">WHY CHOOSE US</h1>
      <div className="flex flex-col md:flex-row justify-between items-center pb-10 text-center md:text-left">
        <p className="text-5xl text-left w-full">
          Innovative <span className="text-[#11778B] font-bold">Tech Solutions</span> for Your Business
        </p>
        <div className="flex w-full mt-4 md:mt-0 justify-start md:justify-end">
          <Link to="/contact">
          <div className='group text-white'>
          <button className="bg-[#11778B] z-10 cursor-pointer  font-medium px-4 py-2 rounded-full transition duration-300 ">
            Contact Us
          </button>
          <i className="fa-solid fa-right-long z-10 -rotate-45 easy-in-out  group-hover:rotate-0 bg-[#11778B] p-3 rounded-full cursor-pointer transition duration-300"></i>
          </div>
          </Link>
        </div>
      </div>
      <hr />

      {/* Why Choose Us Details */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:py-20 2xl:py-40 py-10">
        {/* Left Side Content */}
        <div className="flex flex-col gap-5 lg:gap-30 text-left w-full lg:w-3/12">
          <div>
            <h1 className="text-2xl font-bold pb-3">Custom Web & Mobile Apps</h1>
            <p className=" text-lg">
              We design and develop high-performance web and mobile applications tailored to your business needs.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold pb-3">Result-Driven Digital Marketing</h1>
            <p className=" text-lg">
              Our digital marketing strategies ensure higher engagement, visibility, and conversions for your brand.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative flex items-center justify-center w-full lg:w-6/12">
          <img 
            src="why-choose-img.png" 
            alt="Why Choose Us" 
            className="object-contain w-4/10 lg:w-9/12 xl:w-7/12"
          />
          <img 
            src="why-choose-circle.png" 
            alt="Decorative Circle" 
            className="absolute top-14/12 left-10/12 md:top-18/15 md:left-8/10 xl:top-[500px] xl:left-12/12 transform -translate-x-1/2 -translate-y-1/2 w-2/3 md:w-6/10 lg:w-10/10 xl:w-full rotate-circle"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col gap-5 lg:gap-30 text-left w-full lg:w-3/12">
          <div>
            <h1 className="text-2xl font-bold pb-3">End-to-End Development</h1>
            <p className=" text-lg">
              From concept to deployment, we handle every aspect of the development process with precision.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold pb-3">24/7 Support & Maintenance</h1>
            <p className=" text-lg">
              We provide continuous support and maintenance to keep your applications running smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

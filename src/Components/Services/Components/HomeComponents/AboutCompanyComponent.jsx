import React from 'react';

export default function AboutCompanyComponent() {
  return (
    <div className="relative max-w-[1344px] mx-auto py-20">
      {/* About Us Section */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 relative z-10 ">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative flex justify-center holographic-container">
        <div className='holographic-card'>
          <img
            src="about-us-image (1).jpg"
            alt="loading..."
            className="rounded-xl w-full object-cover "
          />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="font-medium text-xl text-black py-3">ABOUT US</h1>
          <p className="text-4xl md:text-5xl font-semibold ">
            Transforming Brands with{' '}
          </p>
          <p className='text-4xl md:text-5xl pt-2'><span className="text-[#C6F806] font-bold">Digital Excellence</span></p>
          <p className="text-lg md:text-xl my-5 lg:my-8 text-justify ">
            At TheWebsiteforU, we specialize in transforming brands with cutting-edge digital solutions. From powerful social media strategies to high-performance web and mobile app development, we help businesses thrive in the digital world. Our expert team combines creativity, technology, and data-driven insights to deliver impactful results. Whether you're looking to enhance your online presence or build a seamless digital experience, we’ve got you covered. Let’s create something extraordinary and take your brand to new heights!
          </p>

          {/* Button Section */}
          <div className="flex lg:items-start items-center w-auto">
            <div className='group'>
              <button className="border-2 cursor-pointer z-10 text-black font-bold px-4 py-2 rounded-full transition duration-300 group ">
                More About
              </button>
              
              <i className="fa-solid fa-right-long z-10 -rotate-45 easy-in-out group-hover:rotate-0 bg-[#C6F806] p-3 rounded-full cursor-pointer transition duration-300 group-hover:text-white group-hover:bg-black"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Full Width & Absolute Right */}
      <div className="absolute left-1/3 bottom-10 z-10 bg-black/40 text-white p-12 rounded-xl backdrop-blur-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10  border-white border-opacity-50">
          <div className="flex flex-col  gap-5 border-r border-white last:border-r-0 pr-5">
            <i className="fa-solid fa-chart-line text-[#C6F806] text-5xl"></i>
            <p className='font-semibold text-2xl'>Result-Driven Digital Marketing</p>
          </div>
          <div className="flex flex-col  gap-5 border-r border-white last:border-r-0 pr-5">
            <i className="fa-solid fa-code text-[#C6F806] text-5xl"></i>
            <p className='font-semibold text-2xl'>Custom Web Development</p>
          </div>
          <div className="flex flex-col gap-5 pr-5">
            <i className="fa-solid fa-mobile-screen-button text-[#C6F806] text-5xl"></i>
            <p className='font-semibold text-2xl'>Innovative Mobile App Solutions</p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col lg:flex-row gap-10 justify-between mt-5">
        <div className="flex items-center gap-5">
          <h1 className="text-[#C6F806] font-bold text-5xl md:text-5xl">100+</h1>
          <p className="text-lg">
            Successful Projects Delivered<br />
            <span className="text-black text-[19px]">in Web & Mobile App Development</span>
          </p>
        </div>
      </div>
    </div>
  );
}
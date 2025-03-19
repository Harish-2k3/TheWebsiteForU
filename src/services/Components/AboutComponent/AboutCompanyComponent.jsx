import React from 'react';



export default function AboutCompanyComponent() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="relative px-5 md:px-10 2xl:px-0 max-w-[1344px] mx-auto pt-20 " id="about">
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
          <p className="text-3xl xl:text-5xl font-semibold ">
            Transforming Brands with{' '}
          </p>
          <p className='text-4xl xl:text-5xl pt-2'><span className="text-[#11778B] font-bold">Digital Excellence</span></p>
          <p className="text-lg md:text-xl my-5 xl:my-0 2xl:py-7 pt-5 pb-2 text-justify ">
            At TheWebsiteforU, we specialize in transforming brands with cutting-edge digital solutions. From powerful social media strategies to high-performance web and mobile app development, we help businesses thrive in the digital world. Our expert team combines creativity, technology, and data-driven insights to deliver impactful results. Whether you're looking to enhance your online presence or build a seamless digital experience, we’ve got you covered. Let’s create something extraordinary and take your brand to new heights!
          </p>

          {/* Button Section */}
          <div className="flex lg:items-start items-center w-auto pb-7 lg:pb-0">
            <div className='group'>
              <button onClick={() => scrollToSection("contact")} className="bg-[#11778B] text-white cursor-pointer z-10 font-bold px-4 py-3 rounded-full transition duration-300 group ">
                Know More
              </button>
              <i className="fa-solid fa-right-long z-10 text-white -rotate-45 easy-in-out group-hover:rotate-0 bg-[#11778B] p-4 rounded-full cursor-pointer transition duration-300"></i>
            </div>
          </div>
        </div>
      </div>

{/* Features Section - Full Width & Absolute Right */}
<div className="xl:absolute xl:left-[500px] lg:my-10 xl:my-0 xl:bottom-0 z-10 bg-black/40 backdrop-blur-lg border border-white/20 shadow-xl p-5 lg:p-7 rounded-2xl">
  <div className="lg:grid lg:grid-cols-3 flex flex-col md:flex-row gap-5 lg:gap-10 border-white/20">

    {/* Digital Marketing Service */}
    <div className="flex flex-row items-center gap-4 px-6 md:flex-col md:text-center md:border-r border-white/20 last:border-none">
      <div className="w-12 h-12 flex justify-center items-center">
        <i className="fa-solid fa-chart-line text-[#C6F806] text-3xl md:text-4xl drop-shadow-lg"></i>
      </div>
      <p className="font-semibold text-lg text-white">Result-Driven Digital Marketing</p>
    </div>

    {/* Web Development Service */}
    <div className="flex flex-row items-center gap-4 px-6 md:flex-col md:text-center md:border-r border-white/20 last:border-none">
      <div className="w-12 h-12 flex justify-center items-center">
        <i className="fa-solid fa-code text-[#C6F806] text-3xl md:text-4xl drop-shadow-lg"></i>
      </div>
      <p className="font-semibold text-lg text-white">Custom Web Development</p>
    </div>

    {/* Mobile App Solutions */}
    <div className="flex flex-row items-center gap-4 px-6 md:flex-col md:text-center">
      <div className="w-12 h-12 flex justify-center items-center">
        <i className="fa-solid fa-mobile-screen-button text-[#C6F806] text-3xl md:text-4xl drop-shadow-lg"></i>
      </div>
      <p className="font-semibold text-lg text-white">Innovative Mobile App Solutions</p>
    </div>

  </div>
</div>


      {/* Experience Section */}
      <div className="flex flex-col lg:flex-row gap-10 justify-between mt-5">
        <div className="flex items-center gap-5 xl:gap-1">
          <h1 className="text-[#11778B] font-bold text-5xl ">100+</h1>
          <p className="text-lg hidden md:block">
            Successful Projects Delivered<br />
            <span className="text-black text-[19px]">in Web & Mobile App Development</span>
          </p>
          <p className="text-md md:hidden">
            Successful Projects Delivered in Web & Mobile App Development
          </p>
        </div>
      </div>
    </div>
  );
}
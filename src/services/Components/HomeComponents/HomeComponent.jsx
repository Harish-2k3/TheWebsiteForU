import React from 'react';

export default function HomeComponent() {
  return (
    <div className="bg-center relative pt-18 md:pt-25 bg-gradient-to-b from-[#11778B] to-[#0A1F44] overflow-hidden" id='home'>
      {/* Floating Images */}
      <div className='absolute top-[55vh] md:top-[35vh] lg:top-[30vh] left-3 lg:left-7 bounce-x'>
        <img src="Home/mike-shape.png" alt="loading..." />
      </div>
      <div className='absolute top-[33vh] md:top-[23vh] lg:top-[20vh] lg:right-20 right-10 md:right-10 bounce-y'>
        <img src="Home/energy-shape.png" alt="loading..." />
      </div>
      <div className='absolute bottom-[33vh] lg:bottom-[28vh] 2xl:bottom-[25vh] right-2 md:right-15 2xl:right-70 z-10 triangle-shape'>
        <img src="Home/arrow-shape.png" alt="loading..." />
      </div>
      <div className='hidden md:block absolute bottom-0 right-0  bounce-y'>
        <img src="Home/rocket.png" alt="loading..." />
      </div>

      {/* Hero Text Image */}
      <div className='flex items-center justify-center pt-35 lg:pt-20 pb-15 z-20'>
        <img src="Home/hero-text.png" alt="loading" className='z-20 px-5 md:px-10 lg:px-0' />
      </div>

      {/* Main Content with Fixed Max Width */}
      <div className='max-w-[1440px] px-5 md:px-10 2xl:px-0 mx-auto h-full py-auto grid grid-cols-1 lg:flex lg:flex-row justify-between items-center gap-5'>
        
        {/* Left Content */}
        <div className='text-white flex flex-col gap-5 w-full lg:w-4/12 max-w-[1024px]'>
          <h3 className='text-[25px] md:text-3xl lg:text-2xl z-10'>Elevate Your Business with Digital Excellence</h3>
          <h1 className='text-4xl md:text-6xl lg:text-5xl font-bold z-10'>Think Digital</h1>
          <p className='text-lg md:text-2xl lg:text-xl z-10 text-justify'>
            From cutting-edge digital marketing to top-tier web and mobile app development, we bring your vision to life. 
            Transform your brand with tailored solutions that drive results.
          </p>
        </div>

        {/* Center Image */}
        <div className="h-full w-full lg:w-6/12 flex justify-center items-center max-w-[1024px]">
          <img src="Home/hero-image (1).png" alt="loading..." className="max-h-[70vh] object-contain z-10" />
        </div>

        {/* Right Content */}
        <div className='text-white relative py-10 lg:py-0 lg:w-4/12 flex-col items-center max-w-[1024px] hidden lg:flex'>
          {/* Text Content */}
          <p className="italic w-60 text-center text-[20px] lg:text-left mt-4 z-10">
            <span className="block">Boost Your Online Presence</span>
            <span className="block">Engage Customers Effectively</span>
            <span className="block">Innovate with Technology</span>
          </p>
        </div>
      </div>
    </div>
  );
}

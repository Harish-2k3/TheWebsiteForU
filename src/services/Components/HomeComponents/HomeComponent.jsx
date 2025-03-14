import React from 'react';

export default function HomeComponent() {
  return (
    <div className="bg-center relative pt-25 bg-gradient-to-b from-[#11778B] to-[#0A1F44] overflow-hidden" id='home'>
      {/* Floating Images */}
      <div className='absolute top-[50vh] md:top-[35vh] lg:top-[30vh] left-3 lg:left-7 bounce-x'>
        <img src="mike-shape.png" alt="loading..." />
      </div>
      <div className='absolute top-[25vh] md:top-[23vh] lg:top-[20vh] lg:right-20 right-5 md:right-10 bounce-y'>
        <img src="energy-shape.png" alt="loading..." />
      </div>
      <div className='absolute bottom-0 right-0  bounce-y'>
        <img src="rocket.png" alt="loading..." />
      </div>

      {/* Hero Text Image */}
      <div className='flex items-center justify-center py-20 z-20'>
        <img src="hero-text.png" alt="loading" className='z-20 px-5 md:px-10 lg:px-0' />
      </div>

      {/* Main Content with Fixed Max Width */}
      <div className='max-w-[1440px] px-5 md:px-10 2xl:px-0 mx-auto h-full py-auto grid grid-cols-1 lg:flex lg:flex-row justify-between items-center gap-5'>
        
        {/* Left Content */}
        <div className='text-white flex flex-col gap-5 w-full lg:w-3/12 max-w-[1024px]'>
          <h3 className='text-2xl z-10'>Elevate Your Business with Digital Excellence</h3>
          <h1 className='text-5xl font-bold z-10'>Think Digital</h1>
          <p className='text-lg z-10 text-justify'>
            From cutting-edge digital marketing to top-tier web and mobile app development, we bring your vision to life. 
            Transform your brand with tailored solutions that drive results.
          </p>
        </div>

        {/* Center Image */}
        <div className="h-full w-full lg:w-6/12 flex py-10 lg:py-0 justify-center items-center max-w-[1024px]">
          <img src="hero-image (1).png" alt="loading..." className="max-h-[70vh] object-contain " />
        </div>

        {/* Right Content */}
        <div className='text-white relative py-10 lg:py-0 lg:w-3/12 flex flex-col items-center max-w-[1024px]'>
          {/* Text Content */}
          <p className="italic w-60 text-center text-lg lg:text-left mt-4 z-10">
            <span className="block">Boost Your Online Presence</span>
            <span className="block">Engage Customers Effectively</span>
            <span className="block">Innovate with Technology</span>
          </p>
        </div>
      </div>
    </div>
  );
}

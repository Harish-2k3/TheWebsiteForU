import React from 'react';
import { Link } from 'react-router-dom';

export default function CollabrationComponent() {
  return (
    <div className="max-w-[1344px] mx-auto pb-20 relative text-center">
      <h1 className="font-medium text-xl md:text-2xl pb-3">LET'S COLLABORATE</h1>

      <p className="text-5xl md:text-8xl lg:text-[150px] 2xl:text-[180px] font-bold leading-none">
        LET'S WORK TOGETHER
      </p>

      {/* Centered Circle Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
        <Link to="/contact">
        <div className="bg-[#11778B] text-white w-22 h-22 md:w-25 md:h-25 lg:w-35 lg:h-35 rounded-full flex flex-col items-center justify-center  font-medium text-sm lg:text-[20px] gap-2 cursor-pointer transition duration-300">
        <i className="fa-solid fa-arrow-right -rotate-45 ease-in-out transition duration-200 group-hover:rotate-0"></i>
          Get in Touch
        </div>
        </Link>
      </div>
    </div>
  );
}

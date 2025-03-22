import React from 'react';
import { Link } from 'react-router-dom';

export default function CollabrationComponent() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-[1344px] mx-auto relative text-center pt-10">
      <h1 className="font-medium text-xl md:text-2xl pb-3 ">LET'S COLLABORATE</h1>

      <p className="text-6xl md:text-8xl lg:text-[150px] 2xl:text-[180px] font-bold leading-none">
        LET'S WORK TOGETHER
      </p>

      {/* Centered Circle Button */}
      <div className="absolute top-[120px] xl:top-[190px] 2xl:top-[130px] left-1/2 transform mt-6 md:mt-15 2xl:mt-33 cursor-pointer -translate-x-1/2 -translate-y-1/2 group">
        <Link onClick={() => scrollToSection("contact")}>
        <div className="bg-[#11778B] text-white w-18 h-18 md:w-25 md:h-25 lg:w-35 lg:h-35 rounded-full flex flex-col items-center justify-center  font-medium text-[9px] md:text-[16px] lg:text-[20px] gap-2 cursor-pointer transition duration-300">
        <i className="fa-solid fa-arrow-right -rotate-45 ease-in-out transition duration-200 group-hover:rotate-0"></i>
          Get in Touch
        </div>
        </Link>
      </div>
    </div>
  );
}

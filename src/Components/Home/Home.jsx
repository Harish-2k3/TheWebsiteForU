import React, { useState, useEffect } from 'react';
import HomeComponent from '../Services/Components/HomeComponents/HomeComponent';
import AboutCompany from './AboutCompany';
import OurServicesComponent from '../Services/Components/HomeComponents/OurServicesComponent';
import WhyServiceUsComponent from '../Services/Components/HomeComponents/WhyServiceUsComponent';
import CollabrationComponent from '../Services/Components/HomeComponents/CollabrationComponent';
import ProjectsComponent from '../Services/Components/HomeComponents/ProjectsComponent';
import TestimonialComponent from '../Services/Components/HomeComponents/TestimonialComponent';

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show button after 300px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className=''>
      <HomeComponent />
      <AboutCompany />
      <OurServicesComponent />
      <WhyServiceUsComponent />
      <CollabrationComponent />
      <ProjectsComponent />
      <TestimonialComponent />
      
      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-[#C6F806] z-100 cursor-pointer text-black px-2 py-2.5 rounded-full shadow-lg hover:bg-black hover:text-white transition-all"
        >
          <i className="fa-solid px-2 fa-angles-up"></i>
        </button>
      )}
    </div>
  );
}

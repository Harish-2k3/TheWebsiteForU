import React, { useState, useEffect } from 'react';
import HomeComponent from '../Services/Components/HomeComponents/HomeComponent';
import AboutCompany from './AboutCompany';
import OurServicesComponent from '../Services/Components/HomeComponents/OurServicesComponent';
import WhyServiceUsComponent from '../Services/Components/HomeComponents/WhyServiceUsComponent';
import CollabrationComponent from '../Services/Components/HomeComponents/CollabrationComponent';
import ProjectsComponent from '../Services/Components/HomeComponents/ProjectsComponent';
import TestimonialComponent from '../Services/Components/HomeComponents/TestimonialComponent';
import Contactus from '../Contact/Contactus';

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
      <HomeComponent id="home"/>
      <AboutCompany id="about"/>
      <OurServicesComponent id="services"/>
      <WhyServiceUsComponent />
      <CollabrationComponent />
      {/* <ProjectsComponent id="project"/> */}
      <TestimonialComponent />
      <div className='py-20 bg-right bg-no-repeat' style={{ backgroundImage: "url('ContactBG.png')" }}>
      <Contactus id="contact"/>
      </div>
      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-[#11778B] z-100 cursor-pointer  px-2 py-2.5 rounded-full shadow-lg hover:scale-105 text-white transition-all"
        >
          <i className="fa-solid px-2 fa-angles-up"></i>
        </button>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import HomeComponent from '../../services/Components/HomeComponents/HomeComponent';
import AboutCompany from '../About/AboutCompany';
import OurServices from '../Services/OurServices';
import WhyServiceUs from '../Services/WhyServiceUs';
import Collabration from '../Contact/Collabration';
import Testimonial from '../Testimonial/Testimonial';
import Contactus from '../Contact/Contactus';
import ProjectsComponent from '../../services/Components/ProjectsComponent/ProjectsComponent';


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
      <OurServices />
      <WhyServiceUs />
      <Collabration />
      {/* <ProjectsComponent id="project"/> */}
      <Testimonial />
      <Contactus />
      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-[#11778B] z-100 cursor-pointer border-1 border-white  px-2 py-2.5 rounded-full shadow-lg hover:scale-105 text-white transition-all"
        >
          <i className="fa-solid px-2 fa-angles-up"></i>
        </button>
      )}
    </div>
  );
}

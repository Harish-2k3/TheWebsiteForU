import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeComponent from "../../services/Components/HomeComponents/HomeComponent";
import AboutCompany from "../About/AboutCompany";
import OurServices from "../Services/OurServices";
import WhyServiceUs from "../Services/WhyServiceUs";
import Collabration from "../Contact/Collabration";
import Testimonial from "../Testimonial/Testimonial";
import Contactus from "../Contact/Contactus";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation(); // ✅ Capture state

  useEffect(() => {
    if (location.state?.scrollToServices) {
      setTimeout(() => scrollToSection("services"), 150); // ✅ Increased delay to 150ms
    } else if (location.state?.scrollToContact) {
      setTimeout(() => scrollToSection("contact"), 150); // ✅ Delay ensures section is properly loaded
    }
  }, [location.state]);
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - 80; // ✅ Correct scroll offset
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToHome) {
      setTimeout(() => scrollToSection("home"), 150); // ✅ Scroll to home if state passed
    }
  }, [location.state]);

  return (
    <div>
      <HomeComponent />
      <AboutCompany />
      <OurServices id="services" />
      <WhyServiceUs />
      <Collabration />
      <Testimonial />
      <Contactus id="contact" />
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-[#11778B] z-100 cursor-pointer md:border-1 border-white px-2 py-2.5 rounded-full shadow-lg hover:scale-105 text-white transition-all"
        >
          <i className="fa-solid px-2 fa-angles-up"></i>
        </button>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import HomeComponent from "../../services/Components/HomeComponents/HomeComponent";
import AboutCompany from "../About/AboutCompany";
import OurServices from "../Services/OurServices";
import WhyServiceUs from "../Services/WhyServiceUs";
import Collabration from "../Contact/Collabration";
import Testimonial from "../Testimonial/Testimonial";
import Contactus from "../Contact/Contactus";
import MetaTags from "../../Core/MetaTags";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const location = useLocation();

  // Scroll buttons
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToServices) {
      setTimeout(() => scrollToSection("services"), 150);
    } else if (location.state?.scrollToContact) {
      setTimeout(() => scrollToSection("contact"), 150);
    } else if (location.state?.scrollToHome) {
      setTimeout(() => scrollToSection("home"), 150);
    }
  }, [location.state]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  // Section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setCurrentSection(sectionId);
            console.log("Visible section:", sectionId); // ✅ Debug
          }
        });
      },
      {
        root: null,
        threshold: 0.4, // 40% of section visible
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <MetaTags section={currentSection} />

      <section id="home"><HomeComponent /></section>
      <section id="about"><AboutCompany /></section>
      <section id="services">
        <OurServices />
        <WhyServiceUs />
      </section>
      <section id="collab"><Collabration /></section>
      <section id="testimonials"><Testimonial /></section>
      <section id="contact"><Contactus /></section>

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

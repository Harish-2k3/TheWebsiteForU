import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AllServicesComponent() {
  const [selectedService, setSelectedService] = useState("Digital Marketing");

  const services = [
    {
      name: "Digital Marketing",
      icon: "fa-chart-line",
      description: "Boost your brand with expert SEO, PPC, and social media strategies to drive traffic and increase engagement.",
      details: `Our digital marketing services focus on enhancing your online presence. We provide:
        - Search Engine Optimization (SEO) to improve your website’s ranking on Google.
        - Pay-Per-Click Advertising (PPC) to drive targeted traffic.
        - Social Media Marketing to engage with your audience.
        - Email Marketing campaigns to nurture leads.
        - Content Marketing to establish your brand as an authority.
        
        The Challenge: The online landscape is competitive, and businesses struggle with low engagement and visibility. Our strategies ensure maximum ROI and measurable success.`,
    },
    {
      name: "Mobile App Development",
      icon: "fa-mobile-alt",
      description: "Develop high-quality iOS and Android apps tailored to your needs with user-friendly interfaces.",
      details: `We specialize in developing robust mobile applications:
        - iOS & Android App Development for scalable solutions.
        - Cross-Platform Development to reduce costs and time-to-market.
        - UI/UX Design for engaging and intuitive user experiences.
        - App Maintenance & Support for continuous improvement.
        - Performance Optimization for faster loading times and smooth experiences.
        
        The Challenge: Many apps fail due to poor usability and technical inefficiencies. We ensure your app is optimized, secure, and meets user expectations.`,
    },
    {
      name: "Web Development",
      icon: "fa-code",
      description: "Create stunning, responsive websites with cutting-edge technologies to grow your business online.",
      details: `Our web development services help businesses establish a strong online presence:
        - Custom Website Development to meet your specific needs.
        - E-commerce Solutions for online stores.
        - CMS Development (WordPress, Shopify) for easy content management.
        - API Integration for seamless third-party service connections.
        - Performance & Security Optimization to enhance site speed and safety.
        
        The Challenge: Websites must be responsive, secure, and user-friendly to attract and retain visitors. Our team ensures your website is functional, visually appealing, and optimized for success.`,
    },
  ];

  return (
    <>
      {/* Header Card */}
      <div className="relative max-w-[95%] mx-auto ">
        <div className="hidden md:block absolute top-2 left-0">
          <img src="breadcrumb-shape.png" alt="Breadcrumb" />
        </div>
        <div className="hidden md:block absolute top-0 right-0">
          <img src="breadcrumb-shape-2.png" alt="Breadcrumb" className="h-[350px]" />
        </div>

        <div className="text-black flex flex-col justify-center items-center mt-20 py-16 md:py-30 gap-5 rounded-2xl bg-[#f6f3fe] text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Our Services</h1>
          <div className="flex items-center border-2 border-[#BF20FC] rounded-full px-5 py-2 gap-3">
            <Link to="/" className="text-sm md:text-base font-medium hover:text-[#C6F806]">
              Home
            </Link>
            <span>
              <i className="fa-solid fa-greater-than text-xs"></i>
            </span>
            <p className="text-sm md:text-base">Services</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10 flex flex-col md:flex-row gap-8">
        {/* Left Sidebar - Services List */}
        <div className="w-full md:w-1/3 border-r p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Services</h2>
          <ul className="space-y-3">
            {services.map((service) => (
              <li
                key={service.name}
                onClick={() => setSelectedService(service.name)}
                className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition ${
                  selectedService === service.name
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 hover:bg-purple-100"
                }`}
              >
                <i
                  className={`fa-solid ${service.icon} text-xl ${
                    selectedService === service.name ? "text-white" : "text-purple-600"
                  }`}
                ></i>
                <span className="font-semibold">{service.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content - Service Details */}
        <div className="w-full md:w-2/3 p-6">
          <h2 className="text-3xl font-bold text-purple-600">{selectedService}</h2>
          <p className="mt-4 text-gray-700 text-lg">
            {services.find((service) => service.name === selectedService)?.description}
          </p>
          <p className="mt-4 text-gray-700">
            {services.find((service) => service.name === selectedService)?.details}
          </p>
        </div>
      </div>
    </>
  );
}
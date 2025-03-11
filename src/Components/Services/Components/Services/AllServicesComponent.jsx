import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AllServicesComponent() {
  const [selectedService, setSelectedService] = useState("Digital Marketing");
  const [expandedSections, setExpandedSections] = useState({});

  const toggleExpand = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const services = [
    {
      img: "services.jpg",
      name: "Digital Marketing",
      icon: "fa-chart-line",
      description: "Boost your brand with expert SEO, PPC, and social media strategies to drive engagement and conversions.",
      details: `Our digital marketing services include SEO, social media marketing, PPC campaigns, email marketing, and content strategy to ensure your business reaches the right audience at the right time. We use data-driven insights to maximize visibility and return on investment.`,
      sections: [
        {
          "title": "Core Services",
          "content": "Search Engine Optimization (SEO): Improve your search rankings and drive organic traffic.\nPay-Per-Click Advertising (PPC): Run targeted ad campaigns for instant results.\nSocial Media Marketing: Enhance brand awareness and engage with your audience.\nEmail Marketing: Convert leads into customers through strategic email campaigns.\nContent Marketing: Create valuable, engaging content to establish authority."
        },
        { title: "Challenges", content: "Many businesses struggle with brand visibility, audience engagement, and conversion rates in an increasingly competitive digital space." },
        { title: "Our Approach", content: "We analyze industry trends, target audience behavior, and digital opportunities to create custom marketing strategies tailored to your business goals." },
        { title: "Success Stories", content: "Our campaigns have resulted in a 300% increase in web traffic and significant revenue growth for our clients." },
      ],
    },
    {
      img: "services.jpg",
      name: "Mobile App Development",
      icon: "fa-mobile-alt",
      description: "Develop high-quality iOS and Android apps that provide seamless user experiences and meet business objectives.",
      details: `From concept to deployment, we specialize in crafting innovative and feature-rich mobile applications. Our team ensures security, scalability, and performance for a smooth digital experience.`,
      sections: [
        { title: "Challenges", content: "Building an app that balances functionality, speed, and user engagement can be a daunting task." },
        { title: "Our Approach", content: "We adopt agile methodologies, ensure user-friendly interfaces, and implement the latest technologies to create high-performance apps." },
        { title: "Success Stories", content: "Our clients have seen increased customer engagement and revenue growth through feature-rich mobile apps." },
      ],
    },
    {
      img: "services.jpg",
      name: "Web Development",
      icon: "fa-code",
      description: "Create stunning, responsive websites that enhance user engagement and business growth.",
      details: `We design and develop visually appealing and highly functional websites tailored to meet business needs. Our expertise includes front-end and back-end development, CMS solutions, and e-commerce platforms.`,
      sections: [
        { title: "Challenges", content: "Businesses require websites that are visually engaging, fast, and optimized for conversions." },
        { title: "Our Approach", content: "We leverage modern web technologies, responsive design principles, and performance optimization techniques to create exceptional websites." },
        { title: "Success Stories", content: "Our websites have helped clients achieve higher customer retention rates and increased online sales." },
      ],
    },
  ];

  const selected = services.find((service) => service.name === selectedService);

  return (
    <>
      {/* Header Card */}
      <div className="relative max-w-[95%] mx-auto">
        <div className="text-black flex flex-col justify-center items-center mt-20 py-16 md:py-30 gap-5 rounded-2xl bg-[#f6f3fe] text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Our Services</h1>
          <div className="flex items-center border-2 border-[#11778B] rounded-full px-5 py-2 gap-3">
            <Link to="/" className="text-sm md:text-base font-medium hover:text-[#11778B]">Home</Link>
            <span><i className="fa-solid fa-greater-than text-xs"></i></span>
            <p className="text-sm md:text-base">Services</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto shadow-lg rounded-lg p-8 mt-10 flex flex-col md:flex-row gap-8">
        {/* Left Sidebar - Services List */}
        <div className="w-full md:w-1/3 border-r p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Services</h2>
          <ul className="space-y-3">
            {services.map((service) => (
              <li
                key={service.name}
                onClick={() => setSelectedService(service.name)}
                className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition ${selectedService === service.name
                    ? "bg-[#C6F806] text-white"
                    : "bg-gray-100 hover:bg-purple-100"
                  }`}
              >
                <i className={`fa-solid ${service.icon} text-xl ${selectedService === service.name ? "text-white" : "text-[#11778B]"}`}></i>
                <span className="font-semibold">{service.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content - Service Details */}
        <div className="w-full md:w-2/3 p-6">
          <img
            src={selected.img}
            alt={selectedService}
            className="mx-auto mb-4 rounded-lg shadow-md"
          />
          <h2 className="text-3xl font-bold text-[#11778B]">{selectedService}</h2>
          <p className="mt-4 text-gray-700 text-lg">{selected.description}</p>
          <p className="mt-4 text-gray-700">{selected.details}</p>

          {/* Expandable Sections */}
          {selected.sections.map((section, index) => (
            <div key={index} className="mt-6 border-t pt-4">
              <button
                className="flex justify-between w-full text-left text-xl font-semibold text-gray-800 hover:text-[#11778B] transition"
                onClick={() => toggleExpand(section.title)}
              >
                {section.title}
                <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${expandedSections[section.title] ? "rotate-180" : ""}`}></i>
              </button>
              {expandedSections[section.title] && (
                <p className="mt-2 text-gray-700">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
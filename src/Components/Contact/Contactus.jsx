import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';



export default function Contactus() {
    const location = useLocation();
    const [selectedService, setSelectedService] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);


    const services = [
        "Digital Marketing",
        "Mobile App Development",
        "Website Development",
        "Others",
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <>
            {location.pathname === '/contact' && (
                <div className="relative mx-auto mt-26">
                    <div className="hidden md:block absolute top-15 left-0">
                        <img src="breadcrumb-shape.png" alt="Breadcrumb" className='h-[200px]' />
                    </div>
                    <div className="hidden md:block absolute top-10 right-0">
                        <img src="breadcrumb-shape-2.png" alt="Breadcrumb" className='h-[250px]' />
                    </div>

                    <div className="text-black flex flex-col justify-center items-center mt-20 py-16 md:py-25 gap-5 rounded-2xl bg-[#f6f3fe] text-center">
                        <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
                        <div className="flex items-center border-2 border-[#11778B] rounded-full px-5 py-2 gap-3">
                            <Link to="/" className="text-sm md:text-base font-medium hover:text-[#C6F806]">
                                Home
                            </Link>
                            <span>
                                <i className="fa-solid fa-greater-than text-xs"></i>
                            </span>
                            <p className="text-sm md:text-base">Contact Us</p>
                        </div>
                    </div>
                </div>
            )}
            {location.pathname === '/contact' && (
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1344px] mx-auto gap-5 pt-10">
                    {[
                        {
                            icon: "fa-location-dot",
                            title: "Our Address",
                            text: "2464 Royal Ln. Mesa, New Jersey 45463.",
                        },
                        {
                            icon: "fa-envelope",
                            title: "Email Us",
                            text: "Email us anytime for anykind of quety.",
                        },
                        {
                            icon: "fa-phone-volume",
                            title: "+111 98172817",
                            text: "Call us any kind suppor,we will wait for it.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="bg-[#f6f3fe] p-6 md:p-10 rounded-lg text-center flex flex-col gap-5 items-center">
                            <i className={`fa-solid ${item.icon} text-5xl md:text-7xl text-[#11778B]`}></i>
                            <p className="text-xl md:text-2xl font-bold">{item.title}</p>
                            <span className="text-sm md:text-lg px-10 md:px-0 lg:px-15 ">{item.text}</span>
                        </div>
                    ))}
                </div>
            )}
            {location.pathname === '/' && (
                <div className='flex flex-col max-w-[1344px] mx-auto' id="contact">
                    <h1 className='font-medium text-[20px] pb-3'>CONTACT US</h1>
                    <p className='text-5xl font-bold '>How can we help you today?</p>
                </div>
            )}

            <div className="py-10 grid grid-cols-1 lg:grid-cols-2 max-w-[1344px] mx-auto gap-10  lg:gap-10">
                {/* Google Map */}
                <div className="w-full h-64 md:h-96 ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.3937911291134!2d80.27071688527117!3d13.082321715777056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265fe020bee7f%3A0xa91aa9e32fb0a5c1!2sGreater%20Chennai%20Corporation%20Office!5e0!3m2!1sen!2sin!4v1740422663364!5m2!1sen!2sin"
                        className="w-full h-full   rounded-lg"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="flex flex-col gap-5">
                    <p className='text-3xl font-bold'>GET IN TOUCH</p>

                    {/* Name & Email Side by Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Name Field */}
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                placeholder=" "
                                className="border border-gray-300 rounded-lg p-3 w-full peer focus:border-[#11778B] focus:ring-1 focus:ring-[#11778B] focus:outline-none"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-3 top-3 text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-black"
                            >
                                Your Name
                            </label>
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className="border border-gray-300 rounded-lg p-3 w-full peer focus:border-[#11778B] focus:ring-1 focus:ring-[#11778B] focus:outline-none"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 top-3 text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-black"
                            >
                                Your Email
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="relative">
                            <input
                                type="text"
                                id="mobno"
                                placeholder=" "
                                className="border border-gray-300 rounded-lg p-3 w-full peer focus:border-[#11778B] focus:ring-1 focus:ring-[#11778B] focus:outline-none"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-3 top-3 text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-black"
                            >
                                Mobile Number
                            </label>
                        </div>

                        <div className="relative w-full" ref={dropdownRef}>
                            {/* Input Field with Dropdown Icon */}
                            <div
                                className="border border-gray-300 rounded-lg p-3 w-full flex items-center justify-between cursor-pointer focus-within:border-[#11778B] focus-within:ring-1 focus-within:ring-[#11778B]"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className={`text-gray-700 ${selectedService ? "text-black" : "text-gray-400"}`}>
                                    {selectedService || "Select a Service"}
                                </span>
                                <i className={`fa-solid fa-caret-down transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}></i>
                            </div>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-md z-10">
                                    {services.map((service, index) => (
                                        <li
                                            key={index}
                                            className="p-3 hover:bg-gray-100 cursor-pointer text-gray-700"
                                            onClick={() => {
                                                setSelectedService(service);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>



                    {/* Message Field */}
                    <div className="relative">
                        <textarea
                            id="message"
                            placeholder=" "
                            rows="3"
                            className="border border-gray-300 rounded-lg p-3 w-full peer focus:border-[#11778B] focus:ring-1 focus:ring-[#11778B] focus:outline-none"
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-3 top-3 text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-black"
                        >
                            Your Message
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className='flex justify-center  md:justify-normal'>
                        <button className="bg-[#11778B] cursor-pointer text-white py-3 rounded-lg text-lg px-3 font-semibold hover:bg-[#11778bda] transition">
                            Send Message
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}

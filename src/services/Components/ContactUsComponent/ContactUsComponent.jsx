import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ContactUsComponent() {
    const location = useLocation();
    const [selectedService, setSelectedService] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const isContactPage = location.pathname === "/contact";
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        service: "",
        message: "",
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleServiceSelect = (service) => {
        setFormData({ ...formData, service });
        setIsOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.mobile || !formData.service || !formData.message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const payload = {
            user_name: formData.name,
            user_email: formData.email,
            user_mobile: formData.mobile,
            user_service: formData.service,
            message: formData.message
        };

        try {
            const response = await axios.post("http://localhost:3000/api/contact", payload, {
                headers: { "Content-Type": "application/json" }
            });

            alert(response.data.message);
            setFormData({ name: "", email: "", mobile: "", service: "", message: "" });
        } catch (error) {
            console.error("Error Response:", error.response?.data || "Failed to submit form");
            alert(error.response?.data.error || "Failed to submit form. Please try again.");
        }
    };


    const services = [
        "Digital Marketing",
        "Mobile App Development",
        "Website Development",
        "Others",
    ];

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
            {isContactPage && (
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
                            <Link to="/" className="text-sm md:text-base font-medium hover:text-[#C6F806]">Home</Link>
                            <span><i className="fa-solid fa-greater-than text-xs"></i></span>
                            <p className="text-sm md:text-base">Contact Us</p>
                        </div>
                    </div>
                </div>
            )}

            {isContactPage && (
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1344px] mx-auto gap-5 pt-10">
                    {["Our Address", "Email Us", "Call Us"].map((title, index) => (
                        <div key={index} className="bg-[#f6f3fe] p-6 md:p-10 rounded-lg text-center flex flex-col gap-5 items-center">
                            <i className={`fa-solid ${index === 0 ? 'fa-location-dot' : index === 1 ? 'fa-envelope' : 'fa-phone-volume'} text-5xl md:text-7xl text-[#11778B]`}></i>
                            <p className="text-xl md:text-2xl font-bold">{title}</p>
                            <span className="text-sm md:text-lg">{index === 0 ? "2464 Royal Ln. Mesa, NJ 45463" : index === 1 ? "Email us anytime." : "+111 98172817"}</span>
                        </div>
                    ))}
                </div>
            )}

            <div className={`mx-auto px-5 md:px-10 2xl:px-0 ${isContactPage ? "max-w-[1200px]" : "max-w-full"}`}>
                <div className="py-10 grid grid-cols-1 md:grid-cols-2 max-w-[1344px] mx-auto">
                    <div className="flex flex-col space-y-4 gap-5 justify-center">
                        <div className="flex items-center gap-4">
                            <i className="fa-solid fa-mobile-screen text-[#11778B] text-3xl w-10 flex justify-center"></i>
                            <div className="border-l-2 border-gray-300 pl-4">
                                <p className="text-gray-600 text-lg">Call Our Experts</p>
                                <span className="font-semibold text-xl">+111 98172817</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <i className="fa-solid fa-envelope text-[#11778B] text-3xl w-10 flex justify-center"></i>
                            <div className="border-l-2 border-gray-300 pl-4">
                                <p className="text-gray-600 text-lg">Email Us</p>
                                <span className="font-semibold text-xl">help@gmail.com</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <i className="fa-solid fa-location-dot text-[#11778B] text-3xl w-10 flex justify-center"></i>
                            <div className="border-l-2 border-gray-300 pl-4">
                                <p className="text-gray-600 text-lg">Our Address</p>
                                <span className="font-semibold text-xl">New Jersey, 45463</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-10 lg:pt-0">
                        <p className='text-5xl'>Let's get started!</p>

                        {/* Name & Email Side by Side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Name Field */}
                            <div className="relative">
                                <style>
                                    {`
                                        input:-webkit-autofill,
                                        input:-webkit-autofill:focus {
                                            background-color: transparent !important;
                                            box-shadow: 0 0 0px 1000px white inset !important;
                                            -webkit-box-shadow: 0 0 0px 1000px white inset !important;
                                            color: inherit !important;
                                            border-color: #11778B !important;
                                        }
                                    `}
                                </style>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder=" "
                                    required
                                    className="border border-gray-300 rounded-lg p-3 w-full peer focus:border-[#11778B] focus:ring-1 focus:ring-[#11778B] focus:outline-none"
                                />

                                <label
                                    htmlFor="name"
                                    className="absolute left-3 top-3 text-gray-500 text-sm bg-white px-1 transition-all 
                                                peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                                                peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-black
                                                peer-valid:top-[-8px] peer-valid:text-xs peer-valid:text-black pointer-events-none"
                                >
                                    Your Name
                                </label>
                            </div>



                            {/* Email Field */}
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder=" "
                                    className="border border-gray-300 rounded-lg p-3 w-full peer focus:border-[#11778B] focus:ring-1 focus:ring-[#11778B] focus:outline-none"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-3 top-3 text-gray-500 text-sm pointer-events-none bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-black"
                                >
                                    Your Email
                                </label>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder=" "
                                    required
                                    className="border border-gray-300  rounded-lg p-3 w-full peer focus:border-[#11778B] focus:ring-1 focus:ring-[#11778B] focus:outline-none"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-3 top-3 pointer-events-none text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-black"
                                >
                                    Mobile Number
                                </label>
                            </div>

                            <div ref={dropdownRef} className="relative w-full" >
                                {/* Input Field with Dropdown Icon */}
                                <div
                                    className="border border-gray-300 rounded-lg p-3 w-full flex items-center justify-between cursor-pointer focus-within:border-[#11778B] focus-within:ring-1 focus-within:ring-[#11778B]"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <span className={`text-gray-700 pointer-events-none ${selectedService ? "text-black" : "text-gray-400"}`}>
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
                                                value={service}
                                                onClick={() => {
                                                    setSelectedService(service);
                                                    setIsOpen(false);
                                                    handleServiceSelect(service);
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
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder=" "
                                rows="3"
                                required
                                className="border border-gray-300 rounded-lg p-3 w-full peer focus:border-[#11778B] focus:ring-1 focus:ring-[#11778B] focus:outline-none"
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute pointer-events-none left-3 top-3 text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-black"
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
                    </form>

                </div>
            </div>
        </>
    );
}


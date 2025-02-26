import React from 'react';
import { Link } from 'react-router-dom';

export default function Contactus() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative">
                <div className="hidden md:block absolute top-23 left-0">
                    <img src="breadcrumb-shape.png" alt="Breadcrumb" />
                </div>
                <div className="hidden md:block absolute top-12 right-0">
                    <img src="breadcrumb-shape-2.png" alt="Breadcrumb" />
                </div>

                <div className="text-black flex flex-col justify-center items-center mt-20 py-16 md:py-50 gap-5 bg-[#f6f3fe] text-center">
                    <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
                    <div className="flex items-center border-2 border-[#BF20FC] rounded-full px-5 py-2 gap-3">
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

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-[90%] md:max-w-[80%] mx-auto gap-5 py-10">
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
                        <i className={`fa-solid ${item.icon} text-5xl md:text-7xl text-[#6A47ED]`}></i>
                        <p className="text-xl md:text-2xl font-bold">{item.title}</p>
                        <span className="text-sm md:text-lg px-10 md:px-0 lg:px-15 ">{item.text}</span>
                    </div>
                ))}
            </div>

            {/* Contact Form & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[90%] md:max-w-[80%] mx-auto gap-10  lg:gap-10 py-10">
                {/* Google Map */}
                <div className="w-full h-64 md:h-96">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.3937911291134!2d80.27071688527117!3d13.082321715777056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265fe020bee7f%3A0xa91aa9e32fb0a5c1!2sGreater%20Chennai%20Corporation%20Office!5e0!3m2!1sen!2sin!4v1740422663364!5m2!1sen!2sin"                        
                        className="w-full h-full xl:h-[55vh]  rounded-lg"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Contact Form */}
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl md:text-5xl font-bold">Ready to Get Started?</h1>
                    <p className="text-sm md:text-base text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores repellat, sed neque eaque laborum quis commodi iste voluptatem laudantium totam modi.
                    </p>
                    
                    <div className="flex flex-col gap-3">
                        <label className="text-sm font-medium">Your Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border rounded-lg p-3 w-full"
                        />

                        <label className="text-sm font-medium">Your Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border rounded-lg p-3 w-full"
                        />

                        <label className="text-sm font-medium">Your Message</label>
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="border rounded-lg p-3 w-full"
                        ></textarea>

                        <button className="bg-[#6A47ED] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#5A3ED1] transition">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

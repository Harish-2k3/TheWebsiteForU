import React, { useState, useEffect } from "react";

const testimonials = [
    {
        id: 1,
        name: "Michael Johnson",
        role: "CEO, TechNova Solutions",
        image: "T5.png",
        review: "The team at theWebsiteForU transformed our online presence with their digital marketing expertise. Our traffic and leads have skyrocketed since we partnered with them!",
    },
    {
        id: 2,
        name: "Sophia Martinez",
        role: "Founder, TrendyApp",
        image: "T2.jpg",
        review: "Their mobile app development team exceeded our expectations. The app is smooth, user-friendly, and perfectly aligned with our vision. Highly recommend their services!",
    },
    {
        id: 3,
        name: "David Thompson",
        role: "Marketing Director, E-Commerce Hub",
        image: "T3.jpg",
        review: "Exceptional SEO and PPC campaigns! Our website now ranks on the first page of Google, and our conversion rates have improved dramatically.",
    },
    {
        id: 4,
        name: "Emma Wilson",
        role: "Operations Manager, NextGen Startups",
        image: "T4.png",
        review: "From branding to a fully functional website, theWebsiteForU handled everything flawlessly. Their attention to detail and creativity are top-notch!",
    },
];

export default function TestimonialComponent() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(window.innerWidth < 768 ? 1 : 2);

    // Handle screen resizing to update itemsPerSlide
    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(window.innerWidth < 768 ? 1 : 2);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + itemsPerSlide) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [itemsPerSlide]);

    return (
        <div className="max-w-[1344px] px-5 md:px-10 2xl:px-0 mx-auto pt-30">
            <h1 className="font-medium text-[20px] pb-3">TESTIMONIALS</h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h1 className="font-bold text-3xl md:text-5xl md:w-6/12">
                    What Our Awesome Customers Say
                </h1>
                <p className="md:w-5/12 text-gray-600 text-[20px] font-medium">
                    Our clients trust us to deliver quality services that drive results. See how we’ve helped businesses grow.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-10">
                {/* Left Section */}
                <div className="col-span-2 flex flex-col items-start gap-15">
                    <div className="flex flex-row items-center gap-5">
                        <img src="T1.png" alt="Profile" className="w-16 h-16 rounded-full" />
                        <div>
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fa-solid fa-star"></i>
                                ))}
                            </div>
                            <p className="text-gray-600">15k+ (Reviews)</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-3">
                        <button
                            className="bg-[#11778B] text-white hover:bg-[#11778bea] px-5 py-3 rounded-full cursor-pointer"
                            onClick={() =>
                                setActiveIndex((activeIndex - itemsPerSlide + testimonials.length) % testimonials.length)
                            }
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button
                            className="bg-[#11778B] text-white hover:bg-[#11778bea] px-5 py-3 rounded-full cursor-pointer"
                            onClick={() =>
                                setActiveIndex((activeIndex + itemsPerSlide) % testimonials.length)
                            }
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-span-10 overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-500 ease-in-out md:gap-5 lg:gap-10 lg:pl-10"
                        style={{ transform: `translateX(-${(activeIndex / itemsPerSlide) * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-[100%] md:w-[48%] flex-shrink-0 bg-purple-50 p-10 rounded-lg shadow-md relative"
                            >
                                <img src="shape.png" alt="" className="absolute top-4 left-0" />
                                <div className="lg:absolute top-18 -left-8">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-26 h-26 rounded-full border-4 border-white" />
                                </div>
                                <div className="absolute top-5 right-5 text-[#11778B] text-3xl">
                                    <i className="fa-solid fa-quote-right"></i>
                                </div>
                                <div className="lg:mt-5 xl:max-w-[300px] 2xl:max-w-[350px] mx-auto">
                                    <div className="flex text-yellow-500 py-3">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="fa-solid fa-star"></i>
                                        ))}
                                    </div>
                                    <h1 className="text-xl font-semibold">{testimonial.name}</h1>
                                    <span className="">{testimonial.role}</span>
                                    <p className="mt-2 text-justify">{testimonial.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Active Indicator - Updated for Responsive */}
            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: Math.ceil(testimonials.length / itemsPerSlide) }, (_, index) => (
                    <span
                        key={index}
                        className={`h-3 w-3 rounded-full transition-all ${
                            index === Math.floor(activeIndex / itemsPerSlide) ? "bg-[#11778B]" : "bg-gray-300"
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

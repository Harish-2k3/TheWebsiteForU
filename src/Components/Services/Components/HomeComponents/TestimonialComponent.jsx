import React, { useState, useEffect } from "react";

const testimonials = [
    {
        id: 1,
        name: "Courtney Henry",
        role: "Nursing Assistant",
        image: "T1.png",
        review: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean",
    },
    {
        id: 2,
        name: "Esther Howard",
        role: "Nursing Assistant",
        image: "T1.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc viverra laoreet est porta pretium metus aliquam.",
    },
    {
        id: 3,
        name: "Jane Cooper",
        role: "Doctor",
        image: "T1.png",
        review: "Maecenas porta nunc viverra laoreet. Integer nunc viverra laoreet est the is porta pretium metus aliquam.",
    },
    {
        id: 4,
        name: "Robert Fox",
        role: "Pharmacist",
        image: "T1.png",
        review: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
];

export default function TestimonialComponent() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-[1344px] mx-auto py-20">
            <h1 className="font-medium text-[20px] pb-3">TESTIMONIALS</h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h1 className="font-bold text-4xl md:text-5xl md:w-6/12">
                    What Our Awesome Customers Say
                </h1>
                <p className="md:w-5/12 text-gray-600 text-[20px] font-medium">
                    A long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>

            <div className="grid grid-cols-12 gap-8 py-10">
                {/* Left Section - 2% width */}
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
                                setActiveIndex((activeIndex - 2 + testimonials.length) % testimonials.length)
                            }
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button
                            className="bg-[#11778B] text-white hover:bg-[#11778bea]  px-5 py-3 rounded-full cursor-pointer"
                            onClick={() =>
                                setActiveIndex((activeIndex + 2) % testimonials.length)
                            }
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                {/* Right Section - 98% width, showing 2 cards at a time */}
                <div className="col-span-10 overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-500 ease-in-out  gap-10 pl-10"
                        style={{ transform: `translateX(-${(activeIndex / 2) * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className=" md:w-[48%] flex-shrink-0 bg-purple-50 p-10 rounded-lg shadow-md relative"
                            >
                                <img src="shape.png" alt="" className="absolute top-4 left-0"/>

                                <div className="absolute top-18 -left-8">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-26 h-26 rounded-full border-4 border-white" />
                                </div>
                                <div className="absolute top-5 right-5 text-[#11778B] text-3xl">
                                    <i className="fa-solid fa-quote-right"></i>
                                </div>
                                <div className="mt-5 max-w-[350px] mx-auto">
                                    <div className="flex text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="fa-solid fa-star"></i>
                                        ))}
                                    </div>
                                    <h1 className="text-xl font-semibold">{testimonial.name}</h1>
                                    <span className="">{testimonial.role}</span>
                                    <p className=" mt-2 text-justify">{testimonial.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Active Indicator */}
            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: testimonials.length / 2 }, (_, index) => (
                    <span
                        key={index}
                        className={`h-3 w-3 rounded-full transition-all ${
                            index * 2 === activeIndex ? "bg-[#11778B]" : "bg-gray-300"
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

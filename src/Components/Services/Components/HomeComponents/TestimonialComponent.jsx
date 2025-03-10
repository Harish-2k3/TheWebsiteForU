import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Courtney Henry",
        role: "Nursing Assistant",
        image: "T1.png",
        review: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
    {
        id: 2,
        name: "Esther Howard",
        role: "Nursing Assistant",
        image: "T1.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc viverra laoreet est porta pretium metus aliquam."
    },
    {
        id: 3,
        name: "Jane Cooper",
        role: "Doctor",
        image: "T1.png",
        review: "Maecenas porta nunc viverra laoreet. Integer nunc viverra laoreet est the is porta pretium metus aliquam."
    },
    {
        id: 4,
        name: "Robert Fox",
        role: "Pharmacist",
        image: "T1.png",
        review: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
    }
];

export default function TestimonialComponent() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='max-w-[1344px] mx-auto py-10'>
            <h1 className='font-medium text-[20px] pb-3 '>TESTIMONIALS</h1>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                <h1 className='font-bold text-4xl md:text-5xl md:w-6/12'>What Our Awesome Customers Say</h1>
                <p className='md:w-5/12 text-gray-600 text-[20px] font-medium'>A long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 py-10'>
                {/* Left Section */}
                <div className='md:col-span-4 flex flex-col items-start gap-10'>
                    <div className='flex flex-row items-center gap-5'>
                        <img src="T1.png" alt="Profile" className='w-16 h-16 rounded-full' />
                        <div>
                            <div className='flex text-yellow-500'>
                                {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                            </div>
                            <p className='text-gray-600'>15k+ Reviews</p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <button 
                            className='bg-[#C6F806] px-4 py-2 rounded-full cursor-pointer' 
                            onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button 
                            className='bg-[#C6F806] px-4 py-2 rounded-full cursor-pointer' 
                            onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className='md:col-span-8 overflow-hidden relative'>
                    <div 
                        className='flex transition-transform duration-500 ease-in-out gap-10 pl-10' 
                        style={{ transform: `translateX(-${activeIndex * 80}%)` }}>
                        {testimonials.map((testimonial) => (
                            <div 
                                key={testimonial.id} 
                                className='w-full md:w-4/5 flex-shrink-0 bg-purple-50 p-6 rounded-lg shadow-md relative'>
                                <div className="absolute top-10 -left-8">
                                    <img src={testimonial.image} alt={testimonial.name} className='w-20 h-20 rounded-full border-4 border-white' />
                                </div>
                                <div className="absolute top-5 right-5 text-purple-500 text-3xl">
                                    <i className="fa-solid fa-quote-right"></i>
                                </div>
                                <div className='mt-5 max-w-[500px] mx-auto'>
                                    <div className='flex text-yellow-500 '>
                                        {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                                    </div>
                                    <h1 className='text-xl font-semibold'>{testimonial.name}</h1>
                                    <span className='text-gray-500'>{testimonial.role}</span>
                                    <p className='text-gray-600 mt-2'>{testimonial.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Active Indicator */}
            <div className='flex justify-center gap-2 mt-4'>
                {testimonials.map((_, index) => (
                    <span 
                        key={index} 
                        className={`h-3 w-3 rounded-full transition-all ${index === activeIndex ? 'bg-[#6366F1]' : 'bg-gray-300'}`}></span>
                ))}
            </div>
        </div>
    );
}

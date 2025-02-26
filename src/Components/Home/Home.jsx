import React from 'react'

export default function Home() {
  return (
    <div className='bg-center bg-cover h-[200vh] md:h-[150vh] lg:h-[100vh] relative py-30' style={{ backgroundImage: "url('HomeBG.jpg')" }}>

      <div className='absolute top-[50vh] md:top-[35vh] lg:top-[30vh] left-3 lg:left-7 bounce-x'><img src="mike-shape.png" alt="loading..." /></div>
      <div className='absolute top-[25vh] md:top-[23vh] lg:top-[20vh] lg:right-20 right-5 md:right-10 bounce-y'><img src="energy-shape.png" alt="loading..." /></div>
      <div className='absolute lg:bottom-[5vh] bottom-0 right-5 lg:right-20 bounce-y'><img src="rocket.png" alt="loading..." /></div>

      <div className='flex items-center justify-center px-5 pt-20'><img src="hero-text.png" alt="loading" className='z-10' /></div>

      <div className='lg:flex lg:flex-row grid grid-cols-1 justify-between items-center gap-20 max-w-[80%] mx-auto'>
        <div className='text-white flex flex-col gap-5 '>
          <h3 className='text-2xl z-10'>GO FOR ADVERTISING</h3>
          <h1 className='text-6xl font-bold z-10'>Think Digital</h1>
          <p className='text-lg z-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
        </div>
        <div className='h-full w-full'>
          <img src="hero-image.png" alt="loading..." />
        </div>
        <div className='text-white  relative'>
          <i className="fa-solid fa-play absolute top-16 lg:top-17 left-17 lg:right-65 animate-pulse animate-infinite"></i>
          <img src="text-circle.png" alt="loading..." className='bg-white/15 p-3 rounded-full -z-10 rotate-circle' />
          <p className='italic z-10'>There Are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.</p>
        </div>
      </div>
    </div>

  )
}

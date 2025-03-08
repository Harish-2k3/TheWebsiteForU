import React from 'react'

export default function ProjectsComponent() {
    return (
        <div className='max-w-[1344px] mx-auto py-20'>
            <h1 className='font-medium text-[20px] pb-3'>OUR PROJECTS</h1>
            <p className='text-5xl'>Explore our new recently <span className='text-[#C6F806] font-bold'>Completed Projects</span></p>
            <div className='flex flex-row justify-evenly py-10'>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div>
                        <img src="project-1-DGImChiM.jpg" alt="loading..." />
                        <div className='hidden'>
                            <p>Digital Marketing</p>
                            <span>Company Advertisement</span>
                        </div>
                    </div>

                    <div>
                        <img src="project-2-COTidCQZ.jpg" alt="loading..." />
                        <div className='hidden'>
                            <p>Development</p>
                            <span>Marketing Website</span>
                        </div>
                    </div>

                    <div>
                        <img src="project-3-Bh7o-nGF.jpg" alt="loading..." />
                        <div className='hidden'>
                            <p>Development</p>
                            <span>Marketing Website</span>
                        </div>
                    </div>
                    <div>
                        <img src="project-4-DyEGdaFN.jpg" alt="loading..." />
                        <div className='hidden'>
                            <p>Mobile App Development</p>
                            <span>Marketing Website</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

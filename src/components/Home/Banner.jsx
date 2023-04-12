import React from 'react';

const Banner = () => {
    return (
        <div className='px-12 relative pt-16 md:px-32 md:flex justify-between items-center pb-12 bg-[#F9F9FF]'>
            <div className='md:w-[60%] space-y-6'>
                <h1 className='md:text-7xl text-3xl font-bold md:font-extrabold'>One Step <br className="hidden md:block" /> Closer To Your <br /> <span className='text-indigo-400'>Dream Job</span></h1>
                <p className='text-[#757575] md:text-[18px]'>Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn'>Get Started</button>
            </div>
            <div className='md:w-[40%] md:absolute md:right-0'>
                <img className='object-cover' src="/All Images/profile.png" alt="profile" />
            </div>
        </div>
    );
};

export default Banner;
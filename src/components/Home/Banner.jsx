import React from 'react';

const Banner = () => {
    return (
        <div className='md:flex justify-between items-center bg-[#F9F9FF]'>
            <div className='md:w-1/2 space-y-6'>
                <h1 className='md:text-7xl text-3xl font-extrabold'>One Step Closer To Your <br /> <span className='text-indigo-400'>Dream Job</span></h1>
                <p className='text-[#757575] text-[18px]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn'>Get Started</button>
            </div>
            <div className='md:w-1/2 ms-5'>
                <img className='object-cover' src="../../../public/All Images/profile.png" alt="profile" />
            </div>
        </div>
    );
};

export default Banner;
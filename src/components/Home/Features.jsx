import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

const Features = ({ feature }) => {
    const { id, logo, job_title, brand_name, office, job_type, location, salary } = feature;
    const navigate = useNavigate()

    return (
        <div className='rounded-md border border-inherit p-10'>
            <div className='mb-8'>
                <img src={logo} alt="logo"  className='object-cover'/>
            </div>
            <div className='space-y-5'>
                <h2 className='text-xl md:text-2xl tracking-wide font-extrabold text-[#474747]'>{job_title}</h2>
                <p className='text-xl font-semibold text-[#757575]'>{brand_name}</p>
                <p className='text-indigo-400 font-medium md:font-bold flex md:flex-row flex-col gap-3 w-28 md:w-fit'>
                    <span className='rounded-md px-1 py-2 md:px-2 md:py-3 text-center mr-4 border border-indigo-400'>{office}</span> <span className='rounded-lg px-1 md:px-2 py-2 md:py-3 text-center border  border-indigo-400'>{job_type}</span>
                </p>
                <div>
                    <p className='inline-flex items-center text-[#757575] gap-2 mr-6 md:text-xl'> <span> <MapPinIcon className='h-6 w-5' /> </span> {location} </p> 
                    <p className='inline-flex items-center text-[#757575] gap-2 md:text-xl'> <span> <CurrencyDollarIcon className='h-6 w-5' /> </span> Salary: {salary} </p> 
                </div>
                <button onClick={ () => navigate(`details/${id}`) } className='btn md:h-12'>View Details</button>
            </div>
        </div>
    );
};

export default Features;
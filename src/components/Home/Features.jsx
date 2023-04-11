import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const Features = ({ feature }) => {
    const { id, logo, job_title, brand_name, office, job_type, location, salary } = feature;

    return (
        <div className='rounded-sm shadow-md p-10'>
            <div className=''>
                <img src={logo} alt="logo"  className='object-cover'/>
            </div>
            <div className='space-y-5'>
                <h2 className='text-2xl text-[#474747]'>{job_title}</h2>
                <p className='text-xl text-[#757575]'>{brand_name}</p>
                <p className='text-indigo-400 font-bold'>
                    <span className='rounded-md px-2 py-3 text-center mr-4 border border-indigo-400'>{office}</span> <span className='rounded-lg px-2 py-3 text-center border  border-indigo-400'>{job_type}</span>
                </p>
                <div>
                    <p className='inline-flex items-center text-[#757575] gap-2 mr-6 text-xl'> <span> <MapPinIcon className='h-6 w-5' /> </span> {location} </p> 
                    <p className='inline-flex items-center text-[#757575] gap-2 text-xl'> <span> <CurrencyDollarIcon className='h-6 w-5' /> </span> Salary: {salary} </p> 
                </div>
                <Link className='btn h-12'>View Details</Link>
            </div>
        </div>
    );
};

export default Features;
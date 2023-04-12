import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

const AppliedDetails = ({ apply }) => {
    const { id, logo, job_title, brand_name, office, job_type, location, salary } = apply;

    const navigate = useNavigate();

    return (
            <div className='md:flex items-center p-7 mb-6 border border-inherit rounded-md'>
                <div className='bg-[#F4F4F4] rounded-md h-28 md:h-60 md:w-60 flex items-center justify-center'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='md:ml-8 space-y-4'>
                    <h2 className='text-xl md:text-2xl font-extrabold text-[#474747]'>{job_title}</h2>
                    <p className='md:text-2xl font-semibold text-[#757575]'>{brand_name}</p>
                    <p className='text-indigo-400 font-bold py-2'>
                        <span className='rounded-md px-2 py-3 text-center mr-4 border border-indigo-400'>{office}</span> <span className='rounded-lg px-2 py-3 text-center border  border-indigo-400'>{job_type}</span>
                    </p>
                    <div className='pt-3'>
                        <p className='inline-flex items-center text-[#757575] gap-2 mr-6 md:text-xl'> <span> <MapPinIcon className='h-6 w-5' /> </span> {location} </p> 
                        <p className='inline-flex items-center text-[#757575] gap-2 md:text-xl'> <span> <CurrencyDollarIcon className='h-6 w-5' /> </span> Salary: {salary} </p> 
                    </div>
                </div>
                <div className='ml-auto'>
                    <button onClick={ () => navigate(`/details/${id}`) } className='btn md:w-40 md:h-16'>View Details</button>
                </div>
            </div>
    );
};

export default AppliedDetails;
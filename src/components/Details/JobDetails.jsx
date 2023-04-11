import React from 'react';
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon  } from '@heroicons/react/24/outline'
import { addToDb } from '../../utilities/fakeDb';

const JobDetails = ( {details} ) => {
    const { id, job_title, location, salary, contact_info } = details;

    const handlerApply = (id) => {
        addToDb(id);
    }

    return (
        <div>
        <div className='bg-[#E8E8FF] p-7 w-[480px] rounded-lg'>
            <div className='space-y-4'>
                <p className='text-xl font-extrabold'>Job Details</p>
                <hr className='border-gray-300' />
                <p className='text-[#757575] text-xl inline-flex items-center'> <CurrencyDollarIcon className='w-5 h-5 text-indigo-400' /> <span className=' ml-2 font-bold text-[#474747]'>Salary :</span> &nbsp; {salary} (Per Year)</p>
                <p className='text-[#757575] text-xl inline-flex items-center'> <CalendarDaysIcon className='w-5 h-5 text-indigo-400' /> <span className=' ml-2 font-bold text-[#474747]'>Job Title : </span> &nbsp; {job_title}</p>
            </div>
                <hr className='border-gray-300 my-6' />
            <div className='space-y-4'>
                <p className='text-xl font-extrabold'>Contact Information </p>
                <p className='text-[#757575] text-xl inline-flex items-center'> <PhoneIcon className='w-5 h-5 text-indigo-400' /> <span className=' ml-2 font-bold text-[#474747]'>Phone :</span> &nbsp; {contact_info?.phone}</p>
                <p className='text-[#757575] text-xl inline-flex items-center'> <EnvelopeIcon className='w-5 h-5 text-indigo-400' /> <span className=' ml-2 font-bold text-[#474747]'>Email : </span> &nbsp; {contact_info?.email}</p>
                <p className='text-[#757575] text-xl inline-flex items-center'> <span><MapPinIcon className='w-5 h-5 text-indigo-400' /></span> <span className='ml-2 font-bold text-[#474747]'>Address : </span> &nbsp; {location}</p>
            </div>
        </div>
        <button onClick={ () => handlerApply(id) } className='btn mt-6 w-full h-16'>Apply Now</button>
    </div> 
    );
};

export default JobDetails;
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon  } from '@heroicons/react/24/outline'

const Details = () => {
    const data = useLoaderData()

    const {useId} = useParams();

    const [details, setDetails] = useState({});
    const { id, job_title, location, salary, job_desc, job_resp, education, experience, contact_info } = details;
    // console.log(details);

    useEffect( () => {
        const singleData = data.find(d => d.id === useId);
        setDetails(singleData)
    }, [])

    return (
        <section>

            <div className='bg-[#F9F9FF] py-28'>
                <h1 className='text-center text-3xl font-extrabold'>Job Details</h1>
            </div>

            <div className='px-12 md:px-32'>
                <div className='my-28 md:flex justify-between gap-4'>
                    <div className='space-y-6'>
                        <p className='text-[#757575] font-medium leading-8'><span className='text-black font-extrabold'>Job Description:</span> {job_desc}</p>
                        <p className='text-[#757575] font-medium leading-8'><span className='text-black font-extrabold'>Job Responsibility:</span> {job_resp}</p>
                        <p className='text-[#757575] font-medium leading-8'><span className='text-black font-extrabold'>Educational Requirements:</span> <br /> {education}</p>
                        <p className='text-[#757575] font-medium leading-8'><span className='text-black font-extrabold'>Experience:</span> <br /> {experience}</p>
                    </div>
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
                        <button className='btn mt-6 w-full h-16'>Apply Now</button>
                    </div>    
                </div>
            </div>
        </section>
    );
};

export default Details;
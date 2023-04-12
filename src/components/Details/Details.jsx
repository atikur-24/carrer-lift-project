import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetails from './JobDetails';

const Details = () => {
    const data = useLoaderData()

    const {useId} = useParams();

    const [details, setDetails] = useState({});
    const { id, job_title, location, salary, job_desc, job_resp, education, experience, contact_info } = details;

    useEffect( () => {
        const singleData = data.find(d => d.id === useId);
        setDetails(singleData)
    }, [])

    return (
        <section>

            <div className='bg-[#F9F9FF] py-28 relative'>
            <img className='absolute -top-28 right-0' src="/All Images/Vector-1.png" alt="vector" />
                <h1 className='text-center text-3xl font-extrabold'>Job Details</h1>
            <img className='absolute bottom-0 left-0' src="/All Images/Vector.png" alt="vector" />
            </div>

            <div className='px-12 md:px-32'>
                <div className='my-28 lg:flex justify-between gap-4'>
                    <div className='space-y-6'>
                        <p className='text-[#757575] font-medium leading-8'><span className='text-black font-extrabold'>Job Description:</span> {job_desc}</p>
                        <p className='text-[#757575] font-medium leading-8'><span className='text-black font-extrabold'>Job Responsibility:</span> {job_resp}</p>
                        <p className='text-[#757575] font-medium leading-8'><span className='text-black font-extrabold'>Educational Requirements:</span> <br /> {education}</p>
                        <p className='text-[#757575] font-medium leading-8'><span className='text-black font-extrabold'>Experience:</span> <br /> {experience}</p>
                    </div>
                    <div>
                        {
                            <JobDetails details={details} />
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
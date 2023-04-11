import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()

    const {useId} = useParams();

    const [details, setDetails] = useState({});
    const { id, logo, job_title, brand_name, office, job_type, location, salary } = details;
    // console.log(details);

    useEffect( () => {
        const singleData = data.find(d => d.id === useId);
        setDetails(singleData)
    }, [])

    return (
        <section>
            <div className='bg-[#F9F9FF] py-28'>
                <h1 className='text-center text-xl font-extrabold'>Job Details</h1>
            </div>
        </section>
    );
};

export default Details;
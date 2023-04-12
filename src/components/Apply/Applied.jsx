import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedDetails from './AppliedDetails';
import getPreviousApply from '../../utilities/fakeDb';

const Applied = () => {
    const allData = useLoaderData();
    const getId = getPreviousApply();

    let appliedData = [];
    for(const id in getId) {
        const applyData = allData.find(ad => ad.id == id)
        appliedData.push(applyData);
    }

    return (
        <section>
            <div className='bg-[#F9F9FF] py-28 relative'>
             <img className='absolute -top-28 right-0' src="/All Images/Vector-1.png" alt="vector" />
                <h1 className='text-center text-3xl font-extrabold'>Applied Jobs</h1>
                <img className='absolute bottom-0 left-0' src="/All Images/Vector.png" alt="vector" />
            </div>       
                
            <div className='my-32 px-12 md:px-32'>
            {
                appliedData?.map(apply => <AppliedDetails key={apply?.id} apply={apply} />)
            }
            </div>
        </section>
    );
};

export default Applied;
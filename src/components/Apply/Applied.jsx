import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakeDb';
import AppliedDetails from './AppliedDetails';

const Applied = () => {
    const allData = useLoaderData();
    const getId = getShoppingCart();

    let appliedData = [];
    for(const id in getId) {
        const applyData = allData.find(ad => ad.id == id)
        appliedData.push(applyData);
    }

    return (
        <section>
            <div className='bg-[#F9F9FF] py-28'>
                <h1 className='text-center text-3xl font-extrabold'>Job Details</h1>
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
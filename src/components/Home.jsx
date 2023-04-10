import React from 'react';
import Banner from './Home/Banner';
import Category from './Home/Category';

const Home = () => {
    return (
        <main className='px-12 pt-10 md:px-32'>
            <Banner />
            <Category />
        </main>
    );
};

export default Home;
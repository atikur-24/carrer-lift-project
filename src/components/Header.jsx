import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='px-10 md:px-32 pt-10 bg-[#F9F9FF]'>
            <div className=' flex justify-between items-center'>
                <h1 className='font-extrabold text-3xl'>Career Lift</h1>
                <nav className='space-x-8'>
                    <NavLink className={`${(isActive) => isActive ? 'ab' : 'd'}`} to='/'>Home</NavLink>
                    <NavLink  className={`${(isActive) => isActive ? 'ab' : 'd'}`} to='/statistics'>Statistics</NavLink>
                    <NavLink  className={`${(isActive) => isActive ? 'ab' : 'd'}`}to='/apply'>Applied Jobs</NavLink>
                    <NavLink  className={`${(isActive) => isActive ? 'ab' : 'd'}`}to='/blogs'>Blogs</NavLink>
                </nav>
                <button className='btn h-16 w-48'>Start Applying</button>
            </div>
        </header>
    );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='px-12 md:px-32 pt-10 bg-[#F9F9FF]'>
            <div className='md:flex justify-between items-center'>
                <h1 className='font-extrabold text-xl md:text-3xl tracking-wide'>Career <span className='text-indigo-400'>Lift</span></h1>
                <nav className='space-x-8'>
                    <NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to='/'>Home</NavLink>
                    <NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to='/statistics'>Statistics</NavLink>
                    <NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to='/applied'>Applied Jobs</NavLink>
                    <NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to='/blogs'>Blogs</NavLink>
                </nav>
                <button className='btn h-16 w-48'>Start Applying</button>
            </div>
        </header>
    );
};

export default Header;
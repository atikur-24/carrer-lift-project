import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-black px-12 md:px-32 py-20 md:py-28'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-start md:justify-items-end content-center space-y-8 md:space-y-0'>
                <div className='space-y-6'>
                    <h3 className='text-white font-bold text-3xl'>Career Lift</h3>
                    <p className='text-gray-400'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img className='cursor-pointer' src="/Icons/Group 9969.png" alt="" />
                </div>

                <div className='text-gray-400 space-y-6'>
                    <h4 className='text-white text-xl font-semibold'>Company</h4>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div className='text-gray-400 space-y-6'>
                    <h4 className='text-white text-xl font-semibold'>Product</h4>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div className='text-gray-400 space-y-6'>
                    <h4 className='text-white text-xl font-semibold'>Support</h4>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div className='text-gray-400 space-y-6'>
                    <h4 className='text-white text-xl font-semibold'>Contact</h4>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <hr className='border-gray-800 my-12' />
            <div className='md:flex justify-between items-center text-gray-500'>
                <p>@2023 CareerLift. All Rights Reserved</p>
                <p>Powered by <span className='text-gray-400 font-medium'>CareerLift</span> </p>
            </div>
        </footer>
    );
};

export default Footer;
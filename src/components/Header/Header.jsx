import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center md:mx-20'>
            <h2 className='text-3xl font-bold'>PhotoHub</h2>
            <nav>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/orders">Orders</Link>
                <Link className='nav-link' to="/login">Login</Link>
                <Link className='nav-link' to="/register">Register</Link>
            </nav>
            <div className='flex items-center gap-5'>
                <p className='text-lg font-semibold'>Profile</p>
                <button className='btn-primary'>Get Started</button>
            </div>
        </div>
    );
};

export default Header;
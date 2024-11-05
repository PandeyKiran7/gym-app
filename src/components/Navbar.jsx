// Navbar.jsx
import React from 'react';

export default function Navbar() {
    return (
        <nav className='bg-gray-900 text-gray-200 p-4 shadow-lg'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                {/* Logo or Brand Name */}
                <h1 className='text-2xl font-bold text-blue-400'>
                    Swole<span className='text-white'>Zone</span>
                </h1>
                
                {/* Navigation Links */}
                <div className='flex gap-6 text-sm sm:text-base'>
                    <a href="#hero" className='hover:text-blue-400 transition-colors duration-200'>Home</a>
                    <a href="#generate" className='hover:text-blue-400 transition-colors duration-200'>Generate Workout</a>
                    <a href="#workout" className='hover:text-blue-400 transition-colors duration-200'>Workout Zone</a>
                    <a href="#contact" className='hover:text-blue-400 transition-colors duration-200'>Contact</a>
                </div>

                {/* CTA Button */}
                <button 
                    onClick={() => window.location.href = '#generate'}
                    className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300'>
                    Start Now
                </button>
            </div>
        </nav>
    );
}

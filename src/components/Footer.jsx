// Footer.jsx
import React from 'react';
import { TwitterLogo, FacebookLogo, InstagramLogo } from 'phosphor-react'; 
export default function Footer() {
    return (
        <footer className='bg-gray-900 text-gray-200 p-6 mt-10'>
            <div className='max-w-7xl mx-auto flex flex-col items-center'>
              
                <h1 className='text-2xl font-bold text-blue-400 mb-2'>
                    Swole<span className='text-white'>Zone</span>
                </h1>
                
             
                <div className='flex gap-6 text-sm sm:text-base mb-4'>
                    <a href="#hero" className='hover:text-blue-400 transition-colors duration-200'>Home</a>
                    <a href="#generate" className='hover:text-blue-400 transition-colors duration-200'>Generate Workout</a>
                    <a href="#workout" className='hover:text-blue-400 transition-colors duration-200'>Workout Zone</a>
                    <a href="#contact" className='hover:text-blue-400 transition-colors duration-200'>Contact</a>
                </div>

             
                <div className='flex gap-4 mb-4'>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <TwitterLogo size={24} className='text-blue-400 hover:text-white transition-colors duration-200' />
                    </a>
                    <a href="https://www.facebook.com/cr.kiranpandey" target="_blank" rel="noopener noreferrer">
                        <FacebookLogo size={24} className='text-blue-400 hover:text-white transition-colors duration-200' />
                    </a>
                    <a href="https://www.instagram.com/qr/?__pwa=1" target="_blank" rel="noopener noreferrer">
                        <InstagramLogo size={24} className='text-blue-400 hover:text-white transition-colors duration-200' />
                    </a>
                </div>

           
                <p className='text-sm text-gray-400'>© 2024 SwoleZone. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

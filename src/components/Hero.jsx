import React from 'react';
import Button from './Button';

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center text-center max-w-[800px] w-full mx-auto px-6 py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200'>
            <div className='flex flex-col gap-4'>
                <p className='text-lg text-blue-300 tracking-wider uppercase'>Are you ready to</p>
                <h1 className='uppercase font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight'>
                    Get <span className='text-blue-400'>Swole</span>
                </h1>
            </div>
            <p className='text-sm md:text-base font-light max-w-md mt-4 tracking-wide'>
                Embark on the journey to become <span className='text-blue-400 font-semibold'>unstoppably strong</span> and fearless. Accept the challenge to evolve into a <span className='text-blue-400 font-semibold'>force of nature</span>, ready to conquer any barrier in your path.
            </p>
            <Button
                func={() => window.location.href = '#generate'}
                text={"Begin Your Transformation"}
                className='mt-12 px-8 py-3 bg-blue-600 text-white font-semibold uppercase rounded-full shadow-lg hover:bg-blue-500 hover:shadow-2xl transition duration-300 transform hover:scale-105 tracking-wider'
            />
        </div>
    );
}

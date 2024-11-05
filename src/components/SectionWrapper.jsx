import React from 'react'

export default function SectionWrapper(props) {
    const { children, header, title, id } = props
    return (
        <section id={id} className='min-h-screen flex flex-col gap-12 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100'>
            <div className='bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center p-4 shadow-lg'>
                <p className='uppercase font-semibold text-blue-300 tracking-wide text-sm sm:text-base'>
                    {header}
                </p>
                <h2 className='font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight'>
                    {title[0]} <span className='text-blue-400'>{title[1]}</span> {title[2]}
                </h2>
            </div>
            <div className='max-w-[800px] w-full flex flex-col mx-auto gap-8 p-6 bg-gray-800 rounded-lg shadow-md'>
                {children}
            </div>
        </section>
    )
}

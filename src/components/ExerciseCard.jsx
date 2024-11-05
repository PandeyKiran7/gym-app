import React, { useState } from 'react';

export default function ExerciseCard(props) {
    const { exercise, i } = props;
    const [setsCompleted, setSetsComplete] = useState(0);

    function handleSetIncrement() {
        setSetsComplete((setsCompleted + 1) % 6);
    }

    return (
        <div className='p-6 rounded-lg shadow-lg bg-slate-800 hover:bg-slate-700 transition duration-300 flex flex-col gap-4'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
                <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-300'>
                    0{i + 1}
                </h4>
                <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center text-slate-200'>
                    {exercise.name.replaceAll("_", " ")}
                </h2>
                <p className='text-sm text-slate-400 capitalize'>{exercise.type}</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-slate-400 text-sm'>Muscle Groups</h3>
                <p className='capitalize text-slate-300'>{exercise.muscles.join(' & ')}</p>
            </div>

            <div className='flex flex-col bg-slate-850 rounded-md p-4'>
                {exercise.description.split('___').map((val, index) => (
                    <div key={index} className='text-sm text-slate-300'>
                        {val}
                    </div>
                ))}
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-4'>
                {['reps', 'rest', 'tempo'].map(info => (
                    <div key={info} className='flex flex-col p-4 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 transition duration-200 w-full'>
                        <h3 className='capitalize text-slate-400 text-sm'>{info === 'reps' ? `${exercise.unit}` : info}</h3>
                        <p className='font-medium text-slate-200'>{exercise[info]}</p>
                    </div>
                ))}
                <button onClick={handleSetIncrement} className='flex flex-col p-4 rounded-lg border border-blue-900 bg-blue-600 hover:bg-blue-500 transition duration-200 w-full'>
                    <h3 className='text-slate-400 text-sm capitalize'>Sets completed</h3>
                    <p className='font-medium text-slate-200'>{setsCompleted} / 5</p>
                </button>
            </div>
        </div>
    );
}
import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

function Header({ index, title, description }) {
    return (
        <div className='flex flex-col gap-4 items-center text-center'>
            <div className='flex items-center gap-2'>
                <p className='text-4xl font-bold text-indigo-400'>{index}</p>
                <h4 className='text-2xl font-semibold text-gray-200'>{title}</h4>
            </div>
            <p className='text-base max-w-xs text-gray-400'>{description}</p>
        </div>
    )
}

export default function Generator({ muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout }) {
    const [showModal, setShowModal] = useState(false)

    function toggleModal() {
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }
        if (muscles.length > 2) return
        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }
        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) setShowModal(false)
    }

    return (
        <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
            <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure."} />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => (
                    <button
                        key={typeIndex}
                        onClick={() => {
                            setMuscles([])
                            setPoison(type)
                        }}
                        className={`bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 hover:scale-105 hover:border-indigo-500 duration-200 ${
                            type === poison ? 'border-indigo-500' : ''
                        }`}
                    >
                        <p className='capitalize text-white'>{type.replaceAll('_', " ")}</p>
                    </button>
                ))}
            </div>

            <Header index={'02'} title={'Lock on targets'} description={"Select the muscles judged for annihilation."} />
            <div className='relative bg-gray-800 border border-gray-600 rounded-lg p-3'>
                <button onClick={toggleModal} className='w-full text-white flex justify-between items-center'>
                    <span>{muscles.length === 0 ? 'Select muscle groups' : muscles.join(', ')}</span>
                    <i className="fa-solid fa-caret-down"></i>
                </button>
                {showModal && (
                    <div className='absolute w-full mt-2 bg-gray-900 border border-gray-700 rounded-lg p-3 z-10'>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => (
                            <button
                                key={muscleGroupIndex}
                                onClick={() => updateMuscles(muscleGroup)}
                                className={`w-full text-left p-2 hover:text-indigo-400 duration-200 ${
                                    muscles.includes(muscleGroup) ? 'text-indigo-400' : 'text-gray-300'
                                }`}
                            >
                                {muscleGroup.replaceAll('_', ' ').toUpperCase()}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective."} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
                    <button
                        key={schemeIndex}
                        onClick={() => setGoal(scheme)}
                        className={`bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 hover:scale-105 hover:border-indigo-500 duration-200 ${
                            scheme === goal ? 'border-indigo-500' : ''
                        }`}
                    >
                        <p className='capitalize text-white'>{scheme.replaceAll('_', " ")}</p>
                    </button>
                ))}
            </div>
            <Button func={updateWorkout} text={"Formulate"} className='hover:bg-indigo-600' />
        </SectionWrapper>
    )
}

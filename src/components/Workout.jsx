import React from 'react';
import SectionWrapper from './SectionWrapper';
import ExerciseCard from './ExerciseCard';

export default function Workout(props) {
    const { workout } = props;

    return (
        <SectionWrapper id={'workout'} header={"Welcome to"} title={['The', 'DANGER', 'Zone']}>
            <div className='flex flex-col gap-8 p-6 max-w-[800px] mx-auto'>
                {workout.map((exercise, i) => (
                    <ExerciseCard i={i} exercise={exercise} key={i} />
                ))}
            </div>
        </SectionWrapper>
    );
}

import React from 'react';
import Event from '../../Assests/event.png';





function SectOne() {
    return (
        <div className="w-full bg-yellow-50 py-6 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className='flex flex-col justify-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-green uppercase'>CYON Archdiocese LAGOS is the hub of over 1 million Catholic Youths</h1>
                <p className='font-medium py-2'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti 
                    eligendi natus quasi sit saepe aspernatur rerum quae, commodi, voluptate quos 
                    nobis quia consequuntur amet minima accusamus numquam, pariatur suscipit.
                </p> <br />
                <p className='font-medium py-2'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti 
                    eligendi natus quasi sit saepe aspernatur rerum quae, commodi, voluptate quos 
                    nobis quia consequuntur amet minima accusamus numquam, pariatur suscipit.
                </p>
                </div>
                <img className='w-[400px] rounded-none mx-auto my-2 shadow-sm' src={Event} alt="/" />
            </div>
        </div>
    )
}

export default SectOne;
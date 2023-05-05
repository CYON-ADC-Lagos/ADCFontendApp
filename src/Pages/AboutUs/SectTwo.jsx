import React from 'react'
import Event2 from '../../Assests/event2.png'




function SectTwo() {
    return (
        <div className='w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] rounded-none mx-auto my-4 shadow-sm' src={Event2} alt="laptop" />
            <div className="flex flex-col justify-center">
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-green uppercase'>We are embodied in one spirit of love and unity </h1>
            <p className='font-medium py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti 
                eligendi natus quasi sit saepe aspernatur rerum quae, commodi, voluptate quos 
                nobis quia consequuntur amet minima accusamus numquam, pariatur suscipit.
            </p>
            <p className='font-medium py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti 
                eligendi natus quasi sit saepe aspernatur rerum quae, commodi, voluptate quos 
                nobis quia consequuntur amet minima accusamus numquam, pariatur suscipit.
            </p>
            </div>
        </div>
    </div>
    )
}

export default SectTwo;
import React from 'react';
import CyonLogo from '../../Assests/cyonlogo.png';



function SectThree() {
    return (

        <div className="w-full bg-lime-300 py-[10rem] px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <div className='flex flex-col justify-center p-4'>
            <img className='w-20' src={CyonLogo} alt="/" />
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-white uppercase'>our mission</h1>
            <p className='font-medium py-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti 
                eligendi natus quasi sit saepe aspernatur rerum quae, commodi, voluptate quos 
                nobis quia consequuntur amet minima accusamus numquam, pariatur suscipit.
            </p> <br />
            <p className='font-medium py-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti 
                eligendi natus quasi sit saepe aspernatur rerum quae, commodi, voluptate quos 
                nobis quia consequuntur amet minima accusamus numquam, pariatur suscipit.
            </p>
            </div>
            
            <div className='flex flex-col justify-center p-4'>
            <img className='w-20' src={CyonLogo} alt="/" />
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-white uppercase'>our vision</h1>
            <p className='font-medium py-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti 
                eligendi natus quasi sit saepe aspernatur rerum quae, commodi, voluptate quos 
                nobis quia consequuntur amet minima accusamus numquam, pariatur suscipit.
            </p> <br />
            <p className='font-medium py-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti 
                eligendi natus quasi sit saepe aspernatur rerum quae, commodi, voluptate quos 
                nobis quia consequuntur amet minima accusamus numquam, pariatur suscipit.
            </p>
            </div>
        </div>
    </div>
    )

    
}

export default SectThree;
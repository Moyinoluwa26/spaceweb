import React from 'react';
import lapview from '../crew/background-crew-desktop.jpg';
/*import tabview from '../crew/background-crew-tablet.jpg';
import mobview from '../crew/background-crew-mobile.jpg';*/

export default function crew() {
    return ( <div className='w-full h-screen flex  text-white bg-black'
       style={{backgroundImage : `url(${lapview})`}}>
        <div className='flew flex col w-1/2 justify-center items-center h-64'>
                <div className='flex mt-18 mr-12 text-lg'><h1 className='text-white mx-4'>02</h1>
                <span className='text-gray-500'>MEET YOUR CREW</span>
                </div>
            </div>
    </div>)};
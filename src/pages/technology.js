import React from 'react';

import lapview from '../technology/background-technology-desktop.jpg';
/*import tabview from '../technology/background-technology-tablet.jpg';
import mobview from '../technology/background-technology-mobile.jpg';*/

export default function technology() {



    return (
        <div className='w-full h-screen flex  text-white bg-black'
        style={{backgroundImage : `url(${lapview})`}}>
        <div className='flew flex col w-1/2 justify-center items-center h-64'>
                <div className='flex mt-18 mr-12 text-lg'><h1 className='text-white mx-4'>04</h1>
                <span className='text-gray-500'>SPACE LAUNCH 101 </span>               </div>
            </div>
            </div>
            
    )};

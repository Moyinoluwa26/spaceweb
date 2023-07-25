import React from 'react';

import lapview from '../technology/background-technology-desktop.jpg';
import TechNav from './Ubtechnology/TechNav';
/*import tabview from '../technology/background-technology-tablet.jpg';
import mobview from '../technology/background-technology-mobile.jpg';*/

export default function technology() {



    return (
        <div className='w-full h-screen flex flex-col  text-white '
        style={{backgroundImage : `url(${lapview})`}}>
        <div className='flex flex-col w-1/2 justify-center items-center h-36 bg-black'>
                <div className='flex mt-24 mr-20 text-lg'><h1 className='text-white mx-4'>04</h1>
                <span className='text-gray-500'>SPACE LAUNCH 101 </span>               </div>
        </div>
        <div>
            <div><TechNav/></div>
        </div>

        
            </div>
            
    )};

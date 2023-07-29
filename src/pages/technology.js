import React from 'react';

import lapview from '../technology/background-technology-desktop.jpg';
import TechNav from './Ubtechnology/TechNav';
import { Route,Routes } from 'react-router-dom';

import Launch from './Ubtechnology/Launch';
import SpaceCap from './Ubtechnology/SpaceCap';
import Sport from './Ubtechnology/Sport';
/*import tabview from '../technology/background-technology-tablet.jpg';
import mobview from '../technology/background-technology-mobile.jpg';*/

export default function technology() {



    return (
        <div className='w-full md:h-screen flex flex-col  text-white '
        style={{backgroundImage : `url(${lapview})`}}>
        <div className='flex flex-col md:w-1/2 justify-center items-center h-36 '>
                <div className='flex mt-24 mr-20 text-lg'><h1 className='text-white mx-4'>04</h1>
                <span className='text-gray-500'>SPACE LAUNCH 101 </span>               </div>
        </div>
        <div className='flex md:flex-row flex-col'>
            <div><TechNav/></div>
            
            <div className='flex  flex-row justify-center items-center w-full '>
                
            <Routes>
             
             <Route index element={<Launch/>}/>
             <Route path='/Launch' element={<Launch/>}/>
             <Route path='/SpaceCap' element={<SpaceCap/>}/>
             <Route path='/Sport' element={<Sport/>}/>
            

            </Routes>
        </div>
        </div>

        
            </div>
            
    )};

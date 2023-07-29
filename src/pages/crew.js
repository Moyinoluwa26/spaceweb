import React from 'react';
import lapview from '../crew/background-crew-desktop.jpg';
import CrewNav from './Ubcrew/CrewNav';
import Douglas from './Ubcrew/Douglas';
import {Routes,Route} from 'react-router-dom';
import Mark from './Ubcrew/Mark';
import Victor from './Ubcrew/Victor';
import Anouseh from './Ubcrew/Anouseh';

/*import tabview from '../crew/background-crew-tablet.jpg';
import mobview from '../crew/background-crew-mobile.jpg';*/

export default function crew() {
    return ( <div className='w-full md:h-screen h-full flex flex-col justify-center items-center text-white bg-black '
       style={{backgroundImage : `url(${lapview})`}}>
        <div className='flew flex col md:mr-96 md:w-1/2 justify-start items-center h-48'>
                <div className='flex text-lg'><h1 className='text-white mx-4'>02</h1>
                <span className='text-gray-500'>MEET YOUR CREW</span>
                </div>
            

            
        </div>

        <div className='md:absolute bottom-9 left-32 '>
        <div><CrewNav/></div>
        </div>
        
        
        <div className='flex justify-center items-center'>
            <Routes>
             <Route path='/' element={<Douglas/>}/>
             <Route path='/douglas' element={<Douglas/>}/>
             <Route path='/mark' element={<Mark/>}/>
             <Route path='/victor' element={<Victor/>}/>
             <Route path='/anouseh' element={<Anouseh/>}/>

            </Routes>
        </div>

        
        
    </div>)};
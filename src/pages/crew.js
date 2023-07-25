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
    return ( <div className='w-full h-screen flex flex-col text-white bg-black'
       style={{backgroundImage : `url(${lapview})`}}>
        <div className='flew flex col w-1/2 justify-center items-center h-64'>
                <div className='flex mt-18 mr-48 text-lg'><h1 className='text-white mx-4'>02</h1>
                <span className='text-gray-500'>MEET YOUR CREW</span>
                </div>
                {/*<div className='flex w-1/2 h-64  ml-64'>
                <div></div>
                </div>*/}

            
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

        <div className='absolute bottom-9 left-36 '>
        <div><CrewNav/></div>
        </div>
        
    </div>)};
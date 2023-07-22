import React from 'react';
import lapview from '../destination/background-destination-desktop.jpg';
/*import tabview from '../destination/background-destination-tablet.jpg';
/*import mobview from '../destination/background-destination-mobile.jpg';*/
import Navigation from './Ubdestination/Navigation';
import {Routes , Route} from "react-router-dom";
import Moon from './Ubdestination/Moon';
import Mars from './Ubdestination/mars';
import Europa from './Ubdestination/Europa';
import Titan from './Ubdestination/Titans'

export default function Destination() {

   return ( 
        <div className='w-full h-screen  text-white flex flex-col' 
        style={{ backgroundImage: `url(${lapview})` }}>
            <div className='flex w-full justify-center items-center h-64 '>
                
                <div className='flex mt-18 mr-12 text-lg'><h1 className='text-white mx-4'>01</h1>
                <span className='text-gray-500'>PICK YOUR DESTINATION</span>
                </div>
                <div>DESCRIPTION</div>
                <div className='flex w-1/2 h-64 '>
                <div><Navigation/></div>
                </div>

    

            </div>
            
        
            <div className='flex justify-center items-center '>   
                    <Routes>
                        <Route index element={<Moon/>}/>
                        <Route path='/moon' element={<Moon/>}/>
                        <Route path='/mars' element={<Mars/>}/>
                        <Route path='/europa' element={<Europa/>}/>
                        <Route path='/titans' element={<Titan/>}/>
                    </Routes>

        

                
                
                
    

             </div>
            
                
            
        </div>
    );
};



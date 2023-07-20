import React from 'react';
import lapview from '../destination/background-destination-desktop.jpg';
/*import tabview from '../destination/background-destination-tablet.jpg';
/*import mobview from '../destination/background-destination-mobile.jpg';*/
 

export default function Destination() {
    console.log(window.location.pathname)
    return  ( 
        <div className='w-full h-screen flex justify-center items-center text-white bg-black' 
        style={{ backgroundImage: `url(${lapview})` }}
            
        >
            Destination
        </div>
    );
};
import React from 'react';
import lapview from '../crew/background-crew-desktop.jpg';
/*import tabview from '../crew/background-crew-tablet.jpg';
import mobview from '../crew/background-crew-mobile.jpg';*/

export default function crew() {
    return ( <div className='w-full h-screen flex justify-center items-center text-white bg-black'
       style={{backgroundImage : `url(${lapview})`}}>
        Contact
    </div>)};
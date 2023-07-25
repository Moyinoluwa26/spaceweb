import React from 'react';
import VicImg from './image-victor-glover.webp';

/*{
    "name": "",
    "images": {
      "png": "./assets/crew/image-victor-glover.png",
      "webp": "./assets/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": ""
  },*/
   
function Victor () {
    return ( <div className='flex flex-row w-9/12 mr-9  '>
    <div className='w-1/2 flex flex-col'>
      <h1 className='py-2 text-3xl text-gray-500'>Pilot</h1>
      <span className='py-2 text-6xl my-3'>Victor Glover</span>
      <p className='text-lg'>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
    </div>
    <div className='flex mx-auto'><img src={VicImg} alt='Douglas' className=  ' mx-auto  h-96'  /></div>
  </div>  );
}

export default Victor ;
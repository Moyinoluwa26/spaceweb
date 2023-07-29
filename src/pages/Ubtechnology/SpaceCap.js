import React from 'react';
import spaceImg from './image-space-capsule-portrait.jpg';

/*
  {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": ""
    }
  ]
  */
function SpaceCap () {
    return (  <div className='flex w-full justify-between md:ml-14 md:flex-row flex-col-reverse'>
    <div className='my-16 md:ml-0 ml-8'>
       <h1 className='text-sm text-gray-500'>THE TERMINOLOGY.....</h1>
       <h2 className='text-6xl text-white my-4 '>Space Capsule</h2>
       <h1 className=' text-white md:mr-48'>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</h1>

    </div>
    
    <img src={spaceImg} alt='launch' className='flex h-96 md:mx-0 mx-auto'/>

  </div> );
}

export default SpaceCap ;
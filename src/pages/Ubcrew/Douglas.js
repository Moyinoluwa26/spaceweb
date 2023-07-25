import React from 'react';
import DogImg from './image-douglas-hurley.webp';
 

/*{
    "name": "",
    "images": {
      "png": "./assets/crew/image-douglas-hurley.png",
      "webp": "./assets/crew/image-douglas-hurley.webp"
    },
    "role": "",
    "bio": ""
  }*/

  function Douglas () {
    return ( <div className='flex flex-row w-9/12 mr-9  '>
      <div className='w-1/2 flex flex-col'>
        <h1 className='py-2 text-3xl text-gray-500'>Commander</h1>
        <span className='py-2 text-6xl my-3'>Douglas Hurley</span>
        <p className='text-lg'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
      </div>
      <div className='flex mx-auto'><img src={DogImg} alt='Douglas' className=  ' mx-auto  h-96'  /></div>
    </div> );
  }
  
  export default Douglas ;
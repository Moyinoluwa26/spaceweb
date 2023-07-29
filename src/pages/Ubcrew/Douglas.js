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
    return ( <div className='flex mt-8 md:mt-0  md:flex-row flex-col-reverse w-9/12 md:mr-9   '>
      <div className='md:w-1/2 flex flex-col '>
        <h1 className='py-2 text-3xl text-gray-500 mx-auto md:mx-0'>Commander</h1>
        <span className='py-2 md:text-6xl  text-4xl my-3 mx-auto md:mx-0'>Douglas Hurley</span>
        <p className='text-lg  '>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
      </div>
      <div className='flex mx-auto'><img src={DogImg} alt='Douglas' className=  ' mx-auto  h-96 md:mb-o mb-10 '  /></div>
    </div> );
  }
  
  export default Douglas ;
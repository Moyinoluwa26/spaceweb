import React from 'react';
import MakImg from './image-mark-shuttleworth.webp';
/*{
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": ""
    }*/

  function Mark () {
    return ( <div className='flex mt-8 md:mt-0 md:flex-row flex-col-reverse w-9/12 mr-9  '>
    <div className='md:w-1/2 flex flex-col'>
      <h1 className='py-2 text-3xl text-gray-500 mx-auto md:mx-0'>Mission Specialist</h1>
      <span className='py-2 text-4xl my-3 mx-auto md:mx-0'>Mark Shuttleworth</span>
      <p className='text-lg '>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
    </div>
    <div className='flex mx-auto'><img src={MakImg} alt='Douglas' className=  ' mx-auto  h-96 md:mb-0 mb-10'  /></div>
  </div>  );
  }
  
  export default Mark ;